import React from 'react'
import { FormattedTime, FormattedRelative } from 'react-intl'

const time = new Date(1514718748562)

const Published = () => (
  <div>
    <h4>Published Time:</h4>
    <span>
      <FormattedTime
        value={time}
        month="2-digit"
        day="2-digit"
        year="2-digit"
      />
    </span>
    <br />
    <span>
      (<FormattedRelative value={time} />)
    </span>
  </div>
)

export default Published
