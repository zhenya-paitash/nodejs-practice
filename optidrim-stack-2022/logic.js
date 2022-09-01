import { PARSING_FILMS } from './commands.js'
import { parsingBtn } from './btn.js'

function onText(bot, data) {
  switch (data.text) {
    case PARSING_FILMS:
      return bot.sendMessage(data.chat.id, 'Фильмы или Сериалы?', parsingBtn)
    default:
      bot.sendMessage(data.chat.id, 'ON TEXT')
  }
}

function onVoice(bot, data) {
  bot.sendMessage(data.chat.id, 'ON VOICE')
}
function onPhoto(bot, data) {
  bot.sendMessage(data.chat.id, 'ON PHOTO')
}
function onSticker(bot, data) {
  bot.sendMessage(data.chat.id, 'ON STICKER')
}
function onDocument(bot, data) {
  bot.sendMessage(data.chat.id, 'ON DOCUMENT')
}

export { onText, onVoice, onPhoto, onSticker, onDocument }
