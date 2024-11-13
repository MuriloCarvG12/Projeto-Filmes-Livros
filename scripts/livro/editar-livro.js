document
.addEventListener('submit', alterarLivro)


let lista = JSON.parse(localStorage.getItem('Produtos'))

lista.forEach(livro => {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    const idUrl = params.get("id")

    if(idUrl == livro.id)
    {

    let title = document.getElementById('page-editar-livro-head')
    title.innerText = livro.Nome

    let nome = document.getElementById('Nome-Produto')
    nome.placeholder = livro.Nome

    let autor = document.getElementById('Autor-Produto')
    autor.placeholder = livro.Autor

    let descricao = document.getElementById('Descricao-Produto')
    descricao.placeholder = livro.Descricao

    let valor = document.getElementById('Valor-Produto')
    valor.placeholder = livro.Valor

    let image = document.getElementById('Imagem-Produto')
    image.placeholder = livro.Imagem
    }

    


});

function alterarLivro()
{
    let lista = JSON.parse(localStorage.getItem('Produtos'))
    
    lista.forEach(livro => {
        const url = new URL(window.location.href)
        const params = new URLSearchParams(url.search)
        const idUrl = params.get("id")

        const index = lista.findIndex(item => item.id == idUrl)

        console.log(index)
        

        let nome = document.getElementById('Nome-Produto').value
    
        let autor = document.getElementById('Autor-Produto').value
    
        let descricao = document.getElementById('Descricao-Produto').value
    
        let valor = document.getElementById('Valor-Produto').value
    
        let image = document.getElementById('Imagem-Produto').value


        
        if(nome !== "")
        {
            lista[index] = Object.assign({}, lista[index], { Nome: nome})
            localStorage.setItem('Produtos', JSON.stringify(lista))
        }
        

        if(autor !== "")
        {
            lista[index] = Object.assign({}, lista[index], { Autor: autor})
            localStorage.setItem('Produtos', JSON.stringify(lista))
        }
        

        if(descricao !== "")
            {
                lista[index] = Object.assign({}, lista[index], { Descricao: descricao})
                localStorage.setItem('Produtos', JSON.stringify(lista))
            }
        

        if(valor !== "")
            {
                lista[index] = Object.assign({}, lista[index], { Valor: valor})
                localStorage.setItem('Produtos', JSON.stringify(lista))
            }
        

        if(image !== "")
            {
                lista[index] = Object.assign({}, lista[index], { Imagem: image})
                localStorage.setItem('Produtos', JSON.stringify(lista))
            }
       

    })
    
}