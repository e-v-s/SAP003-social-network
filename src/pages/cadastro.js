import Button from "../components/button.js";
import Input from "../components/input.js";
import Post from '../components/post.js';

const cadastrar = (id, event) => {

	event.preventDefault();

	const email = document.getElementById('mail').value;

	const password = document.getElementById('pass').value;

	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  alert(errorMessage);
	})

	const name = document.getElementById('name').value;	
	const born = document.getElementById('born').value;

	const user = {
		name: name,
		email: email,
		born: born,
	}

	firebase.firestore().collection('users').add(user);
}

export const Cadastro = () => {
	const template = `
	<main class="cadastro">
	 <img src = images/Witchy-logo.png class="cad-logo"/>
	 <h1 class="cadastre">Cadastre-se</h1>
	 <form class="cad-form">
		${Input({ id:"name",  placeholder:"Nome", type:"text"})}
		${Input({ id:'born', type:'date'})}
		${Input({ id:"mail", placeholder:"Email", type:"email"})}
		${Input({ id:"pass", placeholder:"Senha", type:"password"})}
		${Button({ class:'btn btn-send-sign-up', id:"cad", title: "Cadastrar", type:"submit", value:"submit", onclick: cadastrar})}
	 </form>
		${Button({ class:'btn-go-home', id:"go-home", type:"button", title:"Voltar para Login", onclick: goHome})}
	</main>`;

	return template;
}

const goHome = () => {
	window.location.hash = 'home';
}


