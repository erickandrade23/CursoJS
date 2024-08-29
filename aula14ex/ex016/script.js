function contar() {
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let pas = document.getElementById('txtp');
    let res = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML('Impossivel Contar!')
    } else {
        res.innerHTML = 'Contando:'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        if(i < f) {
            //Contagem Crescente
            for(var c = i; c <= f; c+= p) {
               res.innerHTML += `${c} \u{1F449}`
            } 
        } else {
            //Contagem Descrescente
            for(var c = i; c >= f; c-= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}