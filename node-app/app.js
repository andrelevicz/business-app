let http = require('http');
let port = 3000;
let ip = 'localhost';

let server = http.createServer((req, res) => {
    const responses = [];
    responses['/'] = "Inicio";
    console.log("Recebendo uma requisicao");
    res.end("Retorno da requisicao");
    res.end("Retorno da requisicao")
});

server.listen(port, ip, () => {
    console.log(`Servidor rodando em http://${ip}:${port}`)
    console.log("Parar o servidor com ctrl + c");
});

const axios = require('axios');

const username = 'user';
const password = 'pass';

axios.post('http://localhost:3000/api/auth', { username, password })
  .then(response => {
    const { token } = response.data;
    // salve o token em algum lugar seguro (por exemplo, no armazenamento local do navegador)
    // para que possa ser usado em futuras requisições autenticadas
  })
  .catch(error => {
    console.error(error);
  });