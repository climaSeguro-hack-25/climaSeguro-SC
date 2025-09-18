// controllers/userController.js
import { create, findAll, findById, update, delete as deleteUserModel } from "../models/User";

export function createUser(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Email e senha são obrigatórios." });
  }

  const user = create({ email, password });
  res.status(201).json(user);
}

export function getUsers(req, res) {
  res.json(findAll());
}

export function getUserById(req, res) {
  const user = findById(req.params.id);
  if (!user) return res.status(404).json({ message: "Usuário não encontrado" });
  res.json(user);
}

export function updateUser(req, res) {
  const user = update(req.params.id, req.body);
  if (!user) return res.status(404).json({ message: "Usuário não encontrado" });
  res.json(user);
}

export function deleteUser(req, res) {
  const deleted = deleteUserModel(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Usuário não encontrado" });
  res.json({ message: "Usuário deletado com sucesso" });
}
