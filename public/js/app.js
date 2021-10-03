// Models
import Invoice from './Models/Invoice.js';
import ListTemplate from './Models/ListTemplate.js';
import Payment from './Models/Payment.js';
// Form
const form = document.querySelector('.new-item-form');
// Inputs
const financeType = document.querySelector('#type');
const financeToFrom = document.querySelector('#toFrom');
const financeDetails = document.querySelector('#details');
const financeAmount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('.item-list');
const list = new ListTemplate(ul);
// Form Submit Handler
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let inputValues = [
        financeToFrom.value,
        financeDetails.value,
        financeAmount.valueAsNumber,
    ];
    let doc;
    if (financeType.value === 'invoice') {
        doc = new Invoice(...inputValues);
    }
    else {
        doc = new Payment(...inputValues);
    }
    list.render(doc, financeType.value, 'end');
});
