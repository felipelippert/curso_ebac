$(document).ready(function() {
    /*      MASCARAS        */
    $('#telefone').mask('(00) 00000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')

    /*      VALIDAÇAO        */
    $('form').validate( {
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            cpf: {
                required: true
            },
            endereco: {
                required: true
            },
            bairro: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome completo',
            email: 'Por favor, insira seu e-mail.',
            telefone: 'Por favor, insira seu telefone',
            cpf: 'Por favor, insira seu CPF',
            endereco: 'Por favor, insira seu endereço completo',
            bairro: 'Por favor, insira seu Bairro',
            cep: 'Por favor, insira seu CEP'
        },
        submitHandler: function(form) {
            alert('Formulário enviado com sucesso')
        },
        invalidHandler: function(event, validador){
            let camposIncorretos = validador.numberOfInvalids()
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
        
    })
})