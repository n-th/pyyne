import { AccountSourceAdapter, BankController } from './BankController';

describe('BankController', () => {
  const originalConsoleLog = console.log

  const HARDCODED_ACCOUNT_ID = 1;
  let adapter1: any
  let adapter2: any
  let controller: BankController

  afterAll(()=> {
    console.log = originalConsoleLog
  })

  beforeEach(() => {
    console.log = jest.fn()
    adapter1 = {
      bankName: 'mockedBank1',
      getAccountBalance: jest.fn().mockReturnValue({
        getBalance: jest.fn().mockReturnValue(1),
        getCurrency: jest.fn().mockReturnValue('BRL')
      }),
      getTransactions: jest.fn().mockReturnValue([
        {
          getAmount: jest.fn().mockReturnValue(11),
          getType: jest.fn().mockReturnValue('CREDIT'),
          getText: jest.fn().mockReturnValue('Transaction 11')
        }
      ])
    }
    adapter2 = {
      bankName: 'mockedBank2',
      getAccountBalance: jest.fn().mockReturnValue({
        getBalance: jest.fn().mockReturnValue(2),
        getCurrency: jest.fn().mockReturnValue('USD')
      }),
      getTransactions: jest.fn().mockReturnValue([
        {
          getAmount: jest.fn().mockReturnValue(23),
          getType: jest.fn().mockReturnValue('CREDIT'),
          getText: jest.fn().mockReturnValue('Transaction 23')
        },
        {
          getAmount: jest.fn().mockReturnValue(24),
          getType: jest.fn().mockReturnValue('DEBIT'),
          getText: jest.fn().mockReturnValue('Transaction 24')
        }
      ])
    }
    const adapters: AccountSourceAdapter[] = [adapter1, adapter2]
    controller = new BankController(adapters)
  })

  describe('printBalances', () => {
    it('should print account balances', () => {
      controller.printBalances()
      expect(adapter1.getAccountBalance).toHaveBeenCalledWith(HARDCODED_ACCOUNT_ID)
      expect(adapter2.getAccountBalance).toHaveBeenCalledWith(HARDCODED_ACCOUNT_ID)
      expect(console.log).toHaveBeenCalledTimes(9)
    })
  })

  describe('printTransactions', () => {
    it('should print account transactions', () => {
      controller.printTransactions()
      expect(adapter1.getTransactions).toHaveBeenCalledWith(HARDCODED_ACCOUNT_ID, expect.any(Date), expect.any(Date))
      expect(adapter2.getTransactions).toHaveBeenCalledWith(HARDCODED_ACCOUNT_ID, expect.any(Date), expect.any(Date))
      expect(console.log).toHaveBeenCalledTimes(15)
    })
  })
})
