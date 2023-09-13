import _ from 'lodash';
import './style.css';

function testElement() {
  const element = document.createElement('div');

  element.innerText = 'testing CSS';
  element.classList.add('hello');

  return element;
}

document.body.appendChild(testElement());
