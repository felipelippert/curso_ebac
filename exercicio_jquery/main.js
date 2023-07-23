$(document).ready(function() {

    

    $('form').on('submit', function (e) {
        e.preventDefault()

        const campo = $('form input').val()
        const novoItem = $(`<li>${campo}</li>`)
        $(novoItem).appendTo('ul')
        
    })
})