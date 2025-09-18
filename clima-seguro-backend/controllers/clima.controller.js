const climaService = require('../services/climaService');

exports.obterClimaPorCidade = async (req, res, next) => {
  const { cidade } = req.params;
  try {
    const dadosClima = await climaService.buscarClima(cidade);
    res.json(dadosClima);
  } catch (err) {
    next(err); // vai para o middleware de erro
  }
};