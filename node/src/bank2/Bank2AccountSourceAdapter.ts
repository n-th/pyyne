import { type Bank2AccountBalance } from '../../bank2/Bank2AccountBalance'
import { Bank2AccountSource } from '../../bank2/Bank2AccountSource'
import { type Bank2AccountTransaction } from '../../bank2/Bank2AccountTransaction'
import { type AccountSourceAdapter } from '../bank/common'

class Bank2AccountSourceAdapter implements AccountSourceAdapter {
  private readonly bank2AccountSource: Bank2AccountSource
  bankName: string

  constructor () {
    this.bank2AccountSource = new Bank2AccountSource()
    this.bankName = 'bank2'
  }

  getAccountBalance (accountId: number): Bank2AccountBalance {
    return this.bank2AccountSource.getBalance(accountId)
  }

  getTransactions (accountId: number, fromDate: Date, toDate: Date): Bank2AccountTransaction[] {
    return this.bank2AccountSource.getTransactions(accountId, fromDate, toDate)
  }
}

export { Bank2AccountSourceAdapter }
