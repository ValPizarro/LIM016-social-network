export default () => {
  const showHome = `
  <nav class="flexBox" >
  <ul class="nav">
    <li>
        <a href="#/Home"><img src="./img/iconos/Home.png" alt="home"></a>
    </li>
    <li>
      <a href="#/Perfil"><img src="./img/iconos/account.png" alt="user"></a>
    </li>
    <li>
      <a href="#/Search"><img class="search"src="./img/iconos/search.png" alt="search"></a>
    </li>
    <li>
      <a href="#/signOut"><img src="./img/iconos/More.png" alt="signOut"></a>
    </li>
  </ul>
</nav>
    `;
  const divElemt = document.createElement('div');
  divElemt.setAttribute('class', 'flexNav home')
  
  divElemt.innerHTML = showHome;

  return divElemt;
};
