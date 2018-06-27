import React from 'react'
import { FormattedNumber } from 'react-intl'
import Context from '../Context'

const Price = () => {
  const price = 100000

  return (
    <div>
      <h4>Price:</h4>
      <Context.Consumer>
        {({ state }) => (
          <FormattedNumber
            value={price}
            style="currency"
            currencyDisplay="symbol"
            currency={state.locale === 'en-GB' ? 'GBP' : 'EUR'}
          />
        )}
      </Context.Consumer>
    </div>
  )
}

export default Price
