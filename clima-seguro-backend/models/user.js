// models/user.js

// Por enquanto, simulação de "tabela"
let usuarios = [];

class User {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  static findByEmail(email) {
    return usuarios.find(user => user.email === email);
  }

  static create(email, senha) {
    const novoUsuario = new User(email, senha);
    usuarios.push(novoUsuario);
    return novoUsuario;
  }
}

module.exports = User;
