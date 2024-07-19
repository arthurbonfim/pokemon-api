import express from 'express';
import cors from 'cors';
import { returnPokemons } from './service/service.js';

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

//function to obtain the pokemons
app.get('/pokemons', async (req, res) => {
    const pokemons = await returnPokemons();
    res.json(pokemons);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
