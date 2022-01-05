import {
  auth, provider, createUserWithEmailAndPassword,
  signInWithEmailAndPassword, signOut, signInWithPopup,
} from './configuraciones.js';

export const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log('usario creado', {userCredential});
        console.log('usario creado', {user});
      });
};

export const signIn = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('Inició sesión', {user});
      });
};

export const signOutUser = () => {
  return signOut(auth);
};

export const googleAuth = () => {
	
	return signInWithPopup(auth, provider)
	.then((result)=>{

	console.log("Nombre:", result.user.displayName);
	console.log("Email:", result.user.email);
	mailVerificado("Verfica2", result.user.emailVerified);
	
	}) .catch((error) => {
		console.log(error.code);
    manejarErrores(error.code);
	}); 
	
};

const manejarErrores = (errorCode)=>{
  
  if(errorCode==="auth/popup-closed-by-user"){
    console.log("aprieta bien");
  }


}



const mailVerificado= (verificado)=>{
  if(verificado){
    console.log("si esta verficado")
    
  }else{
    //funcion que manda mail verificacion
  }


}
