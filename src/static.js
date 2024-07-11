// берём Express
const express = require('express');
const path = require('path')

// создаём Express-приложение
const app = express();

const staticPath = path.join(__dirname, '../public')

console.log(staticPath)

app.use(express.static(staticPath))

// создаём маршрут для главной страницы
// http://localhost:8080/

/*app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});*/ 

// запускаем сервер на порту 8080
app.listen(8080);
// отправляем сообщение
console.log('Сервер стартовал!');