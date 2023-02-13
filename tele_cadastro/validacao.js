const form = document.getElementById("form");

let nome_usuario;
let email_usuario;
let whatsapp;
let password;
let conf_password;

form.addEventListener("submit", (e) => {
  nome_usuario = document.getElementById("nome_usuario");
  email_usuario = document.getElementById("email_usuario");
  whatsapp = document.getElementById("whatsapp");
  password = document.getElementById("password");
  conf_password = document.getElementById("conf_password");
  e.preventDefault();
  checkInputs();
});

// removendo todos os espaçamentos em branco com o "trim"
function checkInputs() {
  const nome_usuarioValue = nome_usuario.value.trim();
  const email_usuarioValue = email_usuario.value.trim();
  const whatsappValue = whatsapp.value.trim();
  const passwordValue = password.value.trim();
  const conf_passwordValue = conf_password.value.trim();

  if (!validateName(nome_usuarioValue)) {
    //mostrar o erro e adicionando a classe erro
    erroValidador(nome_usuario, "Preencha esse campo com nome e sobrenome");
  } else {
    //adicionar a classe de sucesso
  }

  if (!validateEmail(email_usuarioValue)) {
    //mostrar o erro e adicionando a classe erro
    erroValidador(email_usuario, "Email inválido!");
  } else {
    //adicionar a classe de sucesso
  }

  if (!validatePhoneNumber(whatsappValue)) {
    //mostrar o erro e adicionando a classe erro
    erroValidador(whatsapp, "Preencha esse campo corretamente");
  } else {
    //adicionar a classe de sucesso
  }

  if (passwordValue !== conf_passwordValue) {
    //mostrar o erro e adicionando a classe erro
    erroValidador(password, "As senhas não são iguais!");
  } else {
    //adicionar a classe de sucesso
  }
}

function removeError(index) {
  campos[index].style.border = "";
  spans[index].style.display = "none";
}

let nomeValidado = false;

function nameValidate() {
  if (campos[0].value.length < 3) {
    SetError(0);
    nomeValidado = false;
  } else {
    removeError(0);
    nomeValidado = true;
  }
}

let emailValidado = false;
function emailValidate() {
  if (!emailRegex.test(campos[1].value)) {
    SetError(1);
    emailValidado = false;
  } else {
    removeError(1);
    emailValidado = true;
  }
}

let senhaValidada = false;

function mainPasswordValidate() {
  if (campos[3].value.length < 8) {
    SetError(3);
    senhaValidada = false;
  } else {
    removeError(3);
    ComparePassword();
    senhaValidada = true;
  }
}

function validateName(name) {
  if (!name) {
    return false;
  }

  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return false;
  }

  let words = name.split(" ");
  if (words.length < 2) {
    return false;
  }

  return true;
}

function validatePhoneNumber(number) {
  if (!number) {
    return false;
  }
  number = number.replace(/\s+/g, "").replace(/[^\d]/g, "");
  if (number.length !== 11) {
    return false;
  }
  return true;
}
