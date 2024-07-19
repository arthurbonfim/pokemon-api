import pool from "./conection.js";

const returnPokemons = async () => {
    let conection;
    try{
        conection = await pool.getConnection();
        const [pokemons] = await conection.query('SELECT * FROM pokemons');
        return pokemons;
    }catch(err){
        console.error('Erro ao consultar o banco de dados:', err.stack);
        throw err;
    }finally{
        if(conection) conection.release();
    }
}

export {returnPokemons};