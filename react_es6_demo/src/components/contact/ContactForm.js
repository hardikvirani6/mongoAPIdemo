import React from 'react';
import TextInput from '../common/TextInput';

const ContactForm = ({onChange, onSave, saving}) => {
  return(
    <form>
      <h2>Manage Contact</h2>
      <TextInput
        name="name"
        label="Name"
        onChange={onChange}/>
      <TextInput
        name="designation"
        label="Designation"
        onChange={onChange}/>
      <TextInput
        name="salary"
        label="Salary"
        onChange={onChange}/>
      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...':'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

ContactForm.propTypes = {
  contact: React.PropTypes.object.isRequired,
  onSave:  React.PropTypes.func.isRequired,
  onChange:React.PropTypes.func.isRequired,
  saving:  React.PropTypes.bool,
  errors:  React.PropTypes.object
};

export default ContactForm;
