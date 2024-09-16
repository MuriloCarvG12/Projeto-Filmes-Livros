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
            document.getElementById('Nome-Produto').style.borderColor = 'red'
        }
    else if(Nome !== "")
        {
            document.getElementById('Nome-Produto').style.borderColor = ''
        }


    if(Descricao == "")
        {}
    else if(Descricao !== "")
        {}


    if(Valor == "")
        {}
    else if(Valor !== "") 
        {}



    if(Imagem == "")
        {}
    else if(Imagem !== "")
        {}

    if(Autor == "")
    {}
    else if(Autor !== "")
    {}



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

        let lista = JSON.parse(localStorage.getItem('Produtos'))

        if(lista === null) lista = []

        lista.push(Produto)

        const Produto_Salvo = localStorage.setItem('Produtos', JSON.stringify(lista))
    }


    

}