//The math

//tip amount person
//(bill * selected %) / people

//total amount person
//(bill / people) + tip

export default function calculateTipTotal(bill, selectedPercent, numOfPeople) {
  let tip = bill * selectedPercent;
  let total = bill + tip;

  let tipPerPerson = tip / numOfPeople;

  let totalPerPerson = total / numOfPeople;
}
