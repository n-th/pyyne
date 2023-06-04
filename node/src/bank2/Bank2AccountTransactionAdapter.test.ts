import { Bank2AccountTransaction, TRANSACTION_TYPES } from '../../bank2/Bank2AccountTransaction'
import { Bank2AccountTransactionAdapter } from './Bank2AccountTransactionAdapter'

describe('Bank2AccountTransactionAdapter', () => {
  let adapter: Bank2AccountTransactionAdapter

  beforeEach(() => {
    const transaction = new Bank2AccountTransaction(100, TRANSACTION_TYPES.CREDIT, 'Transaction text')
    adapter = new Bank2AccountTransactionAdapter(transaction)
  })

  describe('getAmount', () => {
    it('should return the transaction amount', () => {
      const result = adapter.getAmount()
      expect(result).toBe(100)
    })
  })

  describe('getType', () => {
    it('should return the transaction type as a string', () => {
      const result = adapter.getType()
      expect(result).toBe(TRANSACTION_TYPES.CREDIT)
    })

    it('should return the transaction type as a string for debit', () => {
      const debitTransaction = new Bank2AccountTransaction(200, TRANSACTION_TYPES.DEBIT, 'Debit transaction')
      adapter = new Bank2AccountTransactionAdapter(debitTransaction)
      const result = adapter.getType()
      expect(result).toBe(TRANSACTION_TYPES.DEBIT)
    })
  })

  describe('getText', () => {
    it('should return the transaction text', () => {
      const result = adapter.getText()
      expect(result).toBe('Transaction text')
    })
  })
})
