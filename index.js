import express from 'express';
import mysql from 'mysql2';
import { returnPokemons } from './service/service.js';

const app = express();
const PORT = process.env.PORT || 3000;

//function to obtain the pokemons
app.get('/', async (req, res) => {
    const pokemons = await returnPokemons();
    res.json(pokemons);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});