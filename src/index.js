import _ from 'lodash';
import './style.css';
import svgLogo from './images/logo.svg';
import dollarIcon from './images/icon-dollar.svg';
import personIcon from './images/icon-person.svg';

const mainContainer = document.createElement('main');
const calculatorContainer = document.createElement('form');
calculatorContainer.classList.add('calculatorContainer');

//images

const logo = new Image();
logo.src = svgLogo;

const dollarSign = new Image();
dollarSign.src = dollarIcon;

const iconPerson = new Image();
iconPerson.src = personIcon;

//inputSection

const inputContainer = document.createElement('div');
inputContainer.classList.add('inputContainer');

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

const tipLabel = document.createElement('label');
tipLabel.innerText = 'Select Tip %';

const buttonContainer = document.createElement('div');

const fivePercent = document.createElement('input');
fivePercent.classList.add('percentBtn');
fivePercent.type = 'button';
fivePercent.name = 'fivePercent';
fivePercent.id = 'fivePercent';
fivePercent.value = '5%';

const tenPercent = document.createElement('input');
tenPercent.classList.add('percentBtn');
tenPercent.type = 'button';
tenPercent.name = 'tenPercent';
tenPercent.id = 'tenPercent';
tenPercent.value = '10%';

const fifteenPercent = document.createElement('input');
fifteenPercent.classList.add('percentBtn');
fifteenPercent.type = 'button';
fifteenPercent.name = 'fifteenPercent';
fifteenPercent.id = 'fifteenPercent';
fifteenPercent.value = '15%';

const twentyPercent = document.createElement('input');
twentyPercent.classList.add('percentBtn');
twentyPercent.type = 'button';
twentyPercent.name = 'twentyPercent';
twentyPercent.id = 'twentyPercent';
twentyPercent.value = '20%';

const fiftyPercent = document.createElement('input');
fiftyPercent.classList.add('percentBtn');
fiftyPercent.type = 'button';
fiftyPercent.name = 'fiftyPercent';
fiftyPercent.id = 'fiftyPercent';
fiftyPercent.value = '50%';

const customPercent = document.createElement('input');
customPercent.type = 'number';
customPercent.classList.add('customPercent');
customPercent.setAttribute('placeholder', 'Custom');

buttonContainer.appendChild(fivePercent);
buttonContainer.appendChild(tenPercent);
buttonContainer.appendChild(fifteenPercent);
buttonContainer.appendChild(twentyPercent);
buttonContainer.appendChild(fiftyPercent);
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

// Main Append
mainContainer.append(logo);
mainContainer.appendChild(calculatorContainer);

document.body.appendChild(mainContainer);
