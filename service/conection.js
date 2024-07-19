import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'pokemon_user',
    password: process.env.DB_PASSWORD || 'root',
    database: process.env.DB_DATABASE || 'pokemon_db',
    port: process.env.DB_PORT || 3306,
    connectTimeout: 10000
});

//testando a coneccao
(async () => {
    try{
        const conection = await pool.getConnection();
        console.log('Conectado ao banco de dados com pool de conexões');
        conection.release()
    }catch(err){
        console.error('Erro ao conectar com o banco de dados:', err.stack)
    }
})();

export default pool;
