import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Results from './Results';
// import { Link } from 'react-router';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      result: {}
    };
  }

  post(elem) {
    // console.log('how many times');
    // console.log(elem)
    return $.ajax({
      type: 'POST',
      url: '/data',
      data: JSON.stringify(elem),
      contentType: 'application/json'
    });
  }

  handleSubmit(e) {
    // console.log('test 2');
    e.preventDefault();
    let that = this, inputVal = ReactDOM.findDOMNode(this.refs.food).value;
    this.post(inputVal).done(response => {
      // console.log(response)
      that.setState({
        result: response
      });
    });
  }

  render() {
    return (
      <div id='App'>
        <form id="inputForm" onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="food" required ></input>
        </form>
        <Results result={this.state.result} />
      </div>
    )
  }
}

// // module.exports = App;

// ReactDOM.render(<App />, document.getElementById('main-container'));
