$(document).ready(function() {
    const tarefas = []
    const campo = $('form input')
    const spanSucesso = '<span class="span-sucesso">Tarefa adicionada com sucesso</span>'
    const spanErro = '<span class="span-erro">Essa tarefa já foi adicionada.</span>'

        $('form').on('submit', function (e) {
        e.preventDefault()

        if (tarefas.includes(campo.val())) {
            $(spanErro).appendTo('p')
            
        }
        else {
            
            tarefas.push(campo.val())
            const novoItem = $(`<li id="item">${campo.val()}</li>`)
            $(novoItem).appendTo('ul')
            $(spanSucesso).appendTo('p')
        
        }
        $('form input').val('')
        console.log(tarefas)

        $('button').on('click', function() {
            $('span').css('display', 'none')
        })
    })
    $('ul').on('click', function() {
        $('li').css('text-decoration', 'line-through')
        
    })
    
})