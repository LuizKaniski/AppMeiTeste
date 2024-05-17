const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createPool({
  connectionLimit: 10,
  host: '192.168.0.12',
  user: 'root',
  password: '123456',
  port: 3306,
  database: 'appmei'
});

app.post('/login', (req, res) => {
  console.log('Requisição de login recebida:', req.body);
  const { cnpj } = req.body;
  console.log('CNPJ:', cnpj);

  const query = `SELECT Nome FROM clientes WHERE CNPJ = ?`;

  db.getConnection((err, connection) => {
    if (err) {
      console.error('Erro ao obter conexão do pool:', err);
      res.status(500).send('Erro interno do servidor');
      return;
    }

    connection.query(query, [cnpj], (err, results) => {
      connection.release();
      if (err) {
        console.error('Erro ao executar a query:', err);
        res.status(500).send('Erro interno do servidor');
        return;
      }

      if (results.length > 0) {
        const user = results[0];
        res.status(200).json({ nome: user.Nome });
      } else {
        res.status(401).send('CNPJ incorreto');
      }
    });
  });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
