const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// Servir arquivos estáticos
app.use(express.static('.'));

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'slimburnerpt.html'));
});

// Rota para o arquivo HTML específico
app.get('/slimburnerpt.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'slimburnerpt.html'));
});

// Middleware para adicionar headers de cache para desenvolvimento
app.use((req, res, next) => {
    res.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.set('Pragma', 'no-cache');
    res.set('Expires', '0');
    next();
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em: http://localhost:${PORT}`);
    console.log(`📁 Seu site está disponível em: http://localhost:${PORT}/slimburnerpt.html`);
    console.log(`💡 Faça alterações no arquivo slimburnerpt.html e recarregue a página para ver as mudanças`);
    console.log(`⏹️  Pressione Ctrl+C para parar o servidor`);
}); 