// Interfaces
import HasFormatter from './Interfaces/HasFormatter.js'

// Models
import Invoice from './Models/Invoice.js'
import ListTemplate from './Models/ListTemplate.js'
import Payment from './Models/Payment.js'

// Form
const form = document.querySelector('.new-item-form') as HTMLFormElement

// Inputs
const financeType = document.querySelector('#type') as HTMLSelectElement
const financeToFrom = document.querySelector('#toFrom') as HTMLInputElement
const financeDetails = document.querySelector('#details') as HTMLInputElement
const financeAmount = document.querySelector('#amount') as HTMLInputElement

// List template instance
const ul = document.querySelector('.item-list') as HTMLUListElement
const list = new ListTemplate(ul)

// Form Submit Handler
form.addEventListener('submit', (e: Event) => {
  e.preventDefault()

  let inputValues: [string, string, number] = [
    financeToFrom.value,
    financeDetails.value,
    financeAmount.valueAsNumber,
  ]

  let doc: HasFormatter

  if (financeType.value === 'invoice') {
    doc = new Invoice(...inputValues)
  } else {
    doc = new Payment(...inputValues)
  }

  list.render(doc, financeType.value, 'end')
})
