const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3050;

// Указываем, что статические файлы находятся в папке build
app.use(express.static(path.join(__dirname, "build")));

// Обрабатываем все запросы и возвращаем index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
