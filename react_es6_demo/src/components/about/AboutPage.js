import React from 'react';

class AboutPage extends React.Component{
  render(){
    return(
      <div className="jumbotron">
        <h1>About</h1>
          <p>
            This application uses following technologies:
          </p>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Flux</li>
            <li>Redux</li>
            <li>Node JS</li>
            <li>Gulp</li>
            <li>Browserify</li>
            <li>Bootstrap</li>
          </ul>
      </div>
    );
  }
}

export default AboutPage;
