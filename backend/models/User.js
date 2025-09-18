// models/User.js

let users = [];
let idCounter = 1;

class User {
  constructor({ email, password }) {
    this.id = idCounter++;
    this.email = email;
    this.password = password;
    this.createdAt = new Date();
  }

  static create(data) {
    const user = new User(data);
    users.push(user);
    return user;
  }

  static findAll() {
    return users;
  }

  static findById(id) {
    return users.find(u => u.id === Number(id));
  }

  static update(id, data) {
    const user = users.find(u => u.id === Number(id));
    if (!user) return null;
    Object.assign(user, data);
    return user;
  }

  static delete(id) {
    const index = users.findIndex(u => u.id === Number(id));
    if (index === -1) return null;
    return users.splice(index, 1);
  }
}

export default User;
