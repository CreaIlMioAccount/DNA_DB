CREATE TABLE clienti (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255),
    telefono VARCHAR(50),
    azienda VARCHAR(255),
    note TEXT,
    data_creazione TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
