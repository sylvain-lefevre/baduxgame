let confirmNb = 0;

const descriptions = [
  "Souhaitez-vous vous connecter ?",
  "Etes-vous sur ?",
  "Non mais vraiment, c'est sur ?",
  "Vous n'etes pas oblige d'accepter",
  "Sur sur sur sur sur sur sur sur sur sur sur sur sur sur sur ?",
];

window.onload = init;

let dialogDescription, dialog, overlay;

function init() {
  dialogDescription = document.querySelector("#dialog-description");
  dialog = document.querySelector("dialog");
  overlay = document.querySelector(".overlay");
}

function startLogin() {
  confirmNb = 0;
  openDialog();
  dialogDescription.innerHTML = descriptions[0];
}

function confirmLogin() {
  if (confirmNb < descriptions.length - 1) {
    confirmNb++;
    dialogDescription.innerHTML = descriptions[confirmNb];
  } else {
    hideDialog();
    login();
  }
}

function abortLogin() {
  confirmNb = 0;
  hideDialog();
}

function openDialog() {
  dialog.classList.add("visible");
  overlay.classList.add("visible");
}

function hideDialog() {
  dialog.classList.remove("visible");
  overlay.classList.remove("visible");
}

function login() {
  console.log("login en cours...");
}