import Button from "../components/button.js";
import Input from "../components/input.js";

const login = (id, event) => {
	event.preventDefault();

	const email = document.getElementById('email-login').value;

	const password = document.getElementById('pass-login').value;

	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  alert(errorMessage);
	});
}

const loginGoogle = (id, event) => {

	var provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().signInWithPopup(provider).then(function(result) {
  	// This gives you a Google Access Token. You can use it to access the Google API.
  	var token = result.credential.accessToken;
  	// The signed-in user info.
  	var user = result.user;
  	// ...
}).catch(function(error) {
  	// Handle Errors here.
  	var errorCode = error.code;
  	var errorMessage = error.message;
  	// The email of the user's account used.
  	var email = error.email;
  	// The firebase.auth.AuthCredential type that was used.
  	var credential = error.credential;
  // ...
  	alert(errorMessage);
	});
}

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
  	window.location.hash = 'mural';
  } else {
    // No user is signed in.
  }
});

export function Home() {
	const template = `
	<container class="home">
	 <img src = images/Witchy-logo.png class="logo"/>
	 <section class="login">
	  <h1 class="homepage-title">Share your spells...</h1>
	  <form class="login-form">
	   ${Input ({ id:'email-login', placeholder:'E-mail', type:'email'})}
	   ${Input({ id:'pass-login', placeholder:'Senha', type:'password'})}
	   <div class ="buttons">${Button({ class:'btn btn-login', id:'login', title: 'Log in', onclick: login})}
	   </div>
	   

	   ${Button({ class:'btn btn-google' ,id:'google-login', title: '<img id="google" src="https://img.icons8.com/color/60/000000/google-logo.png"><p class="opcao">Sign in with</p>', type:'submit', onclick: loginGoogle})}
	  </form>
	  <div class="sign">
	  ${Button({ class:'btn btn-sign-up', id:'sign', title: 'Sign Up', type:'submit', onclick: signUp})} </div>
	 </section>
	</container>`;

	window.location.hash = "home";

	return template;
}

const signUp = (id) => {
	window.location.hash = id;
}

export default Home;