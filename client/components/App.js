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
    let that = this,
        inputVal = { 
          foodType: ReactDOM.findDOMNode(this.refs.foodType).value,
          cuisineType: ReactDOM.findDOMNode(this.refs.cuisineType).value,
          city: ReactDOM.findDOMNode(this.refs.city).value,
          stateCode: ReactDOM.findDOMNode(this.refs.stateCode).value,
          radiusSearch: ReactDOM.findDOMNode(this.refs.radiusSearch).value
        };
        console.log('testing')

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
          <input type="text" ref="foodType" required></input>
          <input type="text" ref="cuisineType" placeholder="Asian" required></input>
          <input type="text" ref="city" placeholder="ex: Los Angeles (not LA)" required></input>
          <input type="text" ref="stateCode" placeholder="ex: CA (for California)" required></input>
          <input type="number" ref="radiusSearch" placeholder="in miles" required></input>
          <button>Submit</button>
        </form>
        <Results result={this.state.result} />
      </div>
    )
  }
}

// // module.exports = App;

// ReactDOM.render(<App />, document.getElementById('main-container'));
