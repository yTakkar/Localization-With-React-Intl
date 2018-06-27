import React from 'react'
import { FormattedDate, FormattedTime, FormattedRelative } from 'react-intl'

const Published = () => {
  const time = new Date(1514718748562)

  return (
    <div>
      <h4>Published Time:</h4>
      <span>
        <FormattedDate value={time} day="2-digit" month="long" year="numeric" />{' '}
        <FormattedTime value={time} />
      </span>
      <br />
      <span>
        (<FormattedRelative value={time} />)
      </span>
    </div>
  )
}

export default Published
