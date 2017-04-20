var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function () {
    return (
      <div id='App'>
        App
      </div>
    )
  }
});

module.exports = App;

ReactDOM.render(<App />, document.getElementById('main-container'));
