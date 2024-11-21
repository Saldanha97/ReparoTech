const nome = document.querySelector('#primeiro')
const email = document.querySelector('#email')
const nol = document.querySelector('.nom')
const old = document.querySelector('.old')
const old1 = document.querySelector('.old1')
let elementoCriado = false;
let elementoEmailCriado = false;
const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function checar() {
    if (!nome.value || nome.value.length <= 8) {
        if (!elementoCriado) {
            elementonome();
            
            elementoCriado = true;
          
        }
     
    }

    if (!email.value || !regexEmail.test(email.value)) {
        if (!elementoEmailCriado) {
            elementoemail();
            elementoEmailCriado = true;
            
        }
    }

    else {
        abrir()
        
    }
}





function elementonome() {
    const cria = document.createElement('p')
    old.appendChild(cria)
    return cria.innerHTML = 'Insira um nome válido'
}

function elementoemail() {
    const cri = document.createElement('p')
    old1.appendChild(cri)
    return cri.innerHTML = 'Insira email válido  '
}



function abrir() {
    window.location.href = 'inde.html';

}




document.addEventListener('click', function (e) {
    const el = e.target
    if (el.classList.contains('checar')) {
        checar()



    }



})
