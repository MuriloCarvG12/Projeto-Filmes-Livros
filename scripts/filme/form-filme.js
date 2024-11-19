document
.getElementById('form-fields')
.addEventListener('submit', form)

function form(event)
{
    event.preventDefault();
    const Nome = document.getElementById('Nome-Produto').value 
    const Descricao = document.getElementById('Descricao-Produto').value 
    const Valor = document.getElementById('Valor-Produto').value
    const Imagem = document.getElementById('Imagem-Produto').value
    const Autor = document.getElementById('Autor-Produto').value

    if(Nome  == "")
        {
            document.getElementById('Nome-Produto').placeholder = 'NÃO PREENCHIDO'
            document.getElementById('Nome-Produto').style.borderStyle = 'solid'
            document.getElementById('Nome-Produto').style.borderColor = 'red'
        }
    else if(Nome !== "")
        {
            document.getElementById('Nome-Produto').placeholder = 'Nome-Livro'
            document.getElementById('Nome-Produto').style.borderStyle = ''
            document.getElementById('Nome-Produto').style.borderColor = ''
        }


    if(Autor == "")
        {
            document.getElementById('Autor-Produto').placeholder = 'NÃO PREENCHIDO'
            document.getElementById('Autor-Produto').style.borderStyle = 'solid'
            document.getElementById('Autor-Produto').style.borderColor = 'red'
        }
    else if(Autor !== "")
        {
            document.getElementById('Autor-Produto').placeholder = 'Autor-Livro'
            document.getElementById('Autor-Produto').style.borderStyle = ''
            document.getElementById('Autor-Produto').style.borderColor = ''
        }


    if(Descricao == "")
        {
            document.getElementById('Descricao-Produto').placeholder = 'NÃO PREENCHIDO'
            document.getElementById('Descricao-Produto').style.borderStyle = 'solid'
            document.getElementById('Descricao-Produto').style.borderColor = 'red'
        }
    else if(Descricao !== "") 
        {
            document.getElementById('Descricao-Produto').placeholder = 'Descrição-Livro'
            document.getElementById('Descricao-Produto').style.borderStyle = ''
            document.getElementById('Descricao-Produto').style.borderColor = ''
        }



    if(Valor == "")
        {
            document.getElementById('Valor-Produto').placeholder = 'NÃO PREENCHIDO'
            document.getElementById('Valor-Produto').style.borderStyle = 'solid'
            document.getElementById('Valor-Produto').style.borderColor = 'red'
        }
    else if(Valor !== "")
        {
            document.getElementById('Valor-Produto').placeholder = 'Valor-Livro'
            document.getElementById('Valor-Produto').style.borderStyle = ''
            document.getElementById('Valor-Produto').style.borderColor = ''
        }

    if(Imagem == "")
    {
        document.getElementById('Imagem-Produto').placeholder = 'NÃO PREENCHIDO'
        document.getElementById('Imagem-Produto').style.borderStyle = 'solid'
        document.getElementById('Imagem-Produto').style.borderColor = 'red'
    }
    else if(Imagem !== "")
    {
        document.getElementById('Imagem-Produto').placeholder = 'Imagem-Livro'
        document.getElementById('Imagem-Produto').style.borderStyle = ''
        document.getElementById('Imagem-Produto').style.borderColor = ''
    }



    if(Imagem && Nome && Descricao && Valor && Autor !== "")
    {
        console.log("cheguei aqui ó")
        
        const Produto = 
        {
            id: Date.now(),
            Nome: Nome,
            Descricao: Descricao,
            Valor: Valor,
            Imagem: Imagem,
            Autor: Autor
        }

        let lista = JSON.parse(localStorage.getItem('ProdutosFilme'))

        if(lista === null) lista = []

        lista.push(Produto)

        const Produto_Salvo = localStorage.setItem('ProdutosFilme', JSON.stringify(lista))


        const body = document.getElementById('container')

        const sucess_body = document.createElement('div')

        

        sucess_body.classList.add('sucess_body')

        const success_text = document.createElement('h1')

        success_text.innerText = 'Filme cadastrado com sucesso!'
        success_text.style.color = '#e64d06'

        const sucess_button = document.createElement('button')

        sucess_button.classList.add('sucess_button')

        sucess_button.innerText  = 'Voltar para a tela home!'
        
        sucess_button.addEventListener('click', () => {window.location='./home-filme.html'})

        
        sucess_body.append(success_text)
        sucess_body.append(sucess_button)

        body.append(sucess_body)
        
        

    }


    

}