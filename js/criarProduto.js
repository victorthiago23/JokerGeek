import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento) {
    evento.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = document.querySelector("[data-descricao]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    try {
    await conectaApi.criarProduto(titulo, descricao, imagem);

    window.location.href = "../pages/envio-concluido.html";
    } catch (e) {
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarProduto(evento));