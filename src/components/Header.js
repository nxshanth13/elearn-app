import React from 'react';


const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li>Instructors</li>
          <li>Courses</li>
          <li>Careers</li>
        </ul>
        <div className="main-logo">
          FLUENT PATH
        </div>
        <div className='nav-right'>
          <ul className="nav-links">
            <li>Pricing</li>
            <li>Login</li>
          </ul>
          <button className="fancy-button">Join now</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
