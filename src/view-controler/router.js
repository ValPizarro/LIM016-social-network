import {components} from '../view/index.js';

const changeView = (route) => {
  const container = document.getElementById('container');
  const home = document.getElementById('home');
  container.innerHTML = '';

  switch (route) {
    case '#/': {
      return container.appendChild(components.welcome());
    }
    case '#/signIn': {
      return container.appendChild(components.signIn());
    }
    case '#/logIn': {
      return container.appendChild(components.logIn());
    }
    case '#/home': {
      return home.appendChild(components.home());
    }
  }
};

export {changeView};
