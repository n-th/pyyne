import { Bank1Transaction } from '../../bank1/Bank1Transaction'
import { type AccountTransactionAdapter } from '../bank/common'

class Bank1AccountTransactionAdapter implements AccountTransactionAdapter {
  private readonly transaction: Bank1Transaction

  constructor (transaction: Bank1Transaction) {
    this.transaction = transaction
  }

  getAmount (): number {
    return this.transaction.getAmount()
  }

  getType (): number {
    return (
      this.transaction.getType()
    )
  }

  getText (): string {
    return this.transaction.getText()
  }
}

export { Bank1AccountTransactionAdapter }
