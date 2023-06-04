import { BankController } from './bank/BankController'
import { Bank1AccountSourceAdapter } from './bank1/Bank1AccountSourceAdapter'
import { Bank2AccountSourceAdapter } from './bank2/Bank2AccountSourceAdapter'

const bank1Adapter = new Bank1AccountSourceAdapter()
const bank2Adapter = new Bank2AccountSourceAdapter()

const bankController = new BankController([bank1Adapter, bank2Adapter])

bankController.printBalances()
bankController.printTransactions()
