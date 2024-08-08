import mysql from 'mysql2/promise';

const pool = mysql.createPool({
    host: process.env.DB_HOST || 'monorail.proxy.rlwy.net',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'pjgfdJIZwgTZILwUNSDAqzlAAsuuEnOW',
    database: process.env.DB_DATABASE || 'railway',
    port: process.env.DB_PORT || 35133
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
