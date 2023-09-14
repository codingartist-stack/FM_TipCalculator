import { personTotal, total } from '.';

//The math

//tip amount person
//(bill * selected %) / people

//total amount person
//(bill / people) + tip

export default function calculateTipTotal(bill, selectedPercent, numOfPeople) {
  let tip = bill * selectedPercent;
  let totalBill = parseInt(bill) + parseInt(tip);

  let tipPerPerson = parseInt(tip) / numOfPeople;
  console.log(`Tip per Person: ${tipPerPerson}`);

  let totalPerPerson = totalBill / numOfPeople;

  console.log(`Total perPerson: ${totalPerPerson}`);

  personTotal.innerText = `$${tipPerPerson}`;
  total.innerText = `$${totalPerPerson}`;
}
