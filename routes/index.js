const express = require('express');
const router = express.Router();
/* const mysql = require('mysql2/promise'); */

const connection = require('../configs/dbConfiguration');
/* GET home page. */
router.get('/', async function (req, res, next) {
  const clientes = await (await connection)
      .execute('SELECT * FROM clientes');
  res.send(clientes[0]);

/* mysql.createConnection({connection
  }).then((connection) => {
    connection.query('SELECT * FROM clientes;')
        .then((result) => {
          res.send(result[0]);
        });
  });*/
});
module.exports = router;
