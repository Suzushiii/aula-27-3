/* eslint-disable max-len */
const validateData = (request, response, next) => {
  const { body } = request;
  if (body.data_atualizado == undefined || body.data_atualizado === '') {
    return response.status(400)
        .json({ message: 'O campo "data_atualizado" é obrigatório' });
  }
  if (isNaN(parseInt(body.data_atualizado)) || parseInt(body.data_atualizado) < 0 ||
    parseInt(body.data_atualizado) > 130) {
    return response.status(400)
        .json({ message: 'O campo "data_atualizado" deve seguir o padrão de datas' });
  }
  next();
};
module.exports = { validateData };
