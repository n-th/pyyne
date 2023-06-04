import { Bank1Transaction } from './Bank1Transaction'

class Bank1AccountSource {
  getAccountBalance (accountId: number): number {
    return 215.5
  }

  getAccountCurrency (accountId: number): string {
    return 'USD'
  }

  getTransactions (
    accountId: number,
    fromDate: Date,
    toDate: Date
  ): Bank1Transaction[] {
    return [
      new Bank1Transaction(100, Bank1Transaction.TYPE_CREDIT, 'Check deposit'),
      new Bank1Transaction(
        25.5,
        Bank1Transaction.TYPE_DEBIT,
        'Debit card purchase'
      ),
      new Bank1Transaction(225, Bank1Transaction.TYPE_DEBIT, 'Rent payment')
    ]
  }
}

export { Bank1AccountSource }
