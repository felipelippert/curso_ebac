const form = document.getElementById('formulario');

function validaFormulario(numA, numB) {
    return numB > numA
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const numA = parseInt(document.getElementById('numA').value);
    const numB = parseInt(document.getElementById('numB').value);
    const mensagemSucesso = `O formulário foi enviado.\nValor 1: ${numA}\nValor 2: ${numB}`

    formValido = validaFormulario(numA, numB)
    if (formValido){
        alert(mensagemSucesso)

        document.getElementById('numA').value = ''
        document.getElementById('numB').value = ''
    }
    else {
        alert('O segundo valor deve ser maior que o primeiro! Tente novamente.')
    }
})

console.log(form)
