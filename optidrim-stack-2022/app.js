// import express from 'express'
import TelegramBot from 'node-telegram-bot-api'
import { config } from 'dotenv'
import { TEXT, VOICE, PHOTO, STICKER, DOCUMENT } from './types.js'
import {
  onText,
  onVoice,
  onPhoto,
  onSticker,
  onDocument,
  botConfig,
} from './logic.js'
import parsing from './parsing.js'
import { createDataBtn } from './btn.js'

// CONFIG
config({ path: './.env' })

// VARS
// const app = express()
// const PORT = process.env.PORT || 5000
const TOKEN = process.env.BOT_TOKEN
const ERR_STICKER = process.env.ERR_STICKER

// BOT
const bot = new TelegramBot(TOKEN, { polling: true })
botConfig(bot)

bot.on('message', (msg, { type }) => {
  console.log(type)
  switch (type) {
    case TEXT:
      return onText(bot, msg)
    // case VOICE:
    //   return onVoice(bot, msg)
    // case PHOTO:
    //   return onPhoto(bot, msg)
    // case STICKER:
    //   return onSticker(bot, msg)
    case DOCUMENT:
      return onDocument(bot, msg)
    default:
      bot.sendSticker(msg.chat.id, ERR_STICKER)
  }
})
bot.on('edited_message', msg => {
  bot.sendMessage(msg.chat.id, `Пожалуйста, используйте новый запрос`)
})
bot.on('callback_query', async q => {
  const { id } = q.message.chat
  try {
    const data = await parsing(q.data)
    if (data.status === 'error')
      return bot.sendMessage(id, 'Возникла ошибка при парсинге 😢')

    const category = {
      films: 'Фильмы',
      series: 'Сериалы',
      cartoons: 'Мультфильмы',
    }
    const reply_markup = createDataBtn(data.data)

    bot.editMessageText(`Вот какие ${category[q.data]} сейчас смотрят`, {
      chat_id: id,
      message_id: q.message.message_id,
      reply_markup,
    })
  } catch (err) {
    console.log(err)
    bot.sendMessage(id, 'Ой, простите! 😕')
  }
})

// SERVER
// app.listen(PORT, () => console.log(`Server run on port: ${PORT}`))
