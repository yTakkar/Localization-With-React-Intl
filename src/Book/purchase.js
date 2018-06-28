import React from 'react'
import { FormattedMessage } from 'react-intl'

const Purchase = () => (
  <div>
    <h4>
      <FormattedMessage id="detail.purchase" />
    </h4>
    <ul>
      <li>
        <a href="https://flipkart.com" target="_blank">
          Flipkart
        </a>
      </li>
      <li>
        <a href="https://amazon.in" target="_blank">
          Amzon
        </a>
      </li>
      <li>
        <a href="https://ebay.in" target="_blank">
          eBay
        </a>
      </li>
    </ul>
  </div>
)

export default Purchase
