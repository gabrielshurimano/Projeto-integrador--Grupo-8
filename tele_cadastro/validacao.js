const form = document.getElementById("form");

console.log(form);

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

  if (nome_usuarioValue === "") {
    //mostrar o erro e adicionando a classe erro
    erroValidador(nome_usuario, "Preencha esse campo");
  } else {
    //adicionar a classe de sucesso
  }

  if (!validateEmail(email_usuarioValue)) {
    //mostrar o erro e adicionando a classe erro
    erroValidador(email_usuario, "Email inválido!");
  } else {
    //adicionar a classe de sucesso
  }

  if (whatsappValue === "") {
    //mostrar o erro e adicionando a classe erro
    erroValidador(whatsapp, "Preencha esse campo");
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

//função
function erroValidador(input, message) {
  const controle_de_formulario = input.parentElement;
  const small = controle_de_formulario.querySelector("small");
  controle_de_formulario.className = "controle_de_formulario erro";
}

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
