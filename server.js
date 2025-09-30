import express from "express";
import { config } from "dotenv";
import router from "./src/routes/index.routes.js"

config(); // Carrega variáveis de ambiente do arquivo .env
const port = process.env.PORT || 5000;

// Inicializa o Express
const app = express();

app.use(express.json()); // Parse corpo de JSON

app.use("/", router);
// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});