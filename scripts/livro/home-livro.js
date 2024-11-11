document.addEventListener('DOMContentLoaded', load_page)

function load_page(){
let lista = JSON.parse(localStorage.getItem('Produtos'))
if(lista === null)
    {
        lista = []
    }

lista.forEach(livro => {
const card = document.getElementById('elemento')
// body
const body = document.createElement('div')
body.classList.add('card-body')

/// header
const header = document.createElement('div')
header.classList.add('card-header')
/// footer 

const footer = document.createElement('div')
footer.classList.add('card-footer')
/// elements div

const elements = document.createElement('div')
elements.classList.add('card-elements')

////// title
const title = document.createElement('h1')

title.innerText = livro.Nome

////// description
const autor = document.createElement('p')
autor.innerText = 'Autor: ' + livro.Autor
autor.classList.add('card-text')

const value = document.createElement('p')
value.innerText = 'Preço: ' + ' R$ ' + livro.Valor
value.classList.add('card-text')

//////image

const image = document.createElement('img')
image.src = livro.Imagem
image.height = 200
image.width = 200
image.classList.add('card-text')

////// buttons
const div_buttons = document.createElement('div')
div_buttons.classList.add('buttons-row')

const button_view = document.createElement('button')
button_view.innerText = 'Detalhes'
button_view.onclick = () => window.location.href = "detalhes-livro.html?id=" + livro.id


const button_edit = document.createElement('button')
button_edit.innerText = 'Editar'
button_edit.onclick = () => window.location.href = "editar-livro.html?id=" + livro.id

const button_delete = document.createElement('button')
button_delete.innerText = 'Deletar'
button_delete.onclick = () => deletalivro(livro.id)

//////

/// adiciona os botoes para o div buttons e adiciona o div buttons para footer
div_buttons.append(button_view)
div_buttons.append(button_edit)
div_buttons.append(button_delete)
footer.append(div_buttons)

/// adicona as informações para os elementos que formarao o card
header.append(title)

elements.append(image)
elements.append(autor)
elements.append(value)

// adiciona elementos ao corpo do card
body.append(header)

body.append(elements)

card.append(body)

card.append(footer)

});
}

function carrega_card()
{
const card = document.getElementById('elemento')
// body
const body = document.createElement('div')
body.classList.add('card-body')

////// title
const title = document.createElement('h1')
title.innerText = 'teste'

////// description
const description = document.createElement('p')
description.innerText = 'teste'

//////image

const image = document.createElement('img')


////// buttons
const div_buttons = document.createElement('div')
div_buttons.classList.add('buttons-row')

const button_view = document.createElement('button')


const button_edit = document.createElement('button')
button_edit.innerText = 'editar'

const button_delete = document.createElement('button')
button_delete.innerText = 'deletar'

//////


div_buttons.append(button_view)
div_buttons.append(button_edit)
div_buttons.append(button_delete)

body.append(title)
body.append(description)
body.append(div_buttons)
card.append(body)
}

function deletalivro(id)
{
    console.log(id)
    let livros = JSON.parse(localStorage.getItem('Produtos'))
    let livros_filtrados = (livros.filter(livro => livro.id !== id))
    localStorage.setItem('Produtos', JSON.stringify(livros_filtrados))
    location.reload()
    
        
    
    
        
   
    
}