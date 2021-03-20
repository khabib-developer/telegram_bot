const content_text = {
	welcome: {
		ru:'Добро пожаловать в Telegram-бот digital-агентства <b>JUBA Marketing</b>',
		uz:'<b>JUBA Marketing</b> digital agentligining Telegram botiga xush kelibsiz'
	},
	mainMenu:{
		ru:'Главное меню',
		uz:'Bosh sahifa'
	},
	chooseLanguage:"Tilni tanlang | Выберите язык",
	helpMsg: 'Help message',
	afterAuth: {
		ru:'Вы уже зарегистрированы✅\nИзменить свои данные Вы можете в разделе ⚙️ Настройки.',
		uz:"Siz ro'yxatdan o'tgansiz✅\nMa'lumotlaringizni ⚙️ Sozlamalar bo'limida o'zgartirishingiz mumkin"
	},
	aboutRegistration:{
		ru:'В данном разделе Вам нужно пройти регистрацию, оставив свои данные, чтобы мы смогли с вами связаться в дальнейшем.',
		uz:"Ushbu bo'limda, kelasida siz bilan bog'lanishimiz uchun, ma'lumotlaringizni qoldirib ro'yxatdan o'tishingiz kerak."
	},
	name:{
		ru:'<b>Напишите ваше Ф.И.О:</b>',
		uz:"<b>To'liq ismingizni yozing:</b>"
	},
	number:{
		ru:"<b>Отправьте номер телефона по формату \n(+998901234567:)</b>",
		uz:"<b>Telefon raqamingizni quyidagi ko'rinishda yuboring \n(+998901234567):</b>"
	},
	region:{
		ru:"<b>Выберите название региона, где ведете свою деятельность:</b>",
		uz:"<b>Faoliyat yuritayotgan hudud nomini tanlang:</b>"
	},
	work:{
		ru:"<b>Напишите вид деятельности:</b>",
		uz:"<b>Faoliyatingiz turini yozing:</b>"
	},
	success: {
		ru:`<b>Вы успешно прошли регистрацию!✅\nЕсли Вы неправильно ввели данные, Вы можете исправить их в разделе ⚙️ Настройки.</b>`,
		uz:`<b>Siz muvaffaqiyatli ro'yxatdan o'tdingiz! ✅\nAgar siz ma'lumotlarni noto'g'ri kiritgan bo'lsangiz, ularni ⚙️ Sozlamalar bo'limida to'g'rilashingiz mumkin.</b>`
	},
	settings:{
		ru:'⚙️ Настройки',
		uz:'⚙️ Sozlamalar'
	},
	editLanguage: {
		ru:'Ваш текущий язык: Русский 🇷🇺',
		uz:"Sizning joriy tanlangan tilingiz: 🇺🇿O'zbekcha"
	},
	feedback:{
		ru:'<b>Напишите свое обращение:</b>',
		uz:'Murojaatingizni yozing'
	},
	editName: {
		ru:name => `<b>Введите Ф.И.О.:\nВаше текущее имя: ${name}</b>`,
		uz:name => `<b>To'liq ismingizni yozing:\nHozirgi ismingiz: ${name}</b>`
	},
	editNumber: {
		ru: (name, number) => `<b>Какой у Вас номер, ${name}?\n Отправьте или введите ваш номер телефона в виде:</b>\n<i>+998 ** *** ****</i>\n\n<b>Ваш текущий номер:</b> <i>${number}</i>`,
		uz: (name, number) => `<b>${name}, telefon raqamingizni quyidagi ko'rinishda yuboring:</b>\n<i>+998 ** *** ****</i>\n\n<b>Hozirgi raqamingiz:</b> <i>${number}</i>`,
	},
	editRegion: {
		ru:region => `<b>В каком городе Вы живёте?\nВаш текущий город: ${region}\nПожалуйста, выберите город:</b>`,
		uz:region => `<b>Siz qaysi shaharda yashaysiz?\nAvval tanlangan shahar: ${region}\nIltimos, shahringizni tanlang:</b>`
	},
	editWork:{ 
		ru:work => `<b>Введите вид деятельности:\nВаш текущий вид деятельности: ${work}</b>`,
		uz:work => `<b>Faoliyat turingizni kiriting:\nJoriy faoliyat turi: ${work}</b>`
	},
	editLang: {
		ru:"Вы выбрали Русский🇷🇺",
		uz:"Siz 🇺🇿 O'zbek tilini tanladingiz!"
	},
	ready: {
		ru:'Готово✅',
		uz:'Bajarildi✅'
	},

	currency: {
		ru: 'Данный раздел на разработке⚙️',
		uz: "Ushbu bo'lim sozlanmoqda⚙️"
	},

	same: 'Напишите текст, который хотите отправить ✍🏻:',

	admin: {
		region: 'Выберите регион',
		writeId: 'Напишите ID пользователя в этом формате \nid:12345678',
		adminPanel: 'Вы перешли в админ панель',
		msgToChannel: user => {
			return `id:${user.id};\nusername: @${user.username};\nимя: ${user.name};\nтелефон номер: ${user.phone};\nрегион: ${user.region};\nработа: ${user.work};`
		},
		error: 'Что то пошло не так',
		noUser: 'В этом регионе нет пользователя 🙅‍♂️',
		noUser2: 'Такого пользователя не существует 🤷🏼',
		success: 'Ваше сообщение отправлено ✅'
	},
	about: {
		ru: '<b>JUBA Marketing</b> - рекламное агентство, имеющее большой багаж опыта и креативных идей.\n\n'+
			'🗂 Наше агентство успело поработать с несколькими известными брендами и довести до успешного результата. Мы работали с такими брендами, как Booknomy, TOBB University, Chortoq, Oriat FM, Mshifo, Midea и другие. Предоставляем полный пакет услуг по Digital продвижению проектов в социальных сетях.\n\n'+
			'📊 Над реализацией ваших самых безбашенных и крутых проектов работает креативная и опытная команда специалистов, которые имеют, как минимум, 2-летний опыт в работе в Digital сфере. \n\n'+
			'<b>👥 Наша команда состоит из:</b>\n ⁃ Проект-менеджера;\n ⁃ Смм-Специалиста;\n ⁃ Дизайнера;\n ⁃ Копирайтера-переводчика;\n ⁃ Специалиста по Телеграм;\n'+
			' ⁃ IT специалиста;\n ⁃ Коммьюнити-менеджера;\n ⁃ Таргетолога. \n\n'+
			'📱Социальные  сети приобретают с каждым днем все большую популярность и у вас есть шанс стать круче ваших конкурентов. Закажите услуги Digital продвижения у действующих специалистов и получите бесплатный аудит странички вашего бизнеса и стратегию продвижения, стоимостью в 50$.',
		uz: "<b>JUBA Marketing</b> - katta tajriba va kreativ g'oyalarga ega bo'lgan zamonaviy reklama agentligi.\n\n"+
			"🗂 Agentligimiz shu paytgacha bir necha mashhur brendlar bilan ishlabgina qolmay, yuqori natija ko'rsatishga ham muvaffaq bo'ldi. Biz Booknomy, TOBB universiteti, Chortoq, Oriat FM, Mshifo, Midea kabi brendlar bilan muvaffaqiyatli hamkorlik qilganmiz. Ijtimoiy tarmoqlarda loyihalarni Raqamli targ'ib qilish bo'yicha to'liq xizmatlarni taqdim etamiz!\n\n"+
			"📊 Ushbu sohada kamida 2 yillik tajribaga ega bo'lgan kreativ va tajribali mutaxassislar jamoasi sizning har qanday loyihalaringizni amalga oshirishga yordam beradi.\n\n"+
			"<b>👥 Bizning jamoa quyidagi mutaxassislardan iborat:</b>\n ⁃ Loyiha menejeri;\n ⁃ SMM-Mutaxassisi;\n ⁃ Dizayner;\n ⁃ Kopirayter-tarjimon;n"+
			" ⁃ Telegram bo'yicha mutaxassis;\n ⁃ IT mutaxassisi;\n ⁃ Jamoa menejeri;\n ⁃ Targetolog.\n\n"+
			"📱 Ijtimoiy tarmoqlar tobora ommalashib bormoqda va sizda raqobatchilaringizdan ko'ra yaxshiroq bo'lish imkoniyati mavjud. Raqamli reklama xizmatlarini buyurtma qiling va  biznes sahifangizning auditi hamda $50 qiymatiga ega bo'lgan reklama strategiyasini bepul taqdim qilamiz!"
	}
}

exports.module = content_text