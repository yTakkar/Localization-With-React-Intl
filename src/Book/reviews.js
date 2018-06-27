import React from 'react'
import { FormattedMessage } from 'react-intl'

const ReviewsHeading = () => (
  <div>
    <h4>
      <FormattedMessage
        id="detail.reviewsHeading"
        values={{ reviewsCount: 3 }}
      />
    </h4>
    <div>
      <ul>
        <li>
          <span>A very good review!!</span>
        </li>
        <li>
          <span>A good review!!</span>
        </li>
        <li>
          <span>Worst review ever!!</span>
        </li>
      </ul>
    </div>
  </div>
)

export default ReviewsHeading
