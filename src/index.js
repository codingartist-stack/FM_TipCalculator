import _ from 'lodash';
import './style.css';
import svgLogo from './images/logo.svg';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  //add logo
  const logo = new Image();
  logo.src = svgLogo;

  element.appendChild(logo);

  return element;
}

document.body.appendChild(component());
