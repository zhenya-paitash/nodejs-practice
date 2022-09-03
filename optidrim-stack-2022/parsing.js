import axios from 'axios'
import cheerio from 'cheerio'
import * as pup from 'puppeteer'

export default async function parsing(type, page = 1, amount = 10) {
  const url = `https://hdrezka.me/${type}/page/${page}/?filter=watching`

  try {
    const data = []

    // PUPPETEER || AXIOS parsing data
    const pageContent = await getPageContentAX(url)
    // const pageContent = await getPageContentPUP(url)

    const $ = cheerio.load(pageContent)

    const pages = +$('.b-navigation').find('a').eq(-2).text()

    const arrEl = $('.b-content__inline_items').find('.b-content__inline_item')
    arrEl.slice(0, amount).each((idx, el) => {
      const coverEl = $(el).find('.b-content__inline_item-cover')
      const linkEl = $(el).find('.b-content__inline_item-link')

      const cover = coverEl.find('a img').attr('src')
      const name = linkEl.find('a').text()
      const link = linkEl.find('a').attr('href')
      const [age, country, genre] = linkEl.find('div').text().split(',')

      data.push({ name, link, cover, age, country, genre })
    })

    return {
      status: 'success',
      type,
      amount,
      page,
      [type + '_pages']: pages,
      data,
    }
  } catch (err) {
    // console.error(err)
    return { status: 'error' }
  }
}

// AXIOS
async function getPageContentAX(url) {
  try {
    const { data } = await axios.get(url)
    return data
  } catch (err) {
    throw err
  }
}

// PUPPETEER
async function getPageContentPUP(url) {
  // ? PUPPETEER CONFIG
  const LAUNCH_PUPPETEER_OPTS = {
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--disable-gpu',
      '--window-size=1920x1080',
    ],
  }
  const PAGE_PUPPETEER_OPTS = {
    networkIdle2Timeout: 5000,
    waitUntil: 'networkidle2',
    timeout: 30_000_000,
  }

  try {
    const browser = await pup.launch(LAUNCH_PUPPETEER_OPTS)
    const page = await browser.newPage()
    await page.goto(url, PAGE_PUPPETEER_OPTS)
    const content = await page.content()
    browser.close()

    return content
  } catch (err) {
    throw err
  }
}

// ;(async () => {
//   const data = await parsing('films', 1, 4)
//   console.log(data)
// })()
