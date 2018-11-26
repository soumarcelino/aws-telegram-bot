require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const Modules = require ('./Modules')

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {polling: true})
const gateway = Modules.gateway;
gateway.setBot(bot)
bot.on('message', (msg) => {
    const { text, chat : { id }, from : { username } } = msg;
    gateway.newEntry(text,id,username)
});