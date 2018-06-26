import React from 'react'
import Context from './Context'
import Options from './options'

class ChangeLocale extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {({ actions }) => {
          let handleChange = e => actions.changeLocale(e.target.value)

          return (
            <select value="" onChange={handleChange}>
              <Options />
            </select>
          )
        }}
      </Context.Consumer>
    )
  }
}

export default ChangeLocale
