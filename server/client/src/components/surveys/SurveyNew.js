import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SurveyForm from './SurveyForm';

const SurveyNew = props => {
  return <SurveyForm />;
};

SurveyNew.propTypes = {};

export default connect(
  null,
  null
)(SurveyNew);
