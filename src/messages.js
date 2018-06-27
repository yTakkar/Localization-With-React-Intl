const messages = {
  'en-GB': {
    detail: {
      author: 'by {author}',
      toggle: 'Toggle',
      purchase: 'Purchase this book from:',
      reviewsHeading: '{reviewsCount} Reviews',
      publishedDate: '1514718748562'
    }
  },
  'es-ES': {
    detail: {
      author: 'de {author}',
      toggle: 'palanca',
      purchase: 'Compra este libro desde:',
      reviewsHeading: '{reviewsCount} Comentarios',
      publishedDate: '1514718748562'
    }
  },
  'fr-FR': {
    detail: {
      author: 'par {author}',
      toggle: 'Basculer',
      purchase: 'acheter ce livre de:',
      reviewsHeading: '{reviewsCount} Avis',
      publishedDate: '1514718748562'
    }
  }
}

export const localesArray = Object.keys(messages)

export default messages
