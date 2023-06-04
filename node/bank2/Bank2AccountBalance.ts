class Bank2AccountBalance {
  private readonly balance: number
  private readonly currency: string

  constructor (balance: number, currency: string) {
    this.balance = balance
    this.currency = currency
  }

  getBalance (): number {
    return this.balance
  }

  getCurrency (): string {
    return this.currency
  }
}

export { Bank2AccountBalance }
