exports.errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ erro: err.message || 'Erro interno no servidor' });
};
