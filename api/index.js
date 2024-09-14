const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const dataFilePath = path.join(__dirname, "data.json");

// Функция для загрузки данных из файла
function loadData() {
    if (fs.existsSync(dataFilePath)) {
        const rawData = fs.readFileSync(dataFilePath);
        return JSON.parse(rawData);
    }
    return [];
}

// Загрузка данных при старте сервера
let characters = loadData();

app.get("/api", function (_, res) {
    res.send(characters);
});

app.listen(3000, function () {
    console.log("Сервер ожидает подключения...");
});

module.exports = app