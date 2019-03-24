import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import contactActions from '../../actions/contactActions';
import ContactForm from './ContactForm';
import toastr from 'toastr';
import {browserHistory} from 'react-router';

class ManageContactPage extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.saveContact=this.saveContact.bind(this);

    this.state = {
      contact: Object.assign({}, props.contact)
    };
  }

  saveContact() {
    let name= this.refs.name.value;
    let designation= this.refs.designation.value;
    let salary= this.refs.salary.value;

    this.props.actions.savecontacts(name,designation,salary);
    this.redirect();
  }

  redirect(){
    toastr.success('Contact saved...!');
    browserHistory.push('/contact');
  }

  render(){
    const {actions,contact} = this.props;

    return(
      <div className="jumbotron">
        <h3>Add New Employee </h3>
        <form onSubmit={this.saveContact}>
          Name<input type="text" ref="name" placeholder="" className="form-control"/><br></br>
          Designation<input type="text" ref="designation" placeholder="" className="form-control"/><br></br>
          Salary<input type="text" ref="salary" placeholder="" className="form-control"/><br></br>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

ManageContactPage.propTypes={
  contact: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state,ownProps) {
  return{
    contact: state.contact
  };
}

function mapDispatchToProps(dispatch) {
  return{
    actions: bindActionCreators(contactActions,dispatch)
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(ManageContactPage);
