import React from 'react'
import {render} from 'react-dom'

import App from './App'

const Render = () => {
  render(<App />, document.getElementById('root'));
}

Render()

if (module.hot) {
  module.hot.accept('./App', () => {
    Render()
  })
}
