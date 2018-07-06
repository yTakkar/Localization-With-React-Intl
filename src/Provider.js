import React from 'react'
import Context from './Context'

class Provider extends React.Component {
  state = {
    locale: 'en-GB'
  }

  changeLocale = locale => this.setState({ locale })

  render() {
    return (
      <Context.Provider
        value={{
          state: this.state,
          actions: {
            changeLocale: this.changeLocale
          }
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}

export default Provider
