import React from 'react'
import ChangeLocale from './changeLocale'
import Book from './components/Book'

class App extends React.Component {
  render() {
    return (
      <div>
        <ChangeLocale />
        <Book />
      </div>
    )
  }
}

export default App
