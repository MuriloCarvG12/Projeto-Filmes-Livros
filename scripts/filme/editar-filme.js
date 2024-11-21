document
.addEventListener('submit', alterar_filme)

let lista = JSON.parse(localStorage.getItem('ProdutosFilme'))


lista.forEach(filme => {
    const url = new URL(window.location.href)
    const params = new URLSearchParams(url.search)
    const idUrl = params.get("id")

    if(filme.id == idUrl)
        {
            const Filme_Nome = document.getElementById('Filme-Nome')
            Filme_Nome.innerText = filme.Nome

            const Form_Nome = document.getElementById('Nome-Produto')
            Form_Nome.placeholder = filme.Nome

            const Form_Autor = document.getElementById('Autor-Produto')
            Form_Autor.placeholder = filme.Autor

            const Form_Descricao = document.getElementById('Descricao-Produto') 
            Form_Descricao.placeholder = filme.Descricao 

            const Form_Valor =  document.getElementById('Valor-Produto')
            Form_Valor.placeholder = filme.Valor

            const Form_Imagem =  document.getElementById('Imagem-Produto')
            Form_Imagem.placeholder = filme.Imagem
        }
})

function alterar_filme()
{
    let lista = JSON.parse(localStorage.getItem('ProdutosFilme'))
    
    lista.forEach(filme => {
        const url = new URL(window.location.href)
        const params = new URLSearchParams(url.search)
        const idUrl = params.get("id")

        const index = lista.findIndex(item => item.id == idUrl)

        let nome = document.getElementById('Nome-Produto').value
    
        let autor = document.getElementById('Autor-Produto').value
    
        let descricao = document.getElementById('Descricao-Produto').value
    
        let valor = document.getElementById('Valor-Produto').value
    
        let image = document.getElementById('Imagem-Produto').value


        
        if(nome !== "")
        {
            lista[index] = Object.assign({}, lista[index], { Nome: nome})
            localStorage.setItem('ProdutosFilme', JSON.stringify(lista))
        }
        

        if(autor !== "")
        {
            lista[index] = Object.assign({}, lista[index], { Autor: autor})
            localStorage.setItem('ProdutosFilme', JSON.stringify(lista))
        }
        

        if(descricao !== "")
            {
                lista[index] = Object.assign({}, lista[index], { Descricao: descricao})
                localStorage.setItem('ProdutosFilme', JSON.stringify(lista))
            }
        

        if(valor !== "")
            {
                lista[index] = Object.assign({}, lista[index], { Valor: valor})
                localStorage.setItem('ProdutosFilme', JSON.stringify(lista))
            }
        

        if(image !== "")
            {
                lista[index] = Object.assign({}, lista[index], { Imagem: image})
                localStorage.setItem('ProdutosFilme', JSON.stringify(lista))
            }
       

    })
    
}