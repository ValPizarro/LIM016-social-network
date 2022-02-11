const showHome = () => {
  window.location.hash = '#/home';
  // console.log('click home');
};

const showProfile = () => {
  window.location.hash = '#/profile';
  // console.log('click perfil');
};

const showSignOut = () => {
  window.location.hash = '#/signOut';
  // console.log('click search');
};

const nav = () => {
  const showNav = `
    <nav class="tab-nav-container">
      <div class="tab">
        <i id="home" class="fas fa-home fasNav"></i>
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

  navElemt.querySelector('#signOut').addEventListener('click', showSignOut);

  return navElemt;
};
export default nav;
