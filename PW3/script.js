function montarSelect(){
    const elemSelect = document.getElementById('numerosPorJogo');
    let opcoes = '';
    for(let i = 6; i <= 15; i++){
        opcoes += `<option value="${i}">${i}</option>`
    }
    elemSelect.innerHTML = opcoes;
}

function gerarNumeroAleatorio(min, max){
    let numero = Math.floor( Math.random() * (max - min) + min )
    return numero
}

function gerarJogos(){

    let numeroDeJogos = document.getElementById('numeroDeJogos').value
    let numerosPorJogos = Number(document.getElementById('numerosPorJogo').value)

    let tabela = document.getElementById('jogosMegaSena')

    while(tabela.rows.length >= 1){
        tabela.deleteRow(0)
    }
    for(let jogos = 1; jogos <= numeroDeJogos; jogos++){
        let qtdeLinhas = tabela.rows.length
        let linha = tabela.insertRow(qtdeLinhas)
        linha.insertCell(0).innerHTML = `Jogo ${jogos} :`
        let numerosSorteados = new Array()
        for(let numeros = 1; numeros <= numerosPorJogos; numeros++){
            let numero = gerarNumeroAleatorio(1, 60)
            if (numerosSorteados.includes(numero)) {
                numeros--
            } else {
                numerosSorteados.push(numero);
            }
        }

        numerosSorteados.sort(function(a, b) {
            return a - b;
        })

        numerosSorteados.sort(function(a, b) {
            return a - b;
          })

        let coluna = 1
        numerosSorteados.forEach(function(numero) {
            linha.insertCell(coluna).innerHTML = numero
            coluna++
        })
    }
}

