function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.getElementById('res');  
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {   
        window.alert('[ERRO] Verifique os dados e tente novamente!');
        return;
    }

    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');

    if (fsex[0].checked) {
        genero = 'Homem';
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'm-crianca.png');
        } else if (idade < 21) {
            img.setAttribute('src', 'm-jovem.png');
        } else if (idade < 50) {
            img.setAttribute('src', 'm-adulto.png');
        } else {
            img.setAttribute('src', 'm-idoso.png');
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher';
        if (idade >= 0 && idade < 10) {
            img.setAttribute('src', 'f-crianca.png');
        } else if (idade < 21) {
            img.setAttribute('src', 'f-jovem.png');
        } else if (idade < 50) {
            img.setAttribute('src', 'f-adulto.png');
        } else {
            img.setAttribute('src', 'f-idosa.png');
        }
    }
    res.style.textAlign = 'center';
    res.innerHTML = `Seu gênero é ${genero} e você tem ${idade} anos.`;
    res.appendChild(img);
}
