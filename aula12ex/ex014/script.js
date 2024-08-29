function carregar() {
    var msg = document.getElementById('msg');
    var foto = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();  // Obtém a hora atual
    var minuto = data.getMinutes();  // Obtém os minutos atuais
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`;

    if (hora >= 0 && hora < 12) {
        // Bom Dia!
        foto.src = 'fotomanha.png';
        document.body.style.background = '#e2cd9f' //cor usada de fundo
    } else if (hora >= 12 && hora < 18) {
        // Boa Tarde!
        foto.src = 'fototarde.png';
        document.body.style.background = '#b9846f'
    } else {
        // Boa Noite!
        foto.src = 'fotonoite.png';
        document.body.style.background = '#011c3a'
    }
}
