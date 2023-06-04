import { Bank2AccountBalance } from './Bank2AccountBalance'
import { Bank2AccountTransaction, TRANSACTION_TYPES } from './Bank2AccountTransaction'

class Bank2AccountSource {
  getBalance (accountNum: number): Bank2AccountBalance {
    return new Bank2AccountBalance(512.5, 'USD')
  }

  getTransactions (
    accountNum: number,
    fromDate: Date,
    toDate: Date
  ): Bank2AccountTransaction[] {
    return [
      new Bank2AccountTransaction(125, TRANSACTION_TYPES.DEBIT, 'Amazon.com'),
      new Bank2AccountTransaction(500, TRANSACTION_TYPES.DEBIT, 'Car insurance'),
      new Bank2AccountTransaction(800, TRANSACTION_TYPES.CREDIT, 'Salary')
    ]
  }
}

export { Bank2AccountSource }
