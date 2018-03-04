class AppContainer extends Component {

  componentWillReceiveProps() {
    ...
    deepForceUpdate(this)
  }
}
