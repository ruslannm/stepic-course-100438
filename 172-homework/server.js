const http = require('http')
const path = require('path');
const fs = require('fs')

const server = http.createServer( async (req, res) => {
  const url = new URL(req.url, `http://localhost`)
  const filename = path.join(__dirname, 'public', url.pathname);
  try {
    await fs.promises.access(filename, fs.promises.constants.R_OK);
    const isFile = await fs.promises.stat(filename).then(stat => stat.isFile());
    if (!isFile) {
      throw new Error(`${filePath} is not a file`)
    }
      res.setHeader('Content-Type', 'text/plain;charset=utf-8')
      res.statusCode = 200
      fs.createReadStream(filename).pipe(res);
  } catch {
    res.statusCode = 404
    res.end('Not found')
  }
  /*
    TODO: напишите обработчик запроса.
    
    Ответом на запрос к /path/to/file-name должен быть файл, расположенный в директории /public/path/to/file-name.
    Если файл существует, то статус ответа - 200 (OK)
    Если файл не найден (или по указанному пути находится не файл, а директория), то статус ответа - 404 (NOT FOUND)

    Подсказка: используйте поле url для доступа к параметрам GET-запроса.
    Подсказка: используйте fs.access, чтобы проверить, существует ли файл?
    Подсказка: используйте fs.stat, чтобы проверить, что по указанному пути находится файл,а не директория
  */
});

module.exports = { server }


