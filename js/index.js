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

let dialogDescription, dialogAnswerInput, dialogOkBtn, dialogKoBtn, dialog, overlay, loader;
const riddle = "Captcha : Quelle est la prochaine lettre de la sequence suivante O,T,T,F,F,S,S ?"
const answer = "E";

function init() {
  dialogDescription = document.querySelector("#dialog-description");
  dialog = document.querySelector("dialog");
  overlay = document.querySelector(".overlay");
  dialogAnswerInput = document.querySelector("#dialog-answer");
  dialogOkBtn = document.querySelector("#dialog-ok-btn");
  dialogKoBtn = document.querySelector("#dialog-ko-btn");
  loader = document.querySelector(".loader");
  loginBtn = document.querySelector("#btn-login")

  dialogAnswerInput.onchange = function(event) {
    if (event.target.value === answer) {
      resetRiddle();
      hideDialog();
      login();
    }
  }
}

function startLogin() {
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
}

function login() {
  confirmNb = 0;
  loginBtn.classList.add("not-visible");
  loader.classList.remove("not-visible");
  console.log("login en cours...");
}
