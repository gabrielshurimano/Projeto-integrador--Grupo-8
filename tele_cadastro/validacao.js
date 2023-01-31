const form = document.getElementById("form")
const nome_usuario = document.getElementById("nome_usuario")
const email_usuario = document.getElementById("email_usuario")
const whatsapp = document.getElementById("whatsapp")
const password = document.getElementById("pasword")
const conf_password = document.getElementById("conf_pasword")



form.addEventListener("submit", (e) => {
  e.preventDefault()

  checkImputs()
})

// removendo todos os espaçamentos em branco com o "trim"
function checkInputs() {
    const nome_usuarioValue = nome_usuario.Value.trim()
    const email_usuarioValue = email_usuario.Value.trim()
    const whatsappValue = whatsapp.Value.trim()
    const passwordValue = password.Value.trim()
    const conf_passwordValue = conf_password.Value.trim()

if(nome_usuarioValue === ""){
  //mostrar o erro e adicionando a classe erro
  erroValidador(nome_usuario, "Preencha esse campo")
}else{
  //adicionar a classe de sucesso
}
}


//função
function erroValidador(input, message){
    const controle_de_formulario = input.parentElement;
    const small = controle_de_formulario.querySelector("small")

  controle_de_formulario.className = "controle_de_formulario erro"

}
