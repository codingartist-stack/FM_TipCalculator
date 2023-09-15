import { personTotal, peopleInput, total } from '.';

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

  let totalBill = parseFloat(bill) + parseFloat(tip);

  let tipPerPerson = parseFloat(tip) / parseFloat(numOfPeople);

  let totalPerPerson = totalBill / numOfPeople;

  personTotal.innerText = `$${tipPerPerson.toFixed(2)}`;
  total.innerText = `$${totalPerPerson.toFixed(2)}`;
}
