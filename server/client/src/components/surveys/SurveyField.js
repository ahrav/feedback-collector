import React from 'react';

const SurveyField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        style={{ marginBottom: '2px' }}
        {...input}
        placeholder={`Please enter ${input.name}`}
      />
      <div className='red-text' style={{ marginBottom: '15px' }}>
        {touched && error}
      </div>
    </div>
  );
};

export default SurveyField;
