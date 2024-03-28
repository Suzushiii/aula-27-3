const router = express.Router();
const mysql = require('mysql2/promise');
/* GET home page. */
router.get('/', function (req, res, next) {
  mysql.createConnection({host: 'localhost', user: 'Matheus', password: 'aula',
    database: 'trabalhos', port: 3306,
  }).then((connection) => {
    connection.query('SELECT * FROM trabalhos;')
        .then((result) => {
          res.send(result[0]);
        });
  });
});
module.exports = router;
