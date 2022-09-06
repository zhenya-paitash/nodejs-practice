import { Telegraf } from 'telegraf'
import { GoogleSpreadsheet } from 'google-spreadsheet'
import { config } from 'dotenv'

config({ path: './.env' })
const { TG_BOT_TOKEN, GOOGLE_SS_EMAIL, GOOGLE_SS_KEY } = process.env

const bot = new Telegraf(TG_BOT_TOKEN!)

// bot.start((ctx) => ctx.reply('Welcome'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))

bot.hears('hi', (ctx) => ctx.reply('Hello'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))