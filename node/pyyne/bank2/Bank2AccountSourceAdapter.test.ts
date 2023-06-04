import { Bank2AccountBalance } from '../../bank2/Bank2AccountBalance'
import { type Bank2AccountSource } from '../../bank2/Bank2AccountSource'
import { Bank2AccountTransaction, TRANSACTION_TYPES } from '../../bank2/Bank2AccountTransaction'

describe('Bank2AccountSourceAdapter', () => {
  let adapter: any
  let mockBank2AccountSource: jest.Mocked<Bank2AccountSource>

  beforeEach(() => {
    adapter = {
      bankName: 'mockedBank2',
      bank2AccountSource: mockBank2AccountSource,
      getAccountBalance: jest.fn().mockReturnValue(new Bank2AccountBalance(500, 'USD')),
      getTransactions: jest.fn().mockReturnValue([
        new Bank2AccountTransaction(100, TRANSACTION_TYPES.CREDIT, 'Transaction 1'),
        new Bank2AccountTransaction(200, TRANSACTION_TYPES.DEBIT, 'Transaction 2')
      ])
    }
  })

  describe('getAccountBalance', () => {
    it('should return the account balance', () => {
      const result = adapter.getAccountBalance(123)
      expect(result.getBalance()).toBe(500)
      expect(result.getCurrency()).toBe('USD')
    })
  })

  describe('getTransactions', () => {
    it('should return the account transactions', () => {
      const fromDate = new Date()
      const toDate = new Date()
      const result = adapter.getTransactions(123, fromDate, toDate)
      expect(result).toBeInstanceOf(Array)
      expect(result).toHaveLength(2)
      expect(result[0].getAmount()).toBe(100)
      expect(result[1].getAmount()).toBe(200)
      expect(result[0].getType()).toBe(TRANSACTION_TYPES.CREDIT)
      expect(result[1].getType()).toBe(TRANSACTION_TYPES.DEBIT)
      expect(result[0].getText()).toBe('Transaction 1')
      expect(result[1].getText()).toBe('Transaction 2')
    })
  })
})
