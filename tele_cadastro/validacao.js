const form   = document.getElementById("form")
const campos = document.querySelectorAll(".required")
const spans  = document.querySelectorAll(".span-required")
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
    if (campos[0].value.length < 3)  {
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

/* Validar Campo Telefones */

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


let senhaValidada = false

function mainPasswordValidate(){
    if (campos[3].value.length < 8) {
        SetError(3);
        senhaValidada = false
    } else {
        removeError(3);
        ComparePassword();
        senhaValidada = true
    }
}

senhaIgual = false

function ComparePassword(){

        if(campos[3].value == campos[4].value && campos[4].value.length >= 8){
            removeError(4);
            senhaIgual = true
        } else {
            SetError(4);
            senhaIgual = false
       }

}

form.addEventListener("submit", (event) => {
    if (nomeValidado && emailValidado && telefoneValidado && senhaValidada && senhaIgual) { 
     alert("Formulário enviado com sucesso")
    } else{
    event.preventDefault()
    alert("Preencha todos os campos corretamente")
    nameValidate()
    emailValidate()
    telValidate()
    mainPasswordValidate()
    ComparePassword()
    }
 })

 

