import React from 'react'
import { FormattedDate, FormattedTime } from 'react-intl'

const Published = () => (
  <div>
    <h4>Published: </h4>
    <span>
      <span>Time:</span>
      <FormattedTime
        value={new Date(1514718748562)}
        month="2-digit"
        day="2-digit"
        year="2-digit"
      />
    </span>
  </div>
)

export default Published
