import {components} from '../view/index.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  const home = document.getElementById('home');
  container.innerHTML = '';

  switch (route) {
    case '':
    case '#':
    case '#/': {
      return container.appendChild(components.welcome());
    }
    case '#/signIn': {
      return container.appendChild(components.signIn());
    }
    case '#/signUp': {
      return container.appendChild(components.signUp());
    }
    case '#/home': {
      return home.appendChild(components.home());
      container.appendChild(components.perfil());
    }
    default:
      return container.appendChild(components.different());
  }
};

export {changeView};
