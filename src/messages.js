const messages = {
  'en-GB': {
    detail: {
      toggle: 'Toggle',
      purchase: 'Purchase this book from:',
      reviewsHeading: 'Reviews'
    }
  },
  'es-ES': {
    detail: {
      toggle: 'palanca',
      purchase: 'Compra este libro desde:',
      reviewsHeading: 'Comentarios'
    }
  },
  'fr-FR': {
    detail: {
      toggle: 'Basculer',
      purchase: 'acheter ce livre de:',
      reviewsHeading: 'Avis'
    }
  }
}

export const localesArray = Object.keys(messages)

export default messages
