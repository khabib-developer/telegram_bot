const {Telegraf, Markup} = require('telegraf')
const path = require('path')
const mongoose = require('mongoose')
const User = require('./models/Users.js')
const State = require('./models/State.js')
const content_text = require('./public/text.js')
const keyboard = require('./public/keyboard.js')
const appDir = path.dirname(require.main.filename)
const mongoUri = URl
const bot = new Telegraf(TOKEN)

//start
bot.start(async (ctx) => {
	const candidate = await User.findOne({user_id:ctx.message.from.id})
	if(candidate) {
		return language(ctx.from.id).then(res => ctx.replyWithHTML(content_text.module.mainMenu[res], keyboard.mainMenu[res]))
	}
	return ctx.replyWithHTML(content_text.module.chooseLanguage, keyboard.langMenu.default)
})

//help
bot.help((ctx) => ctx.replyWithHTML(content_text.module.helpMsg))

//actions
bot.action('uzbek', (ctx) => menu(ctx, false))
bot.action('russian', (ctx) => menu(ctx, true))
//commands

// bot.command('language', ctx => ctx.replyWithHTML(content_text.module.mainMenu.ru, keyboard.langMenu.default))

// bot.command('admin', adminPanel)


//hears Russian
bot.hears('ℹ️ О нас', (ctx) => ctx.replyWithHTML(content_text.module.about.ru, keyboard.about['ru']))
bot.hears('💰 Курс валют', ctx => ctx.replyWithHTML(content_text.module.currency.ru, keyboard.backwards['ru']))

bot.hears('✍️ Регистрация', async (ctx) => {
	const candidate = await User.findOne({user_id:ctx.from.id})
	if(candidate) {
		return ctx.replyWithHTML(content_text.module.afterAuth.ru,keyboard.mainMenu)
	}
	return ctx.replyWithHTML(content_text.module.aboutRegistration.ru,keyboard.signUp.ru)
})
bot.hears('Пройти регистрацию', async ctx => {
	setState(ctx.from.id, 'name')
	ctx.replyWithHTML(content_text.module.name.ru, keyboard.backwards.ru)
})

bot.hears('👤 Сменить имя', async (ctx) => {
	const user = await User.findOne({user_id:ctx.from.id})
	setState(ctx.from.id, 'editName')
	ctx.replyWithHTML(content_text.module.editName.ru(user['name']),keyboard.backwards.ru)
})
bot.hears('☎️ Сменить номер', async (ctx) => {
	const user = await User.findOne({user_id:ctx.from.id})
	ctx.replyWithHTML(content_text.module.editNumber.ru(user['name'],user['phone']),keyboard.backwards.ru)
	setState(ctx.from.id, 'editNumber')
})
bot.hears('📍 Изменить регион', async (ctx) => {
	const user = await User.findOne({user_id:ctx.from.id})
	setState(ctx.from.id, 'editRegion')
	ctx.replyWithHTML(content_text.module.editRegion.ru(user['region']),keyboard.regions.ru)
})
bot.hears('🔄 Изменить вид деятельности', async (ctx) => {
	const user = await User.findOne({user_id:ctx.from.id})
	setState(ctx.from.id, 'editWork')
	ctx.replyWithHTML(content_text.module.editWork.ru(user['work']),keyboard.backwards.ru)
})
bot.hears('✍🏻 Обратная связь', ctx => {
	setState(ctx.from.id, 'feedback')
	ctx.replyWithHTML(content_text.module.feedback.ru, keyboard.backwards.ru)
})
bot.hears('⚙️ Настройки', ctx => ctx.replyWithHTML(content_text.module.settings['ru'],keyboard.settingMenu['ru']))
bot.hears('🌐 Поменять язык', ctx => ctx.replyWithHTML(content_text.module.editLanguage.ru,keyboard.langMenu.ru))
bot.hears('🇷🇺 Русский', async ctx => {
	const state = await State.updateOne({user_id:ctx.from.id}, {language:true})
	ctx.reply(content_text.module.editLang['ru'], keyboard.mainMenu['ru'])
})
bot.hears('🇺🇿 O`zbekcha', async ctx => {
	const state = await State.updateOne({user_id:ctx.from.id}, {language:false})
	ctx.reply(content_text.module.editLang['uz'], keyboard.mainMenu['uz'])
})

bot.hears('⬅️ Главное меню', async ctx => {
	setState(ctx.from.id, false)
	const isUser = await User.findOne({user_id:ctx.from.id})
	ctx.replyWithHTML('⚙️ Настройки', isUser?keyboard.mainMenu['ru']:keyboard.registrationMenu['ru'])
})

