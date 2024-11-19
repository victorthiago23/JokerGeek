async function listaProdutos() {
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criarProduto(titulo, descricao, imagem) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagem: imagem,
            titulo: titulo,
            descricao: descricao
        })
    });

    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o produto");
    }
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}


export const conectaApi = {
    listaProdutos,
    criarProduto
}
