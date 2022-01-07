export default () => {
  const showSignIn = `
  <section id="register" class="flexSection register">
    <div class="flexBox">
      <div class="recordTitle">
        <h1>Queer Place</h1>
      </div>
      <div id="formResgister" class="formResgister">
        <button id="btnStart" class="button">Iniciar sesión con Google </button>
        <input id="registerEmail" 
        type="email" placeholder="  Correo electrónico">
        <input type="text" placeholder="  Nombre completo">
        <input type="text" placeholder="  Nombre de usuario">
        <input id="registerPassword" type="text" placeholder="  contraseña">
        <button  id="btnCheckIn" class="button">Registrarte</button>
      </div>
      <div class="backLogIn">
        <p>¿Tienes una cuenta? <a href="#">Entrar</a></p>
      </div>

      <div class="imgBox">
        <img class="imgRegister" src="./img/CB2.png" alt="">
      </div>
    </div>
  </section>
  `;

  const divElem = document.createElement('div');
  divElem.innerHTML = showSignIn;

  return divElem;
};
