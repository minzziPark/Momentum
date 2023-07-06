const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoForm = document.querySelector("#todo-form");
const momentum = document.querySelector("#momentum");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
	event.preventDefault();
	todoForm.classList.remove(HIDDEN_CLASSNAME);
	momentum.classList.add(HIDDEN_CLASSNAME);
	loginForm.classList.add(HIDDEN_CLASSNAME);
	localStorage.setItem(USERNAME_KEY, loginInput.value);
	paintGreetings();
}

function paintGreetings() {
	const username = localStorage.getItem(USERNAME_KEY);
	greeting.innerText = `Hello ${username}`;
	greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
	todoForm.classList.add(HIDDEN_CLASSNAME);
	momentum.classList.remove(HIDDEN_CLASSNAME);
	loginForm.classList.remove(HIDDEN_CLASSNAME);
	loginForm.addEventListener("submit", onLoginSubmit);
} else {
	todoForm.classList.remove(HIDDEN_CLASSNAME);
	paintGreetings();
}