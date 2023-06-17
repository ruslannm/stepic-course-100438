const http = require('http')
const { logger } = require('./logger.js')

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost`)
  logger.info(`${req.method} : ${req.url}`)
  // console.log(url.searchParams)

  /* 
    TODO: напишите обработчик запроса.
    
    1. Ответом на запрос к /?message=<text> должна быть строка <text>.
       Статус ортвета - 200 (OK)
    2. Если параметр message не задан, в ответ должна быть выведена подсказка: "Передайте строку в параметре message GET-запроса".
       Статус ответа - 400 (BAD REQUEST)

    Подсказка: используйте поле searchParams в объекте url для доступа к параметрам GET-запроса
  */
  const message = url.searchParams.get("message")
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  if (!message) {
    logger.error(`message can not be parsed from ${req.url}`)
    res.statusCode = 400
    return res.end("Передайте строку в параметре message GET-запроса")
  }
  logger.debug(`message received: ${message}`)
  res.statusCode = 200
  res.end(url.searchParams.get("message"))
});

module.exports = { server }
