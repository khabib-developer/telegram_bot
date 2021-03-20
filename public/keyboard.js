const {Markup} = require('telegraf')

const keyboard = {
	keys: [
		['Ташкент', 'Ташкентская область', 'Андижан'],
		['Наманган', 'Фергана', 'Сырдарья'],
		['Джизак', 'Сурхандарья', 'Кашкадарья'],
		['Самарканд', 'Навоий', 'Бухара'],
		['Хорезм', 'Каракалпакстан'],	
		['Toshkent', 'Toshkent vil', 'Andijon'],
		['Namangan', "Farg'ona", 'Sirdaryo'],
		['Jizzax', 'Surxondaryo', 'Qashqadaryo'],
		['Samarqand', 'Navoiy', 'Buxoro'],
		['Xorazm', "Qoraqalpog'istion"],
	],
	regions: {
		ru: Markup.keyboard([
				['Ташкент', 'Ташкентская область', 'Андижан'],
				['Наманган', 'Фергана', 'Сырдарья'],
				['Джизак', 'Сурхандарья', 'Кашкадарья'],
				['Самарканд', 'Навоий', 'Бухара'],
				['Хорезм', 'Каракалпакстан'],	
				['⬅️ Главное меню']
			]).resize().oneTime(),
		uz: Markup.keyboard([
				['Toshkent', 'Toshkent vil', 'Andijon'],
				['Namangan', "Farg'ona", 'Sirdaryo'],
				['Jizzax', 'Surxondaryo', 'Qashqadaryo'],
				['Samarqand', 'Navoiy', 'Buxoro'],
				['Xorazm', "Qoraqalpog'istion"],
				['⬅️ Bosh sahifa']
			]).resize().oneTime()
	},
	mainMenu: {
		ru: Markup.keyboard([
			['💰 Курс валют', 'ℹ️ О нас'], 
			['✍🏻 Обратная связь','⚙️ Настройки']
		]).resize().oneTime(),
		uz: Markup.keyboard([
			['💰 Valyutalar kursi', 'ℹ️ Biz haqimizda'], 
			["✍🏻 Biz bilan bog'lanish",'⚙️ Sozlamalar']
		]).resize().oneTime(),
	},
	registrationMenu: {
		ru: Markup.keyboard([
			['✍️ Регистрация'], 
			['💰 Курс валют','ℹ️ О нас']
		]).resize().oneTime(),
		uz: Markup.keyboard([
			["✍ Ro'yxatdan o'tish"], 
			['💰 Valyutalar kursi','ℹ️ Biz haqimizda']
		]).resize().oneTime()
	},
	settingMenu: {
		ru: Markup.keyboard([
			['👤 Сменить имя', '☎️ Сменить номер'],
			['📍 Изменить регион', '🌐 Поменять язык'],
			['🔄 Изменить вид деятельности'],
			['⬅️ Главное меню']
		]).oneTime().resize(),
		uz: Markup.keyboard([
			["👤 Ismni o'gartirish", "☎️ Raqamni o'zgartirish"],
			["📍 Shaharni o'zgartirish", "🌐 Tilni o'zgartirish"],
			["🔄 Faoliyat turini o'zgartirish"],
			['⬅️ Bosh sahifa']
		]).oneTime().resize()
	},

	about: {
		ru:Markup.inlineKeyboard([
			Markup.button.url('Заказать', 'https://t.me/adm_juba'),
		]),
		uz:Markup.inlineKeyboard([
			Markup.button.url('Buyurtma berish', 'https://t.me/adm_juba'),
		]),
	},

	langMenu: {
		default:Markup.inlineKeyboard([
			Markup.button.callback('🇺🇿 O`zbekcha', 'uzbek'),
		  	Markup.button.callback('🇷🇺 Русский', 'russian')
		]),
		ru: Markup.keyboard([['🇺🇿 O`zbekcha'],['⬅️ Главное меню']]).oneTime().resize(),
		uz: Markup.keyboard([['🇷🇺 Русский'],['⬅️ Bosh sahifa']]).oneTime().resize()
	},
	signUp: {
		ru:Markup.keyboard(['Пройти регистрацию']).oneTime().resize(),
		uz:Markup.keyboard(["Ro'yxatdan o'tish"]).oneTime().resize(),
	},
	backwards: {
		ru: Markup.keyboard(['⬅️ Главное меню']).oneTime().resize(),
		uz: Markup.keyboard(['⬅️ Bosh sahifa']).oneTime().resize(),
	},

	dispatchMenu: Markup.keyboard([
		['Отправить всем', 'Фильтровать', 'Отправить юзеру'],
		['⬅️ админ меню']
	]).resize(),
	adminBack: Markup.keyboard(['⬅️ админ меню']).resize().oneTime(),
	adminMenu: Markup.keyboard([
			['Пользователи'], 
			['Рассылка '],
			['⬅️ Главное меню ']
		]).oneTime().resize(),
	adminRegion: Markup.keyboard([
		['Ташкент', 'Ташкентская область', 'Андижан'],
		['Наманган', 'Фергана', 'Сырдарья'],
		['Джизак', 'Сурхандарья', 'Кашкадарья'],
		['Самарканд', 'Навоий', 'Бухара'],
		['Хорезм', 'Каракалпакстан'],	
		['Toshkent', 'Toshkent vil', 'Andijon'],
		['Namangan', "Farg'ona", 'Sirdaryo'],
		['Jizzax', 'Surxondaryo', 'Qashqadaryo'],
		['Samarqand', 'Navoiy', 'Buxoro'],
		['Xorazm', "Qoraqalpog'istion"],
	])
}

module.exports = keyboard