import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/App'
import * as serviceWorker from './serviceWorker'

import { ApolloProvider } from '@apollo/react-hooks'
import client from './app/client'

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
