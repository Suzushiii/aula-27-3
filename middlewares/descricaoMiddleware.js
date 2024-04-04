const validateDescition = (request, response, next) => {
  const { body } = request;
  if (body.desction == undefined) {
    return response.status(400)
        .json({ message: 'O campo "descricao" é obrigatório' });
  }
  if (body.sobrenome === '') {
    return response.status(400)
        .json({ message: 'O campo "descricao" não pode ser vazio' });
  }
  next();
};
module.exports = { validateDescition };
