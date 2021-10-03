// Interfaces
import HasFormatter from '../Interfaces/HasFormatter'

// Invoice Class
class Invoice implements HasFormatter {
  constructor(
    readonly client: string,
    readonly details: string,
    readonly amount: number
  ) {}

  format() {
    return `${this.client} owes Rs.${this.amount} for ${this.details}`
  }
}

export default Invoice
