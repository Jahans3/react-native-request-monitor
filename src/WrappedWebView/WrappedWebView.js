const React = require('react')
const { Component } = React
const { WebView } = require('react-native')

class WrappedWebView extends Component {
  _generateProps = () => ({
    ...this.props
  })

  render () {
    const props = this._generateProps()
    return (
      <WebView {...props} />
    )
  }
}

module.exports = WrappedWebView
