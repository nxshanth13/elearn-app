import React from 'react';
import { useNavigate } from 'react-router-dom';


const Header = () => {
  
  const navigate = useNavigate();

  return (
    <header className="header">
      <nav className="navbar">
        <ul className="nav-links">
          <li onClick={()=>{navigate('/course')}}>Courses</li>
          <li>Careers</li>
          <li onClick={()=>{navigate('/about')}}>About us</li>
        </ul>
        <div className="main-logo">
        <h1 onClick={()=>{navigate('/')}} style={{ cursor: 'pointer' }}>
        FLUENTPATH
      </h1>

        </div>
        <div className='nav-right'>
          <ul className="nav-links">
            <li onClick={()=>{navigate('/getstarted')}}>Login</li>
          </ul>
          <button className="fancy-button" onClick={()=>{navigate('/getstarted')}}>Join now</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
