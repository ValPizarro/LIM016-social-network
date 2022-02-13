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

// let user;

const nav = () => {
  // user = UID;

  // if (user == undefined) {
  //   const showNavSingIn = `
  //     <nav class="tab-nav-container">
  //       <div class="boxName">

  //         <p>Queer Place</p>

  //       </div>
  //       <div class="navBoxRegister">
  //         <form>
  //           <input id="email" type="email">
  //           <input id="password" type="text">
  //           <button id="btnSignIn" class="button">Inicia sesión</button>
  //         </form>
  //       </div>
  //     </nav>`;
  //   navElemt = document.createElement('div');
  //   navElemt.innerHTML = showNavSingIn;

  //   navElemt
  //       .querySelector('#btnSignIn')
  //       .addEventListener('click', registerUser);
  // } else {
  const showNav = `


    <nav class="tab-nav-container">
      <div class="tabTitle">
        <p>Queer Place</p>
      </div>
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

 // navElemt.querySelector('#search').addEventListener('click', showSearch);

  navElemt.querySelector('#signOut').addEventListener('click', showSignOut);
  // }
  return navElemt;
};
export default nav;


// export const registerUser = (e) => {
//   e.preventDefault();

//   const email = e.target.closest('form').querySelector('#email').value;
//   const password = e.target.closest('form').querySelector('#password').value;

//   signIn(email, password);
// };
