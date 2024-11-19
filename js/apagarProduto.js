/*export function configurarBotaoDeApagar() {
    // Seleciona todos os ícones de apagar
    const botoesDeApagar = document.querySelectorAll("#apagar");

    // Adiciona um evento de clique para cada botão
    botoesDeApagar.forEach(botao => {
        botao.addEventListener("click", (event) => {
            // Para remover o card, precisamos acessar o elemento pai
            const card = event.target.closest(".card");
            if (card) {
                card.remove(); // Remove o card do DOM
            }
        });
    });
}*/

document.getElementById('apagar-tx').addEventListener('click', function() {
    // Função para limpar os campos de input
    function limparInputs() {
        document.getElementById('titulo').value = '';
        document.getElementById('descricao').value = '';
        document.getElementById('imagem').value = '';
    }
    limparInputs(); // Chama a função para limpar os inputs
});

export function configurarBotaoDeApagar() {
    const botoesDeApagar = document.querySelectorAll("#apagar");

    botoesDeApagar.forEach(botao => {
        botao.addEventListener("click", async (event) => {
            const card = event.target.closest(".card");
            if (card) {
                const idProduto = card.dataset.id; // Adicione um atributo data-id no card

                try {
                    // Faz a requisição para deletar o produto
                    await fetch(`http://localhost:3000/produtos/${idProduto}`, {
                        method: 'DELETE',
                    });

                    card.remove(); // Remove o card do DOM
                } catch (error) {
                    console.error('Erro ao deletar o produto:', error);
                }
            }
        });
    });
}
