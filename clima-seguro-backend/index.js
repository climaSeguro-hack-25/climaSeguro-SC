const express = require('express');
const app = express();
const climaRoutes = require('./routes/climaRoutes');
const { errorHandler } = require('./middlewares/errorHandler');
require('dotenv').config();

app.use(express.json());

app.use('/api/clima', climaRoutes);

app.use(errorHandler); // middleware de erro

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

