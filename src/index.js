import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Provider from './Provider'
import Intl from './Intl'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider>
    <Intl>
      <App />
    </Intl>
  </Provider>,
  rootElement
)
