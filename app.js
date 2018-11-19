require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const Tools = require ('./tools')

const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, {polling: true})
const gateway = Tools.gateway;
gateway.setBot(bot)
bot.on('message', (msg) => {
    const { text, chat : { id }, from : { username } } = msg;
    gateway.newEntry(text,id,username)
});