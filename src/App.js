import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  state = {
    baseUrl:'http://127.0.0.1:8000/api/',
    test:''
  }
componentDidMount(){
  axios.get(`${this.state.baseUrl}test`)
  .then((response) => {
    const test = response.data.test
    this.setState(() => {
      return {
        test:test
      }
    })

  })
}

  render() {
    return (
      <div>
        {this.state.test}
      </div>
    )
  }
}

