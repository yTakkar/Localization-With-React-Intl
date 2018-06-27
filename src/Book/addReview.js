import React from 'react'
import { injectIntl } from 'react-intl'

const AddReview = ({ intl }) => {
  let placeholder = intl.formatMessage({ id: 'detail.inputPlaceholder' })

  return <textarea placeholder={placeholder} />
}

export default injectIntl(AddReview)
