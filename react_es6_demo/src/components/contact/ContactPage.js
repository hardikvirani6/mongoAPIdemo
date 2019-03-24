import React, {PropTypes} from "react";
import * as contactActions from '../../actions/contactActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory, Link} from 'react-router';
import toastr from 'toastr';

class ContactPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage= this.redirectToAddCoursePage.bind(this);
    this.redirectToUpdContactPage=this.redirectToUpdContactPage.bind(this);
    this.delContact=this.delContact.bind(this);
    this.updContact=this.updContact.bind(this);
    this.redirect=this.redirect.bind(this);

    this.state = {
      contact: Object.assign({}, props.contact)
    };
  }

  redirectToAddCoursePage(){
    browserHistory.push('/contacts');
  }

  delContact(e,id) {
    this.props.actions.deleteContact(id);
    this.redirect();
  }

  redirect(){
    toastr.success('Contact deleted...!');
    this.context.router.push('/contact');
  }

  updContact(e, id){
    debugger;
    this.props.actions.getByIdContact(id);
    this.redirectToUpdContactPage();
  }

  redirectToUpdContactPage(){
    browserHistory.push('/contactUpd');
  }

  render() {
    const {actions,contact} = this.props;
    return (
      <div className="jumbotron">
        <h2>Employee </h2>
        <input type="submit"
               value="Add New Employee"
               className="btn btn-primary"
               onClick={this.redirectToAddCoursePage}/>
        <table className="table">
          <thead>
          <tr>
            <th>Delete</th>
            <th>Update</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Salary</th>
          </tr>
          </thead>
          <tbody>
          {contact.map(contact =>
            <tr key={contact._id}>
              <td><a href= "" onClick={((e) => this.delContact(e,contact._id))}>Delete</a></td>
              <td><a href= "" onClick={((e) => this.updContact(e,contact._id))}>Update</a></td>
              <td>{contact.name}</td>
              <td>{contact.designation}</td>
              <td >{contact.salary}</td>
            </tr>
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

ContactPage.propTypes = {
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
export default connect(mapStateToProps,mapDispatchToProps)(ContactPage);
