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
billInput.name = 'bill';
billInput.id = 'bill';

billInputDiv.appendChild(billInput);
billInputDiv.appendChild(dollarSign);

billContainer.appendChild(billLabel);
billContainer.appendChild(billInputDiv);
//Tip

const tipContainer = document.createElement('div');

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

const peopleInput = document.createElement('input');
peopleInput.setAttribute('placeholder', '0');
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
