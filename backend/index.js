import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/userRoutes.js";

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use("/api", userRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
