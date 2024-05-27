/* eslint-disable max-len */
const connection = require('../configs/dbConfiguration');

const findAll = async () => {
  try {
    const clientes = await connection.execute('SELECT * FROM clientes');
    return clientes;
  } catch (err) {
    console.error(err);
    return [];
  }
};

const update = async (cliente) => {
  try {
    const query = 'UPDATE clientes SET nome = ?, sobrenome = ?, email = ?, idade = ? WHERE id = ? AND idade = ?';
    const isOk = await connection.execute(query, [
      cliente.nome,
      cliente.sobrenome,
      cliente.email,
      cliente.idade,
      cliente.id,
      cliente.idade,
    ]);
    return isOk.affectedRows === 1;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const save = async (cliente) => {
  try {
    const query = 'INSERT INTO clientes(nome, sobrenome, email, idade) VALUES (?, ?, ?, ?)';
    const isOk = await connection.execute(query, [
      cliente.nome,
      cliente.sobrenome,
      cliente.email,
      cliente.idade,
    ]);
    return isOk.affectedRows === 1;
  } catch (err) {
    console.error(err);
    return false;
  }
};

const remove = async (id) => {
  try {
    const query = 'SELECT * FROM clientes WHERE id = ?';
    const cliente = await connection.execute(query, [id]);
    if (cliente.length === 0) {
      return false;
    }
    const isOk = await connection.execute('DELETE FROM clientes WHERE id = ?', [id]);
    return isOk.affectedRows === 1;
  } catch (err) {
    console.error(err);
    return false;
  }
};

module.exports = {
  findAll,
  save,
  remove,
  update,
};
