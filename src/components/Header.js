import React from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  
  const navigate = useNavigate();

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li>Instructors</li>
          <li onClick={()=>{navigate('/course')}}>Courses</li>
          <li>Careers</li>
        </ul>
        <div className="main-logo">
          FLUENT PATH
        </div>
        <div className='nav-right'>
          <ul className="nav-links">
            <li>Pricing</li>
            <li onClick={()=>{navigate('/getstarted')}}>Login</li>
          </ul>
          <button className="fancy-button" onClick={()=>{navigate('/getstarted')}}>Join now</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
