export const parsingBtn = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [{ text: 'Фильмы', callback_data: 'films' }],
      [{ text: 'Сериалы', callback_data: 'series' }],
      [{ text: 'Мультфильмы', callback_data: 'cartoons' }],
    ],
  }),
}
