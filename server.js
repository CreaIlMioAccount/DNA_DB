const express = require('express');
const DNA = require('./core/DNA');

const app = express();

app.use(express.json());

app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        service: 'DNA_DB',
        version: '0.9'
    });
});

app.get('/api/clienti', async (req, res) => {

    try {

        const clienti = await DNA.find('clienti');

        res.json(clienti);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

app.post('/api/clienti', async (req, res) => {

    try {

        const cliente = await DNA.insert(
            'clienti',
            req.body
        );

        res.status(201).json(cliente);

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

});

app.listen(3000, () => {
    console.log('DNA_DB Online');
});