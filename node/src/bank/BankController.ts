import { type Bank1AccountSourceAdapter } from '../bank1/Bank1AccountSourceAdapter'
import { type Bank2AccountSourceAdapter } from '../bank2/Bank2AccountSourceAdapter'

type AccountSourceAdapter = Bank1AccountSourceAdapter | Bank2AccountSourceAdapter

class BankController {
  private readonly adapters: AccountSourceAdapter[]
  accountId: number
  date: Date

  constructor (adapters: AccountSourceAdapter[]) {
    this.adapters = adapters
    this.accountId = 1
    this.date = new Date()
  }

  printBalances () {
    console.log(`Account ${this.accountId} balance:`)
    for (const adapter of this.adapters) {
      console.log('Bank ', adapter.bankName)
      const balance = adapter.getAccountBalance(this.accountId)
      console.log(`Balance: ${balance.getBalance()}`)
      console.log(`Currency: ${balance.getCurrency()}`)
      console.log('===')
    }
  }

  printTransactions () {
    console.log(`Account ${this.accountId} transactions:`)
    for (const adapter of this.adapters) {
      console.log('Bank ', adapter.bankName)
      const transactions = adapter.getTransactions(this.accountId, this.date, this.date)
      transactions.forEach(transaction => {
        console.log(`Amount: ${transaction.getAmount()}`)
        console.log(`Type: ${transaction.getAmount()}`)
        console.log(`Text: ${transaction.getText()}`)
        console.log('===')
      })
    }
  }
}

export { BankController, type AccountSourceAdapter }
