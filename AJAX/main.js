$(document).ready(function() {
    $('#zip').mask('00000-000')


    $('#btn-search').click(function() {
        const zip = $('#zip').val();
        const endpoint = `https://viacep.com.br/ws/${zip}/json`;
        const button = $(this);
        $(button).find('i').addClass('d-none')
        $(button).find('span').removeClass('d-none')

        $.ajax(endpoint).done(function(response) {
            const rua = response.logradouro;
            const bairro = response.bairro;
            const cidade = response.localidade;
            const estado = response.uf;
            const address = `${rua}, ${bairro} - ${cidade} - ${estado} `;
            $('#address').val(address)


            setTimeout(function() {
                $(button).find('i').removeClass('d-none')
                $(button).find('span').addClass('d-none')
                
            }, 3000);

        })
    })
})