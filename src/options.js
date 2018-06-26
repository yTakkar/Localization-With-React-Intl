import React from 'react'
import { localesArray } from './messages'

const Options = () => (
  <React.Fragment>
    <option value="">Select Locale</option>
    {localesArray.map(locale => (
      <option key={locale} value={locale}>
        {locale}
      </option>
    ))}
  </React.Fragment>
)

export default Options
