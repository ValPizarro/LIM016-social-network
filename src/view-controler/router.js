import {components} from '../view/index.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  container.innerHTML = '';

  const navegador = document.getElementById('navegador');
  navegador.innerHTML = '';

  switch (route) {
    case '':
    case '#':
    case '#/': {
      return container.appendChild(components.welcome());
    }
    case '#/signIn': {
      container.appendChild(components.signIn());
      break;
    }
    case '#/signUp': {
      container.appendChild(components.signUp());
      break;
    }
    case '#/home': {
      nav.appendChild(components.nav());
      break;
    }
    case '#/profile': {
      navegador.appendChild(components.nav());
      container.appendChild(components.profile());
      break;
    }
    case '#/update': {
      container.appendChild(components.update());
      break;
    }
    default:
      return container.appendChild(components.different());
  }
};

export {changeView};
