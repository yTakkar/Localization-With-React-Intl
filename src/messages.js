const messages = {
  'en-GB': {
    detail: {
      author: 'by {author}',
      toggle: 'Toggle',
      purchase: 'Purchase this book from:',
      reviewsHeading: '{reviewsCount} Reviews'
    }
  },
  'es-ES': {
    detail: {
      author: 'de {author}',
      toggle: 'palanca',
      purchase: 'Compra este libro desde:',
      reviewsHeading: '{reviewsCount} Comentarios'
    }
  },
  'fr-FR': {
    detail: {
      author: 'par {author}',
      toggle: 'Basculer',
      purchase: 'acheter ce livre de:',
      reviewsHeading: '{reviewsCount} Avis'
    }
  }
}

export const localesArray = Object.keys(messages)

export default messages
