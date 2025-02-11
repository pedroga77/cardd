'use strict'

const disciplinas = [
{nome:    'PWBE', cor: '#8A2BE2', icon: 'PPDM.png'},
{nome:    'PWFE', cor: '#BFEFFF', icon: 'PRO.png'},
{nome:    'PPDM', cor: '#54FF9F ', icon: 'PWBE.png'},
{nome:    'PRO', cor: '#FFD700', icon: 'PWFE.png'}

]

function criarItemMenu(disciplina){ 
    const listaMenu = document.getElementById('menu') 
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const novaImg = document.createElement('img')

    novoLink.href = '#'
    novoLink.textContent = disciplina.nome
    novoLink.style = `--cor-hover: ${disciplina.cor}`
    novaImg.src = `./img/${disciplina.icon}`

    novoItem.appendChild(novaImg)
    novoItem.appendChild(novoLink)
    listaMenu.appendChild(novoItem)
    
}

disciplinas.forEach(criarItemMenu)

const personagens = [
    {nome: 'As Nodt', descricao: 'O verdadeiro medo ocorre sem razão, sem limites. É como um enxame de insetos subindo pelo corpo. Não podemos escapar de nossos instintos', imagem: 'askin.jpg', cor: 'rgb	(25,25,112)'},
    {nome: 'Jugram', descricao: 'Vidas que foram salvas pela boa sorte devem ser varridas por uma má sorte igual.', imagem: 'jugram.jpg', cor: 'rgb(218,165,32)'},
    {nome: 'Yhwach', descricao: 'Se você não consegue entender, então deixe-me explicar; ninguém pode tirar nada de mim. Se você não sabia, então é hora de aprender - tudo neste mundo existe para ser tomado por mim!', imagem: 'yshwach.jpg', cor: 'rgb(0,0,0)'}
];

function criarCard(personagem) {
    const container = document.querySelector('.container');
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = personagem.cor;

    const imagem = document.createElement('img');
    imagem.src = `img/${personagem.imagem}`;
    imagem.alt = personagem.nome;

    const h2 = document.createElement('h2');
    h2.textContent = personagem.nome;

    const p = document.createElement('p');
    p.textContent = personagem.descricao;

    card.appendChild(imagem);
    card.appendChild(h2);
    card.appendChild(p);
    container.appendChild(card);
}
personagens.forEach(criarCard);