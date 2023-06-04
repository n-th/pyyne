import { Bank1AccountSource } from '../../bank1/Bank1AccountSource'
import { type AccountBalanceAdapter, type AccountSourceAdapter, type AccountTransactionAdapter } from '../bank/common'
import { Bank1AccountBalanceAdapter } from './Bank1AccountBalanceAdapter'
import { Bank1AccountTransactionAdapter } from './Bank1AccountTransactionAdapter'

class Bank1AccountSourceAdapter implements AccountSourceAdapter {
  private bank1AccountSource: Bank1AccountSource
  bankName: string

  constructor () {
    this.bank1AccountSource = new Bank1AccountSource()
    this.bankName = 'bank1'
  }

  getAccountBalance (accountId: number): AccountBalanceAdapter {
    const balance = this.bank1AccountSource.getAccountBalance(accountId)
    const currency = this.bank1AccountSource.getAccountCurrency(accountId)

    return new Bank1AccountBalanceAdapter(balance, currency)
  }

  getTransactions (accountId: number, fromDate: Date, toDate: Date): AccountTransactionAdapter[] {
    const transactions = this.bank1AccountSource.getTransactions(accountId, fromDate, toDate)

    return transactions.map((transaction) => new Bank1AccountTransactionAdapter(transaction))
  }
}

export { Bank1AccountSourceAdapter }
