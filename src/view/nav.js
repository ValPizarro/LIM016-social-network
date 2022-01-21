const showHome = () => {
  window.location.hash = '#/home';
  // console.log('click home');
};

const showProfile = () => {
  window.location.hash = '#/profile';
  // console.log('click perfil');
};

const showSearch = () => {
  window.location.hash = '#/search';
  // console.log('click search');
};

const showSignOut = () => {
  window.location.hash = '#/signOut';
  // console.log('click search');
};

const Nav = () => {
  const showNav = `
    <nav class="tab-nav-container">
      <div class="tab">
        <i id="home" class="fas fa-home fasNav"></i>
 
      </div>
      <div class="tab">
        <div class="boxSearch">
          <div name="search">
            <input  type="text" class="inputSearch" name="txt" >
          </div>
          <i id="search" class="fas fa-search fasNav"></i>
        </div>
      </div>
      <div class="tab">
        <i id="profile" class="fas fa-user fasNav"></i>
      </div>
      <div class="tab">
        <i id="signOut" class="fas fa-sign-in-alt fasNav"></i>
      </div>
    </nav>
    `;
  const navElemt = document.createElement('div');
  navElemt.innerHTML = showNav;

  navElemt.querySelector('#home').addEventListener('click', showHome);

  navElemt.querySelector('#profile').addEventListener('click', showProfile);

  navElemt.querySelector('#search').addEventListener('click', showSearch);

  navElemt.querySelector('#signOut').addEventListener('click', showSignOut);

  return navElemt;
};

export default Nav;
