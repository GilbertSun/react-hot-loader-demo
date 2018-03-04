import _ from 'lodash';
import printMe from './printMe';

function component() {
  var element = document.createElement('div');
  var btn = document.createElement('button');

  element.innerHTML = _.join(['Hello1', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./printMe', function () {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
