const form   = document.getElementById("form")
const campos = document.querySelectorAll(".required")
const spans  = document.querySelectorAll(".span-required")
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/


// Não está funcionado o Submit
form.addEventListener('submit', (event) => {
     console.log('teste')
})

function SetError(index){
    campos[index].style.border = "3px solid red"
    spans[index].style.display = "block";
}

function removeError(index){
    campos[index].style.border = ""
    spans[index].style.display = "none";
}


function nameValidate(){
    if (campos[0].value.length < 3)  {
        SetError(0);
    } else {
        removeError(0)
   }
}

function emailValidate(){
    if (!emailRegex.test(campos[1].value)){
        SetError(1);
    } else {
        removeError(1)

    }
}

function mainPasswordValidate(){
    if (campos[3].value.length < 8) {
        SetError(3);
    } else {
        removeError(3);
        ComparePassword();
    }
}

function ComparePassword(){

        if(campos[3].value == campos[4].value && campos[4].value.length >= 8){
            removeError(4);
        } else {
            SetError(4);
       }

}




