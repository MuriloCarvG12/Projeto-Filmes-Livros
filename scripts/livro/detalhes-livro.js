document

let lista = JSON.parse(localStorage.getItem('Produtos'))

lista.forEach(livro => {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    const idUrl = params.get("id")

    if(idUrl == livro.id)
    {
        document.getElementById('page-head-book-title').innerText = livro.Nome

        
        const body = document.getElementById('elemento')
        const header = document.getElementById('elemento-header')

        const imagem = document.createElement('img')
        imagem.src = livro.Imagem
        imagem.height = 300
        imagem.width = 300
        
        

        const nome = document.createElement('h2')
        nome.innerText =  livro.Nome
        nome.classList.add('page-detalhes-livro-body-item-title')

        const autor = document.createElement('p')
        autor.innerText = "Autor: " + livro.Autor
        autor.classList.add('page-detalhes-livro-body-item')



        const description = document.createElement('p')
        description.innerText = "Descrição: " + livro.Descricao
        description.classList.add('page-detalhes-livro-body-item')

        const preco = document.createElement('p')
        preco.innerText = "Preco: " + livro.Valor
        preco.classList.add('page-detalhes-livro-body-item')

        
        header.append(nome)
        body.append(imagem)
        body.append(autor)
        body.append(description)
        body.append(preco)


    }
});