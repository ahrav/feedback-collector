import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions/index';

const SurveyList = ({ fetchSurveys, surveys }) => {
  useEffect(() => {
    fetchSurveys();
  }, [fetchSurveys]);

  const renderSurveys = () => {
    return surveys.reverse().map(survey => {
      return (
        <div key={survey._id} className='card dark-1'>
          <div className='card-content'>
            <span className='card-title'>{survey.title}</span>
            <p>{survey.body}</p>
            <p className='right'>
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className='card-action'>
            <a>
              <i className='material-icons green-text text-darken-4'>
                thumb_up
              </i>
              : {survey.likes}
            </a>
            <a>
              <i className='material-icons red-text text-darken-4'>
                thumb_down
              </i>
              : {survey.dislikes}
            </a>
          </div>
        </div>
      );
    });
  };
  return renderSurveys();
};

const mapStateToProps = state => ({
  surveys: state.survey
});
export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
