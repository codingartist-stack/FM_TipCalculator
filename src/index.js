import _ from 'lodash';
import './style.css';
import svgLogo from './images/logo.svg';

function testElement() {
  const element = document.createElement('div');

  element.innerText = 'testing CSS';
  element.classList.add('hello');

  const logo = new Image();
  logo.src = svgLogo;

  element.appendChild(logo);

  return element;
}

document.body.appendChild(testElement());
