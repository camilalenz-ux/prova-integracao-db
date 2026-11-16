import mysql2 from "mysql2/promisse";

const conexao = mysql2.createPool({
    host: process.env.db_host,
    port: number(process.env.db_port),
    user: process.env.db_user,
    password: process.env.db_password,
    name: process.env.db_name,
    waitForConnections : true,
    connectionLimit: 10

})  

export default conexao;

