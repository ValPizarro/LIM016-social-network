const SignUp = () => {
    const showSignUp = `
    
    `;
  
    const divElemt = document.createElement('div');
    divElemt.setAttribute('class', 'flexSection register');
    divElemt.innerHTML = showSignUp;
  
    divElemt
        .querySelector('#btnCheckIn').addEventListener('click', registerUserNew);
    divElemt
        .querySelector('#btnStartGoogle').addEventListener('click', googleAuth);
    divElemt.querySelector('#SignIn').addEventListener('click', backSignIn);
  
    return divElemt;
  };
  