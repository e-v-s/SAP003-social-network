import {Home} from "../pages/home.js";
import {Cadastro} from "../pages/cadastro.js";
import {PaginaInicial} from "../pages/paginainicial.js"
import {Mural} from "../pages/mural.js"
import {EditarPerfil} from "../pages/editarperfil.js"

function init() {
  document.querySelector("main").innerHTML = Home();
}

const cad = () => {
  document.querySelector("main").innerHTML = Cadastro();
}

const mural = () => {

	const allPosts = firebase.firestore().collection('posts');	
	allPosts.get().then(snap => {
		let postsLayout = '';
		snap.forEach(post => {
			postsLayout += `
				<li class='timeline-item'>
					<p>${post.data().text}</p>
					<p>${post.data().name}</p>
				</li>`;
		})
		document.querySelector("main").innerHTML = Mural({postsLayout: postsLayout});
	})
}

const editarPerfil = () => {
	document.querySelector("main").innerHTML = EditarPerfil();
}

const hash = () => {
	if (location.hash === "#sign") {
		return cad();
	} else if (location.hash === "#mural") {
		return mural();
	} else if (location.hash === "#home") {
		return init();
	} else if (location.hash === "#editar") {
		return editarPerfil();
	}
}
//mudança de hash #

window.addEventListener("load", init);

window.addEventListener("hashchange", hash, false);




// let authEmailPassButton = document.getElementById("authEmailPassButton");
// let createUserButton = document.getElementById("createUserButton");
 
// let authGoogleButton = document.getElementById("authGoogleButton");
// let authFacebookButton = document.getElementById("authFacebookButton");

// let logOutButton = document.getElementById("logOutButton");

// //Inputs
// let emailInput = document.getElementById("emailInput");
// let passwordInput = document.getElementById("passwordInput");

// //Displays 
// let displayName = document.getElementById("displayName");

// createUserButton.addEventListener("click", function(){
// 	firebase.auth().createUserWithEmailAndPassword(emailInput.Value, passwordInput.value)
// 		.then(function() {
// 			alert("Bem vindo" + emailInput.value)
// 		})
// 		.catch(function (error) {
// 			console.error(error.code);
// 			console.error(error.message);
// 			alert("Falha ao cadastrar, verifique o erro no console.")
// 		})
// })

// authEmailPassButton.addEventListener("click", function(){
// 	firebase.auth().signInWithEmailAndPassword(emailInput.Value, passwordInput.value)
// 		.then(function(result) {
// 			console.log(result);
// 			displayName.innerHTML = "Bem vindo, " + emailInput.value;
// 			alert("Autenticado" + emailInput.value)
// 		})
// 		.catch(function (error) {
// 			console.error(error.code);
// 			console.error(error.message);
// 			alert("Falha ao autenticar, verifique o erro no console.")
// 		})
// })

// logOutButton.addEventListener("click", function(){
// 	firebase.auth().signOut()		.then(function() {
// 			displayName.innerText = "Você não está autenticado";
// 			alert("Você se desligou");
// 	}, function (error) {
// 		console.error(error);
// 	)}
		
// })