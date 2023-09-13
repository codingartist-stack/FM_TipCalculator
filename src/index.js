import _ from 'lodash';
import './style.css';
import svgLogo from './images/logo.svg';

const mainContainer = document.createElement('main');
const calculatorContainer = document.createElement('div');

//logo

const logo = new Image();
logo.src = svgLogo;

//inputSection

const inputContainer = document.createElement('div');

const billContainer = document.createElement('div');
const tipContainer = document.createElement('div');
const numPeopleContainer = document.createElement('div');

inputContainer.appendChild(billContainer);
inputContainer.appendChild(tipContainer);
inputContainer.appendChild(numPeopleContainer);

calculatorContainer.appendChild(inputContainer);

// Main Append
mainContainer.append(logo);
mainContainer.appendChild(calculatorContainer);

document.body.appendChild(mainContainer);
