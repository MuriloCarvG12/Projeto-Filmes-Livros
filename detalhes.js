document

let lista = JSON.parse(localStorage.getItem('Produtos'))

lista.forEach(livro => {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    const idUrl = params.get("id")

    if(idUrl == livro.id)
    {
        const body = document.getElementById('elemento')

        const nome = document.createElement('h2')
        nome.innerText = "Nome: " + livro.Nome

        const autor = document.createElement('p')
        autor.innerText = "Autor: " + livro.Autor



        const description = document.createElement('p')
        description.innerText = "Descrição: " + livro.Descricao

        const preco = document.createElement('p')
        preco.innerText = "Preco: " + livro.Valor

        body.append(nome)
        body.append(description)
        body.append(preco)

    }
});