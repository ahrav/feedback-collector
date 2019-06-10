import React from 'react';

const Header = () => {
  return (
    <nav>
      <div className='nav-wrapper'>
        <a className='left brand-logo'>Feedback Collector</a>
        <ul className='right'>
          <li>
            <a>Login with Google</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
