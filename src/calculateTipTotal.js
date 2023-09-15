import { personTotal, total } from '.';

//The math

//tip amount person
//(bill * selected %) / people

//total amount person
//(bill / people) + tip

export default function calculateTipTotal(bill, selectedPercent, numOfPeople) {
  if (bill == '') {
    console.log('hmm...');
    return;
  }
  if (numOfPeople == '') {
    numOfPeople = 1;
    peopleInput.value = 1;
  }
  let tip = bill * selectedPercent;
  let totalBill = parseInt(bill) + parseInt(tip);

  let tipPerPerson = parseInt(tip) / numOfPeople;

  let totalPerPerson = totalBill / numOfPeople;

  personTotal.innerText = `$${tipPerPerson.toFixed(2)}`;
  total.innerText = `$${totalPerPerson.toFixed(2)}`;
}
