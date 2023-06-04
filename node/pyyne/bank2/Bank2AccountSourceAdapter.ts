import { Bank2AccountBalance } from '../../bank2/Bank2AccountBalance'
import { Bank2AccountSource } from '../../bank2/Bank2AccountSource'
import { type AccountBalanceAdapter, type AccountSourceAdapter, type AccountTransactionAdapter } from '../bank/common'
import { Bank2AccountTransactionAdapter } from './Bank2AccountTransactionAdapter'

class Bank2AccountSourceAdapter implements AccountSourceAdapter {
  private bank2AccountSource: Bank2AccountSource
  bankName: string

  constructor () {
    this.bank2AccountSource = new Bank2AccountSource()
    this.bankName = "bank2"
  }

  getAccountBalance (accountId: number): AccountBalanceAdapter {
    const accountBalance = this.bank2AccountSource.getBalance(accountId)
    const balance = accountBalance.getBalance()
    const currency = accountBalance.getCurrency()

    return new Bank2AccountBalance(balance, currency)
  }

  getTransactions (accountId: number, fromDate: Date, toDate: Date): AccountTransactionAdapter[] {
    const transactions = this.bank2AccountSource.getTransactions(accountId, fromDate, toDate)

    return transactions.map((transaction) => new Bank2AccountTransactionAdapter(transaction))
  }
}

export { Bank2AccountSourceAdapter }