//hears Uzbek
bot.hears('ℹ️ Biz haqimizda', (ctx) => ctx.replyWithHTML(content_text.module.about.uz,keyboard.about['uz']))
bot.hears('💰 Valyutalar kursi', ctx => ctx.replyWithHTML(content_text.module.currency.uz, keyboard.backwards['uz']))

bot.hears("✍ Ro'yxatdan o'tish", async (ctx) => {
	const candidate = await User.findOne({user_id:ctx.from.id})
	if(candidate) {
		return ctx.replyWithHTML(content_text.module.afterAuth.uz,keyboard.mainMenu.uz)
	}
	return ctx.replyWithHTML(content_text.module.aboutRegistration.uz,keyboard.signUp.uz)
})
bot.hears("Ro'yxatdan o'tish", ctx => {
	setState(ctx.from.id, 'name')
	ctx.replyWithHTML(content_text.module.name.uz, keyboard.backwards.uz)
})

bot.hears('⚙️ Sozlamalar', ctx => {
	ctx.replyWithHTML(content_text.module.settings['uz'],keyboard.settingMenu['uz'])
})

bot.hears("👤 Ismni o'gartirish", async (ctx) => {
	const user = await User.findOne({user_id:ctx.from.id})
	setState(ctx.from.id, 'editName')
	ctx.replyWithHTML(content_text.module.editName.uz(user['name']),keyboard.backwards.uz)
})
bot.hears("☎️ Raqamni o'zgartirish", async (ctx) => {
	const user = await User.findOne({user_id:ctx.from.id})
	ctx.replyWithHTML(content_text.module.editNumber.uz(user['name'],user['phone']),keyboard.backwards.uz)
	setState(ctx.from.id, 'editNumber')
})
bot.hears("📍 Shaharni o'zgartirish", async (ctx) => {
	const user = await User.findOne({user_id:ctx.from.id})
	setState(ctx.from.id, 'editRegion')
	ctx.replyWithHTML(content_text.module.editRegion.uz(user['region']),keyboard.regions.uz)
})
bot.hears("🌐 Tilni o'zgartirish", (ctx) => ctx.replyWithHTML(content_text.module.editLanguage.uz,keyboard.langMenu.uz))

bot.hears("🔄 Faoliyat turini o'zgartirish", async (ctx) => {
	const user = await User.findOne({user_id:ctx.from.id})
	setState(ctx.from.id, 'editWork')
	ctx.replyWithHTML(content_text.module.editWork.uz(user['work']),keyboard.backwards.uz)
})

bot.hears("✍🏻 Biz bilan bog'lanish", ctx => {
	setState(ctx.from.id, 'feedback')
	ctx.replyWithHTML(content_text.module.feedback.uz, keyboard.backwards.uz)
})

bot.hears('⬅️ Bosh sahifa', async ctx => {
	const isUser = await User.findOne({user_id:ctx.from.id})
	setState(ctx.from.id, false)
	ctx.replyWithHTML('⚙️ Sozlamalar', isUser?keyboard.mainMenu['uz']:keyboard.registrationMenu['uz'])
})


//admin hears 

bot.hears('Пользователи', async ctx => {
	const users = await User.find({})
	
	isAdmin(ctx.from.id)
	.then(res => {
		if(res) {
			try {
				ctx.replyWithHTML(users.map(e => 'id: '+e.user_id+' name: '+e.name+', username: @'+e.username).join("\n"), keyboard.adminMenu)
			} catch(e) {
				console.log('owibka', e);
			}
			
		} else {
			ctx.replyWithHTML('access denied')
		}
	})
})

bot.hears('Рассылка', ctx => {
	isAdmin(ctx.from.id)
	.then(res => {
		if(res) {
			ctx.replyWithHTML('Рассылка', keyboard.dispatchMenu)
		} else {
			ctx.replyWithHTML('access denied')
		}
	})
})

bot.hears('Отправить всем', ctx => {
	isAdmin(ctx.from.id)
	.then(res => {
		if(res) {
			setState(ctx.from.id, 'sendAll')
			ctx.replyWithHTML(content_text.module.same,keyboard.adminMenu.ru)
		} else {
			ctx.replyWithHTML('access denied')
		}
	})
})
bot.hears('Фильтровать', ctx => {
	isAdmin(ctx.from.id)
	.then(res => {
		if(res) {
			ctx.replyWithHTML('Выберите регион', keyboard.adminRegion)
			setState(ctx.from.id, 'sendWithFilter')
		} else {
			ctx.replyWithHTML('access denied')
		}
	})
})
bot.hears('Отправить юзеру', ctx => {
	isAdmin(ctx.from.id)
	.then(res => {
		if(res) {
			ctx.replyWithHTML(content_text.module.admin.writeId, keyboard.adminBack)
			setState(ctx.from.id, 'sendToUser')
		} else {
			ctx.replyWithHTML('access denied')
		}
	})
})
bot.hears('⬅️ админ меню', ctx => {
	setState(ctx.from.id, false)
	ctx.reply('админ меню', keyboard.adminMenu)
})

