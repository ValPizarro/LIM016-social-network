export default () => {
  const showHome = `
    <nav>
      <ul>
        <li>
            <a href="#/Home">Home</a>
        </li>
        <li>
          <a href="#/Perfil">Perfil</a>
        </li>
      </ul>
    </nav>
    `;
  const divElemt = document.createElement('div');
  divElemt.innerHTML = showHome;

  return divElemt;
};
