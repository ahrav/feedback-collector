import React from 'react';
import { connect } from 'react-redux';

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
          <li>
            <a href='/api/logout'>Logout</a>
          </li>
        );
    }
  };

  return (
    <nav>
      <div className='nav-wrapper'>
        <a className='left brand-logo'>Feedback Collector</a>
        <ul className='right'>{renderContent()}</ul>
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
