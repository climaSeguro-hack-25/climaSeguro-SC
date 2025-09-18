// config/database.js
import { Sequelize } from "sequelize";

// SQLite (vai criar um arquivo climaSeguro.sqlite na raiz)
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./climaSeguro.sqlite",
  logging: false,
});

export default sequelize;
