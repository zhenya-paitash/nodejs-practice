export const parsingBtn = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: 'Фильмы', callback_data: 'films' },
        { text: 'Сериалы', callback_data: 'series' },
      ],
      [{ text: 'Мультфильмы', callback_data: 'cartoons' }],
    ],
  }),
}

export const createDataBtn = data => {
  return JSON.stringify({
    inline_keyboard: [
      ...data.map(content => {
        const { name, age, genre, link } = content
        return [{ text: `${name}, ${genre} (${age})`, url: link }]
      }),
    ],
  })
}
