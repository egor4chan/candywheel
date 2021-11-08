const http = require('http');

http.createServer(requestListener: (req, res) => {
	res.end(chunk: 'Hello Node!')})




//console.log('Расширение файла: ', path.extname(__filename))
//console.log(path.join(__dirname, 'server', 'index.html')) // работа с путями

//fs.mkdir(path.join(__dirname, 'test'), (err) => {  СОЗДАНИЕ ПАПКИ
//	if (err) {
//		throw err;
//	}
//	console.log('Папка создана успешно!')
//})

//const filePath = path.join(__dirname, 'test', 'text.txt') 
//fs.writeFile(filePath, 'Hello, this!', err => {
//	if (err) {           СОЗДАНИЕ И РЕДАКТИРОВАНИЕ ФАЙЛА
//		throw err;
//	}
//	console.log('Файл создан!');
//})

//fs.readFile(filePath, 'utf-8', (err, content) => {
//	if (err) {
//		throw err   ЧТЕНИЕ ФАЙЛА
//	}
//	const data = Buffer.from(content)
//	console.log(data.toString())
//})