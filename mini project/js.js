
const form = document.getElementById('form');
const username = document.getElementById('form3Example1');
const email = document.getElementById('form3Example3');
const password = document.getElementById('form3Example4');
const password2 = document.getElementById('form3Example5');
const btn=document.getElementById('s');
let u=0;
let e=0;
let p=0;
let p2=0;
username.addEventListener('input',userv);
email.addEventListener('input',emailv);
password.addEventListener('input',pswdv);
password2.addEventListener('input',pswd2v);

form.addEventListener('submit', e => {
	checkInputs();
    if(u==0||e==0||p==0||p2==0){
	e.preventDefault();
    }

});

function checkInputs() {
	
	userv();
    emailv();
    pswdv();
    pswd2v();
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'control success';
}
	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function ispswd(password) {
	const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    return re.test(password);
};
function userv(){
	const usernameValue = username.value.trim();
    if(usernameValue === '') {
    setErrorFor(username, 'Username cannot be blank');
} else if(usernameValue.length < 3 || usernameValue.length >25){
    setErrorFor(username, 'Username should be between 3 and 25 charachters');
} else {
    setSuccessFor(username);
    u=1;
}
};
function pswd2v(){
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
    if(password2Value === '') {
		setErrorFor(password2, 'Password2 cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
        p2=1;
	}
}
function pswdv(){
	const passwordValue = password.value.trim();

    if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
    } else if (!ispswd(passwordValue)) {
		setErrorFor(password, 'Not a valid password');
	} else {
		setSuccessFor(password);
        p=1;
	}
}
function emailv(){
	const emailValue = email.value.trim();

    if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
        e=1;
	}
}
function go(){
    window.location.href="index.html"

}