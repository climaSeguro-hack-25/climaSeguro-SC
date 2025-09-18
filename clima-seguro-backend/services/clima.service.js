const axios = require('axios');
const { API_KEY, BASE_URL } = require('../config/apiConfig');

exports.buscarClima = async (cidade) => {
  const url = `${BASE_URL}?q=${cidade}&appid=${API_KEY}&units=metric&lang=pt_br`;

  try {
    const resposta = await axios.get(url);
    const { name, main, weather } = resposta.data;

    return {
      cidade: name,
      temperatura: main.temp,
      descricao: weather[0].description
    };
  } catch (error) {
    throw new Error('Erro ao buscar clima: ' + error.message);
  }
};