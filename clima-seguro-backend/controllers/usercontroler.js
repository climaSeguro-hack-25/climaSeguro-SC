// controllers/user.controller.js
const User = require("../models/user");

exports.register = (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({ message: "Preencha todos os campos" });
  }

  const usuarioExistente = User.findByEmail(email);
  if (usuarioExistente) {
    return res.status(400).json({ message: "Email já cadastrado" });
  }

  const novoUsuario = User.create(email, senha);
  return res.status(201).json({ message: "Usuário cadastrado com sucesso", usuario: novoUsuario });
};
