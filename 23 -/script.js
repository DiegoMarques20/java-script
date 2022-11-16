function contar () {

    let ini = document.getElementById('inicio')
    let fim = document.getElementById('final') 
    let inter = document.getElementById('intervalo')
    let res = document.getElementById('res')

     if(ini.value.length == 0 || fim.value.length == 0 || inter.value.length == 0) {

        window.alert('[ERRO] Faltam dados a serem preenchidos!')

     } else {
            res.innerHTML = 'Contando...'

            let i  = Number(ini.value)
            let f  = Number(fim.value)
            let p = Number(inter.value)
            if (p <= 0) {
                window.alert('Intervalo inválido!')
                p = 1
            }
            if (i < f) {
                // Contagem crescente

                for (let c = i; c <= f; c += p) {

                    res.innerHTML += `${c} \u{1F449}`
                  } 
            } else {
                // Contagem regressiva

                for (let c = i; c >= f; c -= p) {
                    res.innerHTML += `${c} \u{1F449}`
                }

            }
            res.innerHTML += `\u{1F3C1}`
     }
}