import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'
import css from './styles/index.css'

const store = createStore(reducer)

// store.subscribe(() => {
//   console.log('yessss', store.getState())
// })

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
