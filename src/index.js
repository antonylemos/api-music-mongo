const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = 3000;

mongoose.connect("mongodb://localhost:27017/musics", { useNewUrlParser: true });

const connect = mongoose.connection;

connect.on("error", () => {
  console.log("Erro na conexão!");
});

connect.once("open", () => {
  console.log("Conectado!");
});

app.use(express.json());
app.use(require("./routes"));

app.listen(port, () => {
  console.log(`Aplicação sendo executada na porta: ${port}`);
});
