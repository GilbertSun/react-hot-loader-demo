import React from 'react'
import {render} from 'react-dom'
import createProxy from 'react-proxy';
import deepForceUpdate from 'react-deep-force-update';

import App from './App'

class App1 extends App {
  handleIncrease() {
    this.setState({
      counter: this.state.counter + 2
    })
  }
}

const proxy = createProxy(App)
const ProxyApp = proxy.get()

const Instance = render(<ProxyApp />, document.getElementById('root'));

const proxyUpdate = () => {
  proxy.update(App1);
  deepForceUpdate(Instance)
}

proxyUpdate() // 当调用时，App 不会刷新，当前 App 状态保持，但是 handleIncrease 会被更新
