const formulario = document.getElementById("formulario");

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
});