const email = document.getElementById('email')
const submit = document.getElementById('submit')
const mensagem = document.getElementById('error-msg')

submit.addEventListener("click", function(){
    
    if(!email.checkValidity() || email.value == ""){
        mensagem.innerHTML = "Please enter a valid email address"
        email.value = "" 
        mensagem.style.color="red"
        setTimeout(() => {mensagem.innerHTML=""}, 3000)
    }else {
        mensagem.innerHTML = "valid email, sent"
        mensagem.style.color="green"
        email.value = ""
        setTimeout(() => {mensagem.innerHTML=""}, 3000)

    }
})




