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

class Intl extends React.PureComponent {
  render() {
    return (
      <Context.Consumer>
        {({ state }) => (
          <IntlProvider
            locale={state.locale}
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
