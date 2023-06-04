import { Bank1Transaction } from '../../bank1/Bank1Transaction'
import { Bank1AccountSourceAdapter } from './Bank1AccountSourceAdapter'

describe('Bank1AccountSourceAdapter', () => {
  let adapter: Bank1AccountSourceAdapter

  beforeEach(() => {
    adapter = new Bank1AccountSourceAdapter()
  })

  describe('getAccountBalance', () => {
    it('should return the account balance', () => {
      const accountId = 123
      const balance = 500.0
      const currency = 'USD'
      jest.spyOn(adapter['bank1AccountSource'], 'getAccountBalance').mockReturnValue(balance)
      jest.spyOn(adapter['bank1AccountSource'], 'getAccountCurrency').mockReturnValue(currency)

      const result = adapter.getAccountBalance(accountId)

      expect(result.getBalance()).toBe(balance)
      expect(result.getCurrency()).toBe(currency)
    })
  })

  describe('getTransactions', () => {
    it('should return an array of account transactions', () => {
      const accountId = 123
      const fromDate = new Date('2023-01-01')
      const toDate = new Date('2023-12-31')
      const data = [
        { amount: 100, type: 1, text: 'Transaction 1' },
        { amount: 200, type: 2, text: 'Transaction 2' },
      ]
      const transactions: Bank1Transaction[] = data.map(obj => new Bank1Transaction(obj.amount, obj.type, obj.text));
      jest.spyOn(adapter['bank1AccountSource'], 'getTransactions').mockReturnValue(transactions)

      const result = adapter.getTransactions(accountId, fromDate, toDate)

      expect(result.length).toBe(transactions.length)
      expect(result[0].getAmount()).toBe(transactions[0].getAmount())
      expect(result[0].getType()).toBe(transactions[0].getType())
      expect(result[0].getText()).toBe(transactions[0].getText())
      expect(result[1].getAmount()).toBe(transactions[1].getAmount())
      expect(result[1].getType()).toBe(transactions[1].getType())
      expect(result[1].getText()).toBe(transactions[1].getText())
    })
  })
})
