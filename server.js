const express = require('express');

const app = express();

app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        service: 'DNA_DB',
        version: '0.1'
    });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`DNA_DB attivo sulla porta ${PORT}`);
});
