export enum TRANSACTION_TYPES {
  DEBIT = 'DEBIT',
  CREDIT = 'CREDIT',
}

class Bank2AccountTransaction {
  private readonly amount: number
  private readonly text: string
  type: TRANSACTION_TYPES

  constructor (amount: number, type: TRANSACTION_TYPES, text: string) {
    this.amount = amount
    this.type = type
    this.text = text
  }

  getAmount (): number {
    return this.amount
  }

  getType (): TRANSACTION_TYPES {
    return this.type
  }

  getText (): string {
    return this.text
  }
}

export { Bank2AccountTransaction }
