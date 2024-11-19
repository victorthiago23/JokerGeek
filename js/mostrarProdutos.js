import { conectaApi } from "./conectaApi.js";
import { configurarBotaoDeApagar } from "./apagarProduto.js"; // Importa a função

const lista = document.querySelector("[data-lista]");

export default function constroiCard(titulo, descricao, imagem, id) {
    const produto = document.createElement("div");
    produto.className = "card";
    produto.dataset.id = id; // Adiciona o id ao card
    produto.innerHTML = `
        <img src="${imagem}" alt="">
        <h2>${titulo}</h2>
        <p>${descricao}</p>
        <i id="apagar" class="fa-solid fa-trash"></i>`;
    
    return produto;        
}


async function listaProdutos() {
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(elemento => {
            lista.appendChild(
                constroiCard(elemento.titulo, elemento.descricao, elemento.imagem, elemento.id) // Passando o id
            );
        });
        configurarBotaoDeApagar(); // Chama a função para configurar o botão
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>
                           <img src="../img/nao_encontrado.png">`;
    }
}


listaProdutos();
