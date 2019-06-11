import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';

const Header = ({ auth }) => {
  const renderContent = () => {
    switch (auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href='/auth/google'>Login with Google</a>
          </li>
        );
      default:
        return (
          <Fragment>
            <li>
              <Payments />
            </li>
            <li style={{ margin: '0 10px' }}>
              Credits: {auth.credits === 0 ? 0 : auth.credits}
            </li>
            <li>
              <a href='/api/logout'>Logout</a>
            </li>
          </Fragment>
        );
    }
  };

  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to={auth ? '/surveys' : '/'} className='left brand-logo'>
          Feedback Collector
        </Link>
        <ul id='nav-mobile' className='right'>
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Header);
