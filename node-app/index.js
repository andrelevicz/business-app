const Client = require('pg').Client;
const cliente = new Client({

    user: "postgres",
    password: "@Levicz101",
    host: "127.0.0.1",
    port: 5432,
    database: "meu_banco"
})


// cliente.connect()
// cliente.query("select * from usuarios").then(results => {
//     const resultado = results.rows 
//     console.table(resultado)
// })
// .finally(() => cliente.end())

async function getUsers() {

    try {
        console.log("iniciando a conexao")
        await cliente.connect()
        console.log("Conexao bem sucedida!")
        const resultado  = await cliente.query("select * from usuarios")
        console.table(resultado.rows)
    }
    catch(ex) {
        console.log("ocorreu um erro" + ex)
    }
 
 finally{
    await cliente.end()
    console.log("Cliente desconectado")
}
}