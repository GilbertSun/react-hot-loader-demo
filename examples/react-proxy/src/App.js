import React, { PureComponent, Component } from 'react'

export default class App extends PureComponent {
  state = {
    counter: 0
  }

  handleIncrease() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  handleDecrease() {
    this.setState({
      counter: this.state.counter - 1
    })
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleIncrease()}>+</button>
        <span>counter: {this.state.counter}</span>
        <button onClick={() => this.handleDecrease()}>-</button>
      </div>
    )
  }
}
