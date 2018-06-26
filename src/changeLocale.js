import React from 'react'
import Context from './Context'
import Options from './options'

class ChangeLocale extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {({ state, actions }) => {
          let handleChange = e => actions.changeLocale(e.target.value)

          return (
            <React.Fragment>
              <select value="" onChange={handleChange}>
                <Options />
              </select>{' '}
              ({state.locale})
            </React.Fragment>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default ChangeLocale
