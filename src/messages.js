const messages = {
  'en-GB': {
    detail: {
      author: 'by {author}',
      toggle: 'Toggle',
      purchase: 'Purchase this book from:',
      reviewsHeading:
        '{reviewsCount, plural, =0 {No Reviews} one {1 Review} other {# Reviews}}',
      inputPlaceholder: 'Wanna add a review?'
    }
  },
  'es-ES': {
    detail: {
      author: 'de {author}',
      toggle: 'palanca',
      purchase: 'Compra este libro desde:',
      reviewsHeading:
        '{reviewsCount, plural, =0 {No Opiniones} one {1 Opinione} other {# Opiniones}}',
      inputPlaceholder: '¿Quieres agregar una reseña?'
    }
  },
  'fr-FR': {
    detail: {
      author: 'par {author}',
      toggle: 'Basculer',
      purchase: 'acheter ce livre de:',
      reviewsHeading:
        '{reviewsCount, plural, =0 {No Avis} one {1 Avi} other {# Avis}}',
      inputPlaceholder: 'Vous voulez ajouter un avis?'
    }
  }
}

export const localesArray = Object.keys(messages)

export default messages
