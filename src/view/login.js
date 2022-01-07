export default () => {
  const showLogIn = `<section id="login" class="flexSection register">
    <div class="flexBox">
      <div class="SingUpBox">
        <p>¡BIENVENIDX!</p>
        <div id="formLogIn" class="formLogIn">
          <input id="logEmail" type="email" placeholder="correo electrónico">
          <input id="logPassword" type="text" placeholder="contraseña">

          <button onclick="window.location.hash='#/home'"
          id="btnSignUp" class="button">Inicia sesión</button>
          <button onclick="window.location.hash='#/signIn'" 
          id="btnLog" class="button">Crear cuenta nueva</button>

        </div>

        <a href="#">iniciar sesión con google</a>

      </div>
      <div class="imgbox">
        <img src="./img/CB2.png" alt="img Welcome">
      </div>

    </div>
  </section>
`;
  const divElem = document.createElement('div');
  divElem.innerHTML = showLogIn;

  return divElem;
};
