const formulario = document.getElementById("formulario")
const campos = document.querySelectorAll(".required")
const spans = document.querySelectorAll(".span-required")
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

function SetError(index){
  campos[index].style.border = "3px solid red"
  spans[index].style.display = "block";
}

function removeError(index){
  campos[index].style.border = ""
  spans[index].style.display = "none";
}

let nomeValidado = false

function nameValidate(){
    if (campos[0].value.length < 10 )  {
        SetError(0);
        nomeValidado = false;
    } else {
        removeError(0)
        nomeValidado = true;
          
   }
}

let emailValidado = false
function emailValidate(){
    if (!emailRegex.test(campos[1].value)){
        SetError(1);
        emailValidado = false
    } else {
        removeError(1)
        emailValidado = true

    }
}

let telefoneValidado = false

function telValidate(){
    if (campos[2].value.length < 11 || campos[2].value.length > 11) {
        SetError(2);
        telefoneValidado = false
    } else {
        removeError(2)
        telefoneValidado = true
        
    }
}


let mensagemValidada = false
function mensagemValidate(){
  if (campos[3].value.length < 20 ) {
    SetError(3);
    mensagemValidada = false    
  } else {
    removeError(3)
    mensagemValidada = true
  }
}


formulario.addEventListener("submit", (event) => {
  if (nomeValidado && emailValidado && telefoneValidado && mensagemValidada) { 
   alert("Formulário enviado com sucesso")
  } else{
  event.preventDefault()
  alert("Preencha todos os campos corretamente")
  nameValidate()
  emailValidate()
  telValidate()
  mensagemValidate()
  }
})









/*const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const mensagem = document.getElementById("mensagem").value;
  const email = document.getElementById("email").value;
  const radioemail = document.getElementById("radio-email").value;
  const radiotelefone = document.getElementById("radio-telefone").value;
  const radiowhatsapp = document.getElementById("radio-whatsapp").value;
  const mostrarAlerta = document.getElementById("mostrarAlerta");
  const alerta = document.getElementById("alerta");
  const alertaError = document.getElementById("alerta-error");

  alerta.style.display = "none";
  alertaError.style.display = "none";

  if (
    nome &&
    email &&
    telefone &&
    mensagem
    
  ) {
    
    alerta.style.display = "block";
    setTimeout(function () {
      alerta.style.display = "none";
    }, 3000);
  
  } else {
    
    alertaError.style.display = "block";
    setTimeout(function () {
      alertaError.style.display = "none";
    }, 3000);
    
  }
});*/