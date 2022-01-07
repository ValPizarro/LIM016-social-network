export default () => {
  const viewWelcome = `
      <div class="flexBox welcome">
        <div class="messageWelcome">
          <div class="recordTitle">
            <h1>Queer Place</h1>
          </div>

          <p> 
          Somos una comunidad inclusiva donde podrás encontrar 
          lugares seguros libres de discriminación.
          </p>

        </div>

        <div class="inputWelcome">
          <button onclick="window.location.hash='#/logIn'" 
          id="btnJoin" class="button">
          Únete a nuestra comunidad </button>
        </div>
        <div class="imgBox">
          <img src="./img/The Movement - Together.png" alt="img Welcome">
        </div>
      </div>
      `;

  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexSection');
  divElemt.innerHTML = viewWelcome;

  console.log(divElemt);

  return divElemt;
};
