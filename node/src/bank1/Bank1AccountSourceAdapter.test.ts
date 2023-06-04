import { Bank1AccountSource } from '../../bank1/Bank1AccountSource'
import { Bank1Transaction } from '../../bank1/Bank1Transaction'
import { Bank2AccountBalance } from '../../bank2/Bank2AccountBalance'

describe('Bank1AccountSourceAdapter', () => {
  let adapter: any
  let mockBank1AccountSource: jest.Mocked<Bank1AccountSource>

  beforeEach(() => {
    adapter = {
      bankName: 'mockedBank1',
      bank1AccountSource: mockBank1AccountSource,
      getAccountBalance: jest.fn().mockReturnValue(new Bank2AccountBalance(111, 'USD')),
      getTransactions: jest.fn().mockReturnValue([
        new Bank1Transaction(100, 1, 'Transaction 1'),
        new Bank1Transaction(200, 2, 'Transaction 2')
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
      expect(result[1].getAmount()).toBe(200)
      expect(result[0].getType()).toBe(1)
      expect(result[1].getType()).toBe(2)
      expect(result[0].getText()).toBe('Transaction 1')
      expect(result[1].getText()).toBe('Transaction 2')
    })
  })
})
