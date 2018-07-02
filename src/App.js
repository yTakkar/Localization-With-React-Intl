import React from 'react'
import ChangeLocale from './changeLocale/changeLocale'
import Book from './Book/Book'
import Visit from './visit'

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Visit />
        <ChangeLocale />
        <Book />
      </div>
    )
  }
}

export default App
