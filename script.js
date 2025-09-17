document.addEventListener('DOMContentLoaded', function() {
    const botoesConfirmar = document.querySelectorAll('.confirmar-btn');
    const popup = document.getElementById('popup-form');
    const fecharBtn = document.querySelector('.fechar-popup');
    const campoJogo = document.getElementById('campo-jogo');

    botoesConfirmar.forEach(btn => {
        btn.addEventListener('click', function() {
            popup.style.display = 'block';
            const jogoNome = btn.closest('.jogo-item').querySelector('h2').textContent;
            campoJogo.value = jogoNome;
        });
    });

    fecharBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});