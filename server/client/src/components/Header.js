import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = auth => {
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
          <li>
            <a href='/api/logout'>Logout</a>
          </li>
        );
    }
  };

  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to={auth ? '/surveys' : '/'} className='left brand-logo'>
          Feedback Collector
        </Link>
        <ul className='right'>{renderContent()}</ul>
      </div>
    </nav>
  );
};

Header.propTypes = {
  auth: PropTypes.object
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  null
)(Header);
