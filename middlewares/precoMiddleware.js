/* eslint-disable max-len */
const validatePreco = (request, response, next) => {
  const { body } = request;
  if (body.preco == undefined || body.preco === '') {
    return response.status(400)
        .json({ message: 'O campo "preco" é obrigatório' });
  }
  if (isNaN(parseInt(body.preco)) || parseInt(body.preco) < 0 ||
      parseInt(body.preco) > 130) {
    return response.status(400)
        .json({ message: 'O campo "preco" deve seguir o padrão' });
  }
  next();
};
module.exports = { validatePreco };
