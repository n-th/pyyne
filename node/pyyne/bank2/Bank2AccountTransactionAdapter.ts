import { type Bank2AccountTransaction } from '../../bank2/Bank2AccountTransaction'
import { type AccountTransactionAdapter } from '../bank/common'

class Bank2AccountTransactionAdapter implements AccountTransactionAdapter {
  private readonly transaction: Bank2AccountTransaction

  constructor (transaction: Bank2AccountTransaction) {
    this.transaction = transaction
  }

  getAmount (): number {
    return this.transaction.getAmount()
  }

  getType (): string {
    return (
      this.transaction.getType()
    )
  }

  getText (): string {
    return this.transaction.getText()
  }
}

export { Bank2AccountTransactionAdapter }
