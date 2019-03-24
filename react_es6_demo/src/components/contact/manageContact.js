import React, {PropTypes} from 'react';

class app extends React.Component{
  constructor(){
    super();

    this.state = {
      event: '----'
    };

    this.update=this.update.bind(this);
  }

  update(e){
    this.setState({event: e.type});
  }

  render(){
    return(
      <div>
        <textarea onChange={this.update}
                  onCopy={this.update}
                  onKeyPress={this.update}
                  onCut={this.update}
                  onPaste={this.update}
                  cols="10"
                  rows="10">
        </textarea>
        <h2>{this.state.event}</h2>
      </div>
    );
  }
}

export default app;
