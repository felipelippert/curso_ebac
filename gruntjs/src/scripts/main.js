document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let maxNum = document.getElementById('max-num').value;
        maxNum = parseInt(maxNum);

        let numeroAleatorio = Math.random() * maxNum;
        numeroAleatorio = Math.floor(numeroAleatorio + 1);
        
        document.getElementById('result-value').innerText = numeroAleatorio;
        document.querySelector('.result').style.display = 'block';
    })
})