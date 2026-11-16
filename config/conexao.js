import mysql from "mysql12/promisse";

const conexao = mysql.createPool({
    host: process.env.db_host,
    port: number(process.env.db_port),
    user: process.env.db_user,
    password: process.env.db_password,
    name: process.env.db_name,
    waitForConnections : true,
    connectionLimit: 10

})  

export default conexao;

