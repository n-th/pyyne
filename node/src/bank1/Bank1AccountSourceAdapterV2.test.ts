import { type Bank1AccountSource } from '../../bank1/Bank1AccountSource'
import { TRANSACTION_TYPES } from '../../bank2/Bank2AccountTransaction'

describe('Bank1AccountSourceAdapterV2', () => {
  let adapter: any
  let mockBank1AccountSource: jest.Mocked<Bank1AccountSource>

  beforeEach(() => {
    adapter = {
      bankName: 'mockedBank1',
      bank1AccountSource: mockBank1AccountSource,
      getAccountBalance: jest.fn().mockReturnValue({
        getBalance: jest.fn(() => 111),
        getCurrency: jest.fn(() => 'USD')
      }),
      getTransactions: jest.fn().mockReturnValue([
        {
          getAmount: () => 100,
          getType: () => TRANSACTION_TYPES.CREDIT,
          getText: () => 'Transaction 1'
        },
        {
          getAmount: () => 200,
          getType: () => TRANSACTION_TYPES.DEBIT,
          getText: () => 'Transaction 2'
        }
      ])
    }
  })

  describe('getAccountBalance', () => {
    it('should return the account balance', () => {
      const result = adapter.getAccountBalance(1)
      expect(result.getBalance()).toBe(111)
      expect(result.getCurrency()).toBe('USD')
    })
  })

  describe('getTransactions', () => {
    it('should return an array of account transactions', () => {
      const accountId = 1
      const fromDate = new Date()
      const toDate = new Date()
      const result = adapter.getTransactions(accountId, fromDate, toDate)
      expect(result).toBeInstanceOf(Array)
      expect(result).toHaveLength(2)
      expect(result[0].getAmount()).toBe(100)
      expect(result[0].getType()).toBe(TRANSACTION_TYPES.CREDIT)
      expect(result[0].getText()).toBe('Transaction 1')
      expect(result[1].getAmount()).toBe(200)
      expect(result[1].getType()).toBe(TRANSACTION_TYPES.DEBIT)
      expect(result[1].getText()).toBe('Transaction 2')
    })
  })
})
