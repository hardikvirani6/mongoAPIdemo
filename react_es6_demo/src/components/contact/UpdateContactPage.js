import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as contactActions from '../../actions/contactActions';
import toastr from 'toastr';
import { makeAPIRequest } from "../common/apiHelper";
import axios from 'axios';

class UpdateContactPage extends React.Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      contact: Object.assign({}, props.contact)
    };
    debugger;

    this.redirect=this.redirect.bind(this);
    this.saveContact=this.saveContact.bind(this);
  }

  saveContact(event) {
    let id= this.refs.id.value;
    let name= this.refs.name.value;
    let designation= this.refs.designation.value;
    let salary= this.refs.salary.value;

    this.props.actions.updateContact(id, name, designation, salary)
    .then(() => this.redirect())
    .catch(error => {
      toastr.error(error);
    });
  }

  redirect(){
    toastr.success('Contact updated...!');
    this.context.router.push('/contact');
  }

  render(){

    /*const {contact} = this.props;
    debugger;*/

    return(
      <div className="jumbotron">
        <h3>Update Employee</h3>
        <form onSubmit={this.saveContact}>
              {/*<input type="hidden" value={contact._id} ref="id" />
          Name<input type="text" value={contact.name} ref="name" placeholder="" className="form-control"/><br></br>
          Designation<input type="text" value={contact.designation} ref="designation" placeholder="" className="form-control"/><br></br>
          Salary<input type="text" value={contact.salary} ref="salary" placeholder="" className="form-control"/><br></br>
          */}<button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  }
}

UpdateContactPage.propTypes = {
  contact: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

UpdateContactPage.contextTypes = {
  router: PropTypes.object
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

export default connect(mapStateToProps,mapDispatchToProps)(UpdateContactPage);
