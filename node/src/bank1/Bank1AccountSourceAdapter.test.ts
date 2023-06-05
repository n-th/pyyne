import { Bank1Transaction } from '../../bank1/Bank1Transaction'
import { TRANSACTION_TYPES } from '../../bank2/Bank2AccountTransaction'
import { type AccountBalanceAdapter, type AccountSourceAdapter, type AccountTransactionAdapter } from '../bank/common'
import { Bank1AccountBalanceAdapter } from './Bank1AccountBalanceAdapter'
import { Bank1AccountSourceAdapter } from './Bank1AccountSourceAdapter'
import { Bank1AccountTransactionAdapter } from './Bank1AccountTransactionAdapter'

describe('Bank1AccountSourceAdapter', () => {
  let adapter: AccountSourceAdapter

  beforeEach(() => {
    adapter = new Bank1AccountSourceAdapter()
  })

  describe('getAccountBalance', () => {
    it('should return the account balance', () => {
      const accountId = 1
      const balance = 500
      const currency = 'USD'

      const balanceAdapter: AccountBalanceAdapter = new Bank1AccountBalanceAdapter(balance, currency)

      jest.spyOn(adapter, 'getAccountBalance').mockReturnValue(balanceAdapter)

      const result = adapter.getAccountBalance(accountId)

      expect(result).toBe(balanceAdapter)
      expect(result.getBalance()).toBe(balance)
      expect(result.getCurrency()).toBe(currency)
    })
  })

  describe('getTransactions', () => {
    it('should return the account transactions', () => {
      const accountId = 1
      const fromDate = new Date()
      const toDate = new Date()

      const transactions: AccountTransactionAdapter[] = [
        new Bank1AccountTransactionAdapter(new Bank1Transaction(1, 1, 'Transaction 1')),
        new Bank1AccountTransactionAdapter(new Bank1Transaction(1, 2, 'Transaction 2'))
      ]

      jest.spyOn(adapter, 'getTransactions').mockReturnValue(transactions)

      const result = adapter.getTransactions(accountId, fromDate, toDate)

      expect(result).toBe(transactions)
      expect(result[0].getAmount()).toBe(1)
      expect(result[0].getType()).toBe(TRANSACTION_TYPES.CREDIT)
      expect(result[0].getText()).toBe('Transaction 1')
      expect(result[1].getAmount()).toBe(1)
      expect(result[1].getType()).toBe(TRANSACTION_TYPES.DEBIT)
      expect(result[1].getText()).toBe('Transaction 2')
    })
  })
})