//sticker
// bot.on('sticker', (ctx) => ctx.replyWithHTML('ya ne ponimayu stickerov'))


// functions
const isAdmin = async user_id => {
	const admin = await User.findOne({user_id})
	if(admin) {
		if(admin.admin) {
			return true
		} else {
			return false
		}
	}
	return false
}

const isRegion = reg => {
	let b = false
	keyboard.keys.forEach(el => {
		if(el.indexOf(reg) !== -1) {
			return b = true
		}
	})
	return b
}	
const isId = id => {
	if(id.substr(0,3) === 'id:') {
		return true
	}
	return false
}
const adminPanel = async ctx => {
	isAdmin(ctx.from.id)
	.then(res => {
		res?ctx.replyWithHTML(content_text.module.admin.adminPanel, keyboard.adminMenu):ctx.replyWithHTML('access denied')
	})
}

bot.command('admin', adminPanel)


const defaultMsg = async (ctx) => {
	if(ctx.update.message.chat.type === 'group') {
		if(ctx.update.message.reply_to_message&&ctx.update.message.reply_to_message.from.username === 'JubaAdsBot') {
			const msg = ctx.update.message.reply_to_message.text
			const user_id = msg.substring(3, msg.indexOf(','))
			const user = await User.findOne({user_id}) 
			if(user) {
				ctx.telegram.sendCopy(user_id, ctx.update.message)
			}
		}
	} else {
		const state = await State.findOne({user_id:ctx.from.id})
		const user = await User.findOne({user_id:ctx.message.from.id})
		switch (state.position) {
			case 'name':
				setState(ctx.from.id, 'phone', {id:ctx.from.id,username:ctx.from.username,name:ctx.message.text})
				language(ctx.from.id).then(res => ctx.replyWithHTML(content_text.module.number[res]))
				break;
			case 'phone':
				setState(ctx.from.id, 'region', {...state.userData,phone:ctx.message.text})
				language(ctx.from.id).then(res => ctx.replyWithHTML(content_text.module.region[res],keyboard.regions[res]))
				break;
			case 'region':
				setState(ctx.from.id, 'work',{...state.userData,region:ctx.message.text})
				language(ctx.from.id).then(res => ctx.replyWithHTML(content_text.module.work[res],keyboard.backwards[res]))
				break;
			case 'work':
				setState(ctx.from.id)
				ctx.telegram.sendMessage(-1001364878996,content_text.module.admin.msgToChannel({...state.userData,work:ctx.message.text}))
				.then(res => {
					if(register({...state.userData,work:ctx.message.text,message_id:res.message_id})) {
						language(ctx.from.id).then(res => ctx.replyWithHTML(content_text.module.success[res],keyboard.mainMenu[res]))
					} else {
						ctx.replyWithHTML(content_text.module.admin.error)
					}
				})
				
				break;
			case 'editName':
				try {
					await User.updateOne({user_id:ctx.message.from.id},{name:ctx.message.text})
					ctx.telegram.editMessageText(-1001364878996,+user.message_id,false,
						content_text.module.admin.msgToChannel({...user._doc,id:ctx.message.from.id,name:ctx.message.text}))
					language(ctx.from.id).then(res => ctx.replyWithHTML(content_text.module.ready[res], keyboard.settingMenu[res]))
					setState(ctx.from.id, false)
				} catch(e) {
					console.log(e);
				}
				break;
			case 'editNumber':
				try {
					await User.updateOne({user_id:ctx.message.from.id},{phone:ctx.message.text})
					ctx.telegram.editMessageText(-1001364878996,+user.message_id,false,
						content_text.module.admin.msgToChannel({...user._doc,id:ctx.message.from.id,phone:ctx.message.text}))
					language(ctx.from.id).then(res => ctx.replyWithHTML(content_text.module.ready[res], keyboard.settingMenu[res]))
					setState(ctx.from.id, false)
				} catch(e) {
					console.log(e);
				}
				break;
			case 'editRegion':
				try {
					await User.updateOne({user_id:ctx.message.from.id},{region:ctx.message.text})
					ctx.telegram.editMessageText(-1001364878996,+user.message_id,false,
						content_text.module.admin.msgToChannel({...user._doc,id:ctx.message.from.id,region:ctx.message.text}))
					language(ctx.from.id).then(res => ctx.replyWithHTML(content_text.module.ready[res], keyboard.settingMenu[res]))
					setState(ctx.from.id, false)
				} catch(e) {
					console.log(e);
				}
				break;
			case 'editWork':
				try {
					await User.updateOne({user_id:ctx.message.from.id},{work:ctx.message.text})
					ctx.telegram.editMessageText(-1001364878996,+user.message_id,false,
						content_text.module.admin.msgToChannel({...user._doc,id:ctx.message.from.id,work:ctx.message.text}))
					language(ctx.from.id).then(res => ctx.replyWithHTML(content_text.module.ready[res], keyboard.settingMenu[res]))
					setState(ctx.from.id, false)
				} catch(e) {
					console.log(e);
				}
				break;
			case 'sendAll':
				try {
					const users = await User.find({})
					users.forEach(el => {
						ctx.telegram.sendCopy(el.user_id, ctx.message)
					});
					setState(ctx.from.id, false)

				} catch(e) {
					console.log(e);
				}
				break;
			case 'sendWithFilter':
				try {
					const state = await State.findOne({user_id:ctx.from.id})
					if(isRegion(ctx.message.text)) {
						const ids = await User.find({region:ctx.message.text})
						await State.updateOne({user_id:ctx.from.id}, {ids})
						ctx.replyWithHTML(content_text.module.same, keyboard.adminBack)
					} else {
						if(state.ids.length !== 0) {
							state.ids.forEach(el => {
								ctx.telegram.sendCopy(el.user_id, ctx.message)
							});
							ctx.replyWithHTML('Рассылка', keyboard.dispatchMenu)
							await State.updateOne({user_id:ctx.from.id}, {ids:null})
							setState(ctx.from.id, false)
						} else {
							ctx.replyWithHTML(content_text.module.admin.noUser,keyboard.dispatchMenu)
						}
					}
				} catch(e) {
					console.log(e);
				}
				break;
			case 'sendToUser':
				try {
					const msg = ctx.message.text
					if(isId(msg)) {
						const identificator = msg.substr(3, msg.length)
						const user = await User.findOne({user_id:identificator})
						if(user) {
							await State.updateOne({user_id:ctx.from.id}, {identificator})
							ctx.replyWithHTML(content_text.module.same, keyboard.adminBack)
						} else {
							ctx.replyWithHTML(content_text.module.admin.noUser2, keyboard.dispatchMenu)
						}
					} else {
						const state = await State.findOne({user_id:ctx.from.id})
						if(state.identificator) {
							ctx.telegram.sendCopy(state.identificator, ctx.message)
							ctx.replyWithHTML('Рассылка', keyboard.dispatchMenu)
							setState(ctx.from.id, false)
							await State.updateOne({user_id:ctx.from.id}, {identificator:null})
						} else {
							ctx.replyWithHTML(content_text.module.noUser2, keyboard.dispatchMenu)
						}
					}
				} catch(e) {
					console.log(e);
				}
				break;
			case 'feedback': 
				try {
					ctx.telegram.sendMessage(-597206317, '🛑 '+ctx.from.id + ', name:' + ctx.update.message.from.first_name)
					ctx.telegram.forwardMessage(-597206317, ctx.from.id, ctx.message.message_id)
				} catch(e) {
					console.log(e);
				}
			default:
				// ctx.replyWithHTML(
				// ` ${ctx.from.first_name}, Я выполняю следующие запросы:
				// /language: `
				// )
				break;
		}
	}
	
}

