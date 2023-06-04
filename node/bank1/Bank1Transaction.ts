class Bank1Transaction {
  static TYPE_CREDIT = 1
  static TYPE_DEBIT = 2

  private readonly amount: number
  private readonly type: number
  private readonly text: string

  constructor (amount: number, type: number, text: string) {
    this.amount = amount
    this.type = type
    this.text = text
  }

  getAmount (): number {
    return this.amount
  }

  getType (): number {
    return this.type
  }

  getText (): string {
    return this.text
  }
}
export { Bank1Transaction }
