const showProfile = () => {
  window.location.hash = '#/profile';
  console.log('click perfil');
};

const Nav = () => {
  const showNav = `
  <nav class='flexNav' >
    <ul class="nav">
      <li>
        <a><img src="./img/iconos/Home.png" alt="home"></a>
      </li>
      <li>
        <a id="profile"><img src="./img/iconos/account.png" alt="user"></a>
      </li>
      <li>
        <a><img class="search" 
        src="./img/iconos/search.png" alt="search"></a>
      </li>
      <li>
        <a><img src="./img/iconos/More.png" alt="signOut"></a>
      </li>
    </ul>
  </nav>
    `;
  const navElemt = document.createElement('div');
  navElemt.setAttribute('class', 'flexSection');
  navElemt.innerHTML = showNav;

  navElemt.querySelector('#profile').addEventListener('click', showProfile);

  return navElemt;
};

export default Nav;
