// import express from 'express'
import TelegramBot from 'node-telegram-bot-api'
import { config } from 'dotenv'
import { TEXT, VOICE, PHOTO, STICKER, DOCUMENT } from './types.js'
import { onText, onVoice, onPhoto, onSticker, onDocument } from './logic.js'
import parsing from './parsing.js'

// CONFIG
config({ path: './.env' })

// VARS
// const app = express()
// const PORT = process.env.PORT || 5000
const TOKEN = process.env.BOT_TOKEN
const ERR_STICKER = process.env.ERR_STICKER

// BOT
const bot = new TelegramBot(TOKEN, { polling: true })

bot.on('message', (msg, { type }) => {
  console.log(type)
  switch (type) {
    case TEXT:
      return onText(bot, msg)
    case VOICE:
      return onVoice(bot, msg)
    case PHOTO:
      return onPhoto(bot, msg)
    case STICKER:
      return onSticker(bot, msg)
    case DOCUMENT:
      return onDocument(bot, msg)
    default:
      bot.sendSticker(msg.chat.id, ERR_STICKER)
  }
})
bot.on('edited_message', msg => {
  bot.sendMessage(msg.chat.id, `Пожалуйста, используйте новый запрос.`)
})
bot.on('callback_query', q => {
  // console.log(q)
  const data = parsing(q.data)
  console.log(data)
  bot.sendMessage(q.message.chat.id, 'Ой, простите!')
})

// SERVER
// app.listen(PORT, () => console.log(`Server run on port: ${PORT}`))
