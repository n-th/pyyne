
interface AccountSourceAdapter {
  getAccountBalance: (accountId: number) => AccountBalanceAdapter
  getTransactions: (
    accountId: number,
    fromDate: Date,
    toDate: Date
  ) => AccountTransactionAdapter[]
}

interface AccountBalanceAdapter {
  getBalance: () => number
  getCurrency: () => string
}

interface AccountTransactionAdapter {
  getAmount: () => number
  getType: () => string | number
  getText: () => string
}

export {
  type AccountSourceAdapter,
  type AccountBalanceAdapter,
  type AccountTransactionAdapter
}

