// server.js ou app.js
const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());

const dbPath = path.join(__dirname, 'db.json');

// Endpoint para deletar um produto
app.delete('/produtos/:id', (req, res) => {
    const { id } = req.params;

    // Lê o conteúdo do db.json
    fs.readFile(dbPath, 'utf-8', (err, data) => {
        if (err) return res.status(500).send('Erro ao ler o banco de dados');

        const produtos = JSON.parse(data);
        const novosProdutos = produtos.filter(produto => produto.id !== id);

        // Atualiza o db.json
        fs.writeFile(dbPath, JSON.stringify(novosProdutos), (err) => {
            if (err) return res.status(500).send('Erro ao atualizar o banco de dados');
            res.status(200).send('Produto deletado com sucesso');
        });
    });
});

// Inicie o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
