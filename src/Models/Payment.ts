// Interfaces
import HasFormatter from '../Interfaces/HasFormatter'

// Payment Class
class Payment implements HasFormatter {
  constructor(
    readonly recipient: string,
    readonly details: string,
    readonly amount: number
  ) {}

  format() {
    return `${this.recipient} is owed Rs.${this.amount} for ${this.details}`
  }
}

export default Payment
