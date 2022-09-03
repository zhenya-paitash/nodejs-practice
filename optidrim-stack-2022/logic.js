import { START, HELP, PARSING } from './commands.js'
import { parsingBtn, startBtn } from './btn.js'

function botConfig(bot) {
  bot.setMyCommands([
    { command: START, description: 'Приветствие' },
    { command: HELP, description: 'Помощь' },
    { command: PARSING, description: 'Парсинг' },
  ])
}

function onText(bot, data) {
  switch (data.text) {
    case HELP:
      return bot.sendMessage(data.chat.id, 'Приветствую. Бот только для тестов')
    case START:
      // bot.sendMessage(data.chat.id, 'Welcome! 😀🤚', startBtn)
    case PARSING:
      return bot.sendMessage(data.chat.id, 'Выберите категорию', parsingBtn)
    // default:
    //   bot.sendMessage(data.chat.id, 'ON TEXT')
  }
}

function onVoice(bot, data) {
  // bot.sendMessage(data.chat.id, 'ON VOICE')
}
function onPhoto(bot, data) {
  // bot.sendMessage(data.chat.id, 'ON PHOTO')
}
function onSticker(bot, data) {
  // bot.sendMessage(data.chat.id, 'ON STICKER')
}
function onDocument(bot, data) {
  // bot.sendMessage(data.chat.id, 'ON DOCUMENT')
}

export { onText, onVoice, onPhoto, onSticker, onDocument, botConfig }
