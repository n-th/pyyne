import { type Bank1Transaction } from '../../bank1/Bank1Transaction'
import { TRANSACTION_TYPES } from '../../bank2/Bank2AccountTransaction'
import { type AccountTransactionAdapter } from '../bank/common'

class Bank1AccountTransactionAdapter implements AccountTransactionAdapter {
  private readonly transaction: Bank1Transaction

  constructor (transaction: Bank1Transaction) {
    this.transaction = transaction
  }

  getAmount (): number {
    return this.transaction.getAmount()
  }

  getType (): string {
    return (
      this.transaction.getType() === 1 ? TRANSACTION_TYPES.CREDIT : TRANSACTION_TYPES.DEBIT
    )
  }

  getText (): string {
    return this.transaction.getText()
  }
}

export { Bank1AccountTransactionAdapter }
