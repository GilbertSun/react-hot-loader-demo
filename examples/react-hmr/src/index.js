import React from 'react'
import {render} from 'react-dom'
import { AppContainer } from 'react-hot-loader';

import App from './App'

const Render = () => {
  render(<AppContainer><App /></AppContainer>, document.getElementById('root'));
}

Render()

if (module.hot) {
  module.hot.accept('./App', () => {
    Render()
  })
}

window.Render = Render
