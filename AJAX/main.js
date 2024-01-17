$(document).ready(function() {
    $('#zip').mask('00000-000')


    $('#btn-search').click(function() {
        const zip = $('#zip').val();
        const endpoint = `https://viacep.com.br/ws/${zip}/json`;
        const button = $(this);
        $(button).find('i').addClass('d-none')
        $(button).find('span').removeClass('d-none')



        fetch(endpoint)
        .then(function(response) {
            return response.json();
        })
        .then(function(json) {
            const rua = json.logradouro;
            const bairro = json.bairro;
            const cidade = json.localidade;
            const estado = json.uf;
            const address = `${rua}, ${bairro} - ${cidade} - ${estado} `;
            $('#address').val(address);
        })
        .catch(function(error) {
            alert('There was a problem finding this address. Try again later.')
        })
        .finally(function() {
            setTimeout(function() {
                $(button).find('i').removeClass('d-none');
                $(button).find('span').addClass('d-none');
            }, 1000);
        })
    })

    $('#form-order').submit(function(event) {
        event.preventDefault();
        
        if ($('#name').val().length == 0) {
            throw new Error('Enter your name');
        }
    })
})