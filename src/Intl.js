import React from 'react'
import { addLocaleData, IntlProvider } from 'react-intl'
import messages from './messages'
import { flattenMessages } from './utils'
import Context from './Context'

// import locale files
import en from 'react-intl/locale-data/en'
import es from 'react-intl/locale-data/es'
import fr from 'react-intl/locale-data/fr'

addLocaleData([...en, ...es, ...fr])

let locale =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  'en-GB'

class Intl extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {({ state }) => (
          <IntlProvider
            locale={locale}
            messages={flattenMessages(messages[state.locale])}
          >
            {this.props.children}
          </IntlProvider>
        )}
      </Context.Consumer>
    )
  }
}

export default Intl
