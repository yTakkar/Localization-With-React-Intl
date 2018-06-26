import React from 'react'
import { FormattedMessage } from 'react-intl'

const Purchase = () => (
  <div>
    <h4>
      <FormattedMessage id="detail.purchase" />
    </h4>
    <ul>
      <li>
        <a href="https://flipkart.com">Flipkart</a>
      </li>
      <li>
        <a href="https://amazon.in">Amzon</a>
      </li>
      <li>
        <a href="https://ebay.in">eBay</a>
      </li>
    </ul>
  </div>
)

export default Purchase
