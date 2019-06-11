import React from 'react';
import { connect } from 'react-redux';
import SurveyForm from './SurveyForm';

const SurveyNew = props => {
  return <SurveyForm />;
};

export default connect(
  null,
  null
)(SurveyNew);
