import { Bank1Transaction } from '../../bank1/Bank1Transaction'
import { TRANSACTION_TYPES } from '../../bank2/Bank2AccountTransaction'
import { Bank1AccountTransactionAdapter } from './Bank1AccountTransactionAdapter'

describe('Bank1AccountTransactionAdapter', () => {
  let adapter: Bank1AccountTransactionAdapter

  beforeEach(() => {
    const transaction = new Bank1Transaction(100, Bank1Transaction.TYPE_CREDIT, 'Transaction text')
    adapter = new Bank1AccountTransactionAdapter(transaction)
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
      const debitTransaction = new Bank1Transaction(200, Bank1Transaction.TYPE_DEBIT, 'Debit transaction')
      adapter = new Bank1AccountTransactionAdapter(debitTransaction)
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
