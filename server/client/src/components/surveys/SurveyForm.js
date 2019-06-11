import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject Line', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' }
];

const SurveyForm = ({ handleSubmit }) => {
  const renderFields = () => {
    return _.map(FIELDS, ({ label, name }) => {
      return (
        <Field
          key={name}
          component={SurveyField}
          type='text'
          label={label}
          name={name}
        />
      );
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(values => console.log(values))} />
      {renderFields()}
      <Link to='/surveys' className='red btn-flat white-text'>
        Cancel
      </Link>
      <button className='teal btn-flat right white-text' type='submit'>
        Review
        <i className='material-icons right'>done</i>
      </button>
    </div>
  );
};

SurveyForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

const validate = values => {
  const errors = {};

  _.each(FIELDS, ({ name }) => {
    if (!values[name]) {
      errors[name] = `${name} is required`;
    }
  });

  return errors;
};

export default reduxForm({
  validate,
  form: 'surveyForm'
})(SurveyForm);
