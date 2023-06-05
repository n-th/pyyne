import { Bank1AccountSource } from '../../bank1/Bank1AccountSource'
import { TRANSACTION_TYPES } from '../../bank2/Bank2AccountTransaction'
import { type AccountBalanceAdapter, type AccountSourceAdapter, type AccountTransactionAdapter } from '../bank/common'

//not creating new instances of Bank1AccountTransactionAdapter can lead to improved performance, reduced memory usage, simplified code, and increased flexibility
class Bank1AccountSourceAdapterV2 implements AccountSourceAdapter {
  private readonly bank1AccountSource: Bank1AccountSource
  bankName: string

  constructor () {
    this.bank1AccountSource = new Bank1AccountSource()
    this.bankName = 'bank1'
  }

  getAccountBalance (accountId: number): AccountBalanceAdapter {
    const balance = this.bank1AccountSource.getAccountBalance(accountId)
    const currency = this.bank1AccountSource.getAccountCurrency(accountId)

    return {
      getBalance: () => balance,
      getCurrency: () => currency
    }
  }

  getTransactions (accountId: number, fromDate: Date, toDate: Date): AccountTransactionAdapter[] {
    const transactions = this.bank1AccountSource.getTransactions(accountId, fromDate, toDate)

    return transactions.map((transaction) => ({
      getAmount: () => transaction.getAmount(),
      getType: () => transaction.getType() === 1 ? TRANSACTION_TYPES.CREDIT : TRANSACTION_TYPES.DEBIT,
      getText: () => transaction.getText()
    }))
  }
}

export { Bank1AccountSourceAdapterV2 }
