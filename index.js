const nome = document.querySelector('#primeiro')
const email = document.querySelector('#email')
const nol = document.querySelector('.nom')
const form = document.querySelector('.form-group')

function checar() {

     if (!nome.value) {
        return alert('Erro Nome Está Vazio')

    }
    if (!email.value) {
        return alert(`Erro Email Está Vazio`)

    }
 if (nome.value.length <= 8) {
        form.classList.add('estilo')
        alert('Nome incompleto')

    }


    else {
        abrir()
        form.classList.remove('estilo')
    }
}

document.addEventListener('click', function (e) {
    const el = e.target
    if (el.classList.contains('checar')) {
        checar()


    }



})





function abrir() {
    window.location.href = 'inde.html';

}


