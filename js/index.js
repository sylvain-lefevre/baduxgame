let confirmNb = 0;

navigator.geolocation.getCurrentPosition(() => {},() => {})

const descriptions = [
  "Souhaitez-vous vous connecter ?",
  "Etes-vous sur ?",
  "Non mais vraiment, c'est sur ?",
  "Vous n'etes pas oblige d'accepter",
  "Sur sur sur sur sur sur sur sur sur sur sur sur sur sur sur ?",
];

window.onload = init;

let dialogDescription, dialogAnswerInput, dialogOkBtn, dialogKoBtn, dialog, overlay, loader, passwordInput, labelPassword;
const password = 1499795082;
const riddle = "Captcha : Quelle est la prochaine lettre de la sequence suivante O,T,T,F,F,S,S ?"
const answer = "E";
const username = "0ba7c979-fd67-427b-a594-fd96f0122613";

function init() {
  dialogDescription = document.querySelector("#dialog-description");
  dialog = document.querySelector("dialog");
  overlay = document.querySelector(".overlay");
  loginInput = document.querySelector("#login");
  passwordInput = document.querySelector("#password");
  dialogAnswerInput = document.querySelector("#dialog-answer");
  dialogOkBtn = document.querySelector("#dialog-ok-btn");
  dialogKoBtn = document.querySelector("#dialog-ko-btn");
  loader = document.querySelector(".loader");
  loginBtn = document.querySelector("#btn-login");
  labelPassword = document.getElementById("placeholder");

  labelPassword.style.position = "absolute";
  labelPassword.style.left = (passwordInput.offsetLeft+4) +"px";
  labelPassword.style.top = (passwordInput.offsetTop+2)+"px";
  labelPassword.style.width = (passwordInput.clientWidth-4)+"px";

  passwordInput.onkeyup = function(event) {
    if(passwordInput.clientWidth>50){
      labelPassword.style.width = (labelPassword.clientWidth-10)+"px";
      passwordInput.style.width = (passwordInput.clientWidth-10)+"px";
      labelPassword.style.left = (passwordInput.offsetLeft+4) +"px";
      labelPassword.style.top = (passwordInput.offsetTop+2)+"px";
    }
  }
  passwordInput.onpaste = function (event) {
    alert("Pour des raisons de sécurité il est interdit de Copier/Coller le mot de passe");
    event.preventDefault();
  }
  dialogAnswerInput.onchange = function(event) {
    if (event.target.value === answer) {
      resetRiddle();
      hideDialog();
      login();
    }
  }
}

function startLogin() {
  document.getElementById("song").currentTime = 0;
  document.getElementById("song").volume = 0.01;
  document.getElementById("song").play();
  confirmNb = 0;
  openDialog();
  dialogDescription.innerHTML = descriptions[0];
}

function confirmLogin() {
  if (confirmNb < descriptions.length - 1) {
    confirmNb++;
    displayTextDescription();
  } else if (confirmNb === 4) {
    confirmNb++;
    displayRiddle();
  }
}

function displayTextDescription() {
  dialogDescription.innerHTML = descriptions[confirmNb];
}

function displayRiddle() {
  dialogDescription.innerHTML = riddle;
  disableDialogButtons();
  dialogAnswerInput.classList.remove("not-visible");
  dialogAnswerInput.classList.add("visible");
}

function resetRiddle() {
  enableDialogButtons();
  dialogAnswerInput.value = "";
  dialogAnswerInput.classList.remove("visible");
  dialogAnswerInput.classList.add("not-visible");
}

function disableDialogButtons() {
  dialogOkBtn.setAttribute("disabled", true);
  dialogKoBtn.setAttribute("disabled", true);
}

function enableDialogButtons() {
  dialogOkBtn.removeAttribute("disabled");
  dialogKoBtn.removeAttribute("disabled");
}

function openDialog() {
  dialog.classList.add("visible");
  overlay.classList.add("visible");
}

function hideDialog() {
  dialog.classList.remove("visible");
  overlay.classList.remove("visible");
}

function abortLogin() {
  confirmNb = 0;
  hideDialog();
  resetRiddle();
  swapInput();
  document.getElementById("song").pause();
}

function login() {
  confirmNb = 0;
  displayLoader();
  setTimeout(() => {
    document.getElementById("song").pause();
    if (loginInput.value === username && passwordInput.value.hashCode() === password) {
      window.location.href = './success.html';
    } else {
      alert("Le mot de passe est incorrect");
      hideLoader();
    }
    swapInput();
  }, 5000)
}

function displayLoader() {
  loginBtn.classList.add("not-visible");
  loader.classList.remove("not-visible");
}

function hideLoader() {
  loginBtn.classList.remove("not-visible");
  loader.classList.add("not-visible");
}

function swapInput() {
  const form = document.querySelector("form");
  if (form.classList.contains("flex-row-reverse")) {
    form.classList.remove("flex-row-reverse");
    labelPassword.style.left = (passwordInput.offsetLeft+4) +"px";
    labelPassword.style.top = (passwordInput.offsetTop+2)+"px";
  } else {
    form.classList.add("flex-row-reverse");
    labelPassword.style.left = (passwordInput.offsetLeft+4) +"px";
    labelPassword.style.top = (passwordInput.offsetTop+2)+"px";
  }
}