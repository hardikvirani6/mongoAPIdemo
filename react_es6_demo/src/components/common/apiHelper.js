import axios from 'axios';
import React from 'react';

export function makeAPIRequest({ path, method = 'GET', body = {}, headers = {} }) {

  const APIUrl = 'http://localhost:8080/api';
  return axios({
    url: `${APIUrl}/${path}`,
    data: body,
    headers,
    method
  })
  .then(function (response) {
    return Promise.resolve(response.data);
  })
  .catch(function (error) {
    return Promise.reject(error);
  });
}




/*

class apiHelper extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    };
    this.apiUrl = 'http://localhost:8080/api'
  }

  componentDidMount(){

    axios.get(this.apiUrl)
    .then((res) => {

      this.setState({data:res.data});
    });
  }
}

*/
