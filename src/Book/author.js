import React from 'react'
import { FormattedMessage } from 'react-intl'

const Author = () => (
  <div>
    <h4>Author: </h4>
    <span>
      <FormattedMessage id="detail.author" values={{ author: 'Faiyaz' }} />
    </span>
  </div>
)

export default Author
