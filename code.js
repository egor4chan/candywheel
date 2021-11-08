const TelegramBot = require('node-telegram-bot-api');


const token = '2065226304:AAH2gjhFwlIOalWRMBENZOzN0ZD9oYgDhYw';
const bot = new TelegramBot(token, { polling: true });

var codes_list = ['777070']


function createCode() {
	const code = getRandomInt(1000000);
	document.getElementById('reg').innerHTML = code;
	codes_list.push(code)
}


var users = [] // Список IDs

function main() {	
	bot.onText(/\/reg (.+)/, (msg, match) => {


		const chatId = msg.chat.id
		const message = match[1] // Сообщение которое получили после /reg


		if (codes_list.indexOf(message) != -1) { // Если ID нет в списке
			users.push(chatId) // Добавляем в список
			console.log('Новый пользователь: ', String(chatId))
			bot.sendMessage(chatId, 'Вы успешно зарегистрированы!') }


		else if(codes_list.indexOf(message) == -1)  { // Если ID есть в списке
			bot.sendMessage(chatId, 'Ошибка сессии! Неправильно введен код!') // Делаем вход
		}
	})
}