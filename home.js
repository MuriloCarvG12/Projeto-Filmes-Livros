document.addEventListener('DOMContentLoaded', load_page)

function load_page(){
let lista = JSON.parse(localStorage.getItem('Produtos'))

lista.forEach(livro => {
const card = document.getElementById('elemento')
// body
const body = document.createElement('div')
body.classList.add('card-body')

////// title
const title = document.createElement('h1')
title.innerText = livro.Nome

////// description
const autor = document.createElement('p')
autor.innerText = livro.Autor

const value = document.createElement('p')
value.innerText = livro.Valor
//////image

const image = document.createElement('img')


////// buttons
const div_buttons = document.createElement('div')
div_buttons.classList.add('buttons-row')

const button_view = document.createElement('button')
button_view.innerText = 'Detalhes'
button_view.onclick = () => window.location.href = "detalhes-livro.html?id=" + livro.id


const button_edit = document.createElement('button')
button_edit.innerText = 'editar'
button_edit.onclick = () => window.location.href = "editar-livro.html?id=" + livro.id

const button_delete = document.createElement('button')
button_delete.innerText = 'deletar'
button_delete.onclick = () => deletalivro(livro.id)

//////


div_buttons.append(button_view)
div_buttons.append(button_edit)
div_buttons.append(button_delete)

body.append(title)
body.append(autor)
body.append(value)
body.append(div_buttons)
card.append(body)

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