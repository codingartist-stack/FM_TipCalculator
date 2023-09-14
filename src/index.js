import _ from 'lodash';
import './style.css';
import svgLogo from './images/logo.svg';
import dollarIcon from './images/icon-dollar.svg';
import personIcon from './images/icon-person.svg';
import calculateTipTotal from './calculateTipTotal';

const mainElement = document.createElement('main');
const mainContainer = document.createElement('div');
mainContainer.classList.add('mainContainer');
const calculatorContainer = document.createElement('form');
calculatorContainer.classList.add('calculatorContainer');

//images

const logo = new Image();
logo.src = svgLogo;

const dollarSign = new Image();
dollarSign.src = dollarIcon;
dollarSign.classList.add('icon');

const iconPerson = new Image();
iconPerson.src = personIcon;
iconPerson.classList.add('icon');

//inputSection

const inputContainer = document.createElement('div');
inputContainer.classList.add('inputContainer');
inputContainer.classList.add('gridGroup');

//Bill

const billContainer = document.createElement('div');
billContainer.classList.add('billContainer');

const billLabel = document.createElement('label');
billLabel.innerText = 'Bill';
billLabel.setAttribute('for', 'bill');

const billInputDiv = document.createElement('div');
billInputDiv.classList.add('inputDiv');

const billInput = document.createElement('input');
billInput.setAttribute('placeholder', '0');
billInput.classList.add('numberInput');
billInput.type = 'number';
billInput.name = 'bill';
billInput.id = 'bill';

billInputDiv.appendChild(billInput);
billInputDiv.appendChild(dollarSign);

billContainer.appendChild(billLabel);
billContainer.appendChild(billInputDiv);

//Tip
const tipContainer = document.createElement('div');
tipContainer.classList.add('tipContainer');

const tipLabel = document.createElement('label');
tipLabel.innerText = 'Select Tip %';

const buttonContainer = document.createElement('div');
buttonContainer.classList.add('buttonContainer');

//Create Percent buttons
function createPercent(percent, numPercent) {
  percent = document.createElement('input');
  percent.classList.add('percentBtn');
  percent.type = 'button';
  percent.name = percent;
  percent.id = percent;
  percent.value = numPercent;

  buttonContainer.appendChild(percent);
}

createPercent('fivePercent', '5%');
createPercent('tenPercent', '10%');
createPercent('fifteenPercent', '15%');
createPercent('twentyPercent', '20%');
createPercent('fiftyPercent', '50%');

const customPercent = document.createElement('input');
customPercent.type = 'number';
customPercent.classList.add('customPercent');
customPercent.setAttribute('placeholder', 'Custom');

buttonContainer.appendChild(customPercent);

tipContainer.appendChild(tipLabel);
tipContainer.appendChild(buttonContainer);

//Number of people
const numPeopleContainer = document.createElement('div');
numPeopleContainer.classList.add('numPeopleContainer');

const labelErrorDiv = document.createElement('div');
const peopleInputDiv = document.createElement('div');
peopleInputDiv.classList.add('inputDiv');

const peopleLabel = document.createElement('label');
peopleLabel.innerText = 'Number of People';
peopleLabel.setAttribute('for', 'people');

const errorSpan = document.createElement('span');
errorSpan.classList.add('errorMessage');
errorSpan.id = 'errorSpan';

const peopleInput = document.createElement('input');
peopleInput.setAttribute('placeholder', '0');
peopleInput.classList.add('numberInput');
peopleInput.type = 'number';
peopleInput.name = 'people';
peopleInput.id = 'people';

labelErrorDiv.appendChild(peopleLabel);
labelErrorDiv.appendChild(errorSpan);

peopleInputDiv.appendChild(peopleInput);
peopleInputDiv.appendChild(iconPerson);

numPeopleContainer.appendChild(labelErrorDiv);
numPeopleContainer.appendChild(peopleInputDiv);

//Input Container append
inputContainer.appendChild(billContainer);
inputContainer.appendChild(tipContainer);
inputContainer.appendChild(numPeopleContainer);

calculatorContainer.appendChild(inputContainer);

//resultContainer
const resultContainer = document.createElement('div');
resultContainer.classList.add('resultContainer');
resultContainer.classList.add('gridGroup');

const tipAmountContainer = document.createElement('div');
tipAmountContainer.classList.add('tipAmountContainer');

//Person total
const personTotalContainer = document.createElement('div');
personTotalContainer.classList.add('flexGroup');

const personTitle = document.createElement('div');

const personTip = document.createElement('p');
personTip.innerText = 'Tip Amount';

const perPerson = document.createElement('p');
perPerson.innerText = '/ person';

personTitle.appendChild(personTip);
personTitle.appendChild(perPerson);

const personTotal = document.createElement('div');
personTotal.classList.add('total');
personTotal.innerText = '$0.00';

personTotalContainer.appendChild(personTitle);
personTotalContainer.appendChild(personTotal);

//total
const totalContainer = document.createElement('div');
totalContainer.classList.add('flexGroup');

const totalTitle = document.createElement('div');

const totalLabel = document.createElement('p');
totalLabel.innerText = 'Total';

const perPersonTotal = document.createElement('p');
perPersonTotal.innerText = '/ person';

totalTitle.appendChild(totalLabel);
totalTitle.appendChild(perPersonTotal);

const total = document.createElement('div');
total.classList.add('total');
total.innerText = '$0.00';

totalContainer.appendChild(totalTitle);
totalContainer.appendChild(total);

tipAmountContainer.appendChild(personTotalContainer);
tipAmountContainer.appendChild(totalContainer);
resultContainer.appendChild(tipAmountContainer);

//Reset Button

const resetBtn = document.createElement('button');
resetBtn.innerText = 'RESET';
resetBtn.classList.add('resetBtn');

resultContainer.appendChild(resetBtn);

function resetForm() {
  calculatorContainer.reset();
}

resetBtn.addEventListener('click', resetForm);

// Main Append
mainContainer.appendChild(calculatorContainer);
mainContainer.appendChild(resultContainer);

mainElement.append(logo);
mainElement.appendChild(mainContainer);

document.body.appendChild(mainElement);
