'use strict'

import funcionarios from "./funcionarios.json" with {type: "json"}
console.log(funcionarios)

function criarFuncionarios(srcImagem) {
    const cards = document.createElement('div')
    const quadro = document.getElementById('quadro')
    const img = document.createElement('img')
    const nome = document.createElement('h2')
    const cargo = document.createElement('span')

    quadro.appendChild(cards)
    cards.appendChild(img)


    cards.appendChild(nome)
    cards.appendChild(cargo)


    cards.classList.add('cards')
    img.classList.add('img')
    nome.classList.add('nome')
    cargo.classList.add('cargo')

    img.src = srcImagem.imagem
}

function carregarFuncionarios() {
    const quadro = document.getElementById('quadro')

    funcionarios.forEach(criarFuncionarios)
}

carregarFuncionarios()