const setState = async (user_id, position = false, userData = false) => {
 	await State.updateOne({user_id}, {position, userData})
}

const register = async (client) => {
	const candidate = await await User.findOne({user_id:client.id})
	if(candidate) {
		return false
	} else {
		const user = new User({
			user_id:client.id, 
			username:client.username,
			name:client.name,
			region:client.region,
			phone:client.phone,
			work:client.work,
			message_id:client.message_id
		})
		await user.save()
		return true
	}
}


const language = async user_id => {
	const a = await State.findOne({user_id})
	return a.language?'ru':'uz'
}
const menu = async (ctx, lang) => {
	let text = lang?content_text.module.welcome.ru:content_text.module.welcome.uz
	const user = await State.findOne({user_id:ctx.from.id})
	if(!user) {
		const state = new State({
			user_id:ctx.from.id,
			language: lang,
		})
		await state.save()
	} else {
		await State.updateOne({user_id:ctx.from.id}, {language:lang})
	}
	const candidate = await User.findOne({user_id:ctx.from.id})
	const mainMenu = candidate?keyboard.mainMenu[lang?'ru':'uz']:keyboard.registrationMenu[lang?'ru':'uz']
	return await ctx.replyWithHTML(text, mainMenu)
}

//eventListener


bot.on('message', defaultMsg)
 
async function start() {
	try {
		await mongoose.connect(mongoUri, {
			useNewUrlParser:true,
			useUnifiedTopology:true,
			useCreateIndex:true
		})
		await bot.launch(3000)
		console.log('Bot has been started on port 3000')
	} catch(e) {
		console.log('Server error', e.message);
		process.exit(1)
	}
}
//start with mongo
start()

process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))