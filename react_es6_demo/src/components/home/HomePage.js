import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
    return(
      <div className="jumbotron">
        <h2>Hello, Hardik</h2>
        <p>React, Redux and React Router in ES6 for REACTJS Web App.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
      </div>
    );
  }
}

export default HomePage;
