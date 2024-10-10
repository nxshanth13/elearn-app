import React from 'react';

import './App.css';
import { Link } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import homeimg from './assets/images/temp.png';
import light from './assets/images/light.png';
import certificate from './assets/images/certificate.png';
import headphone from './assets/images/headphone.png';
import access from './assets/images/free-access.png';
import learn from './assets/images/learn.png';
import join from './assets/images/join.png';

const Homepage = () => {
  return (
    <>
      <Header />

      <div className='home-wrapper'>
        <div className="landing-section" id="home">
          <div className="left-content">
            <h1 className="main-title">
              Develop <span className="highlight">skills</span>
              <br />
              from the best
              <br />
              source
            </h1>

            <p>
              Everyone agrees with the fact that learning management systems are
              a tremendous way to expand learners' knowledge base and help staff
              enhance their skills.
            </p>

            <button className='enroll-btn'>
            <Link to="/course" style={{ textDecoration: 'none', color: 'white'}}>
              Enroll Course!
            </Link>
            </button>
          </div>

          <div className="right-content">
            <img src={homeimg} alt="Learning illustration" />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="body2">
        <div className="section2">
          <div className="left-content1">
            <div className="specially-wrapper">
              <h1 className="specially-text">Specially</h1>
              <img src={light} alt="icon" className="light-image" />
            </div>
            <h1>
              Features are
              <br />
              only for you.
            </h1>
          </div>

          <div className="right-content1">
            <p>
              With high social media impact levels, video content
              has become extremely popular among us. People
              used to video content.
            </p>
            <button className="fancy-button">View all courses</button>
          </div>
        </div>

        <div className="card-section">
          <div className="card">
            <img src={certificate} alt="certificate icon" className="card-icon" />
            <h3>Get your certificate and add to your resume</h3>
            <p>
              Everyone agrees with the fact that learning management systems are a tremendous way to expand learners' knowledge.
            </p>
          </div>

          <div className="card">
            <img src={headphone} alt="support icon" className="card-icon" />
            <h3>Premium one-to-one support for students</h3>
            <p>
              Everyone agrees with the fact that learning management systems are a tremendous way to expand learners' knowledge.
            </p>
          </div>

          <div className="card">
            <img src={access} alt="courses icon" className="card-icon" />
            <h3>Lifetime access to all your enrolled courses</h3>
            <p>
              Everyone agrees with the fact that learning management systems are a tremendous way to expand learners' knowledge.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div className="body3">
        <div className="content-section">
          <div className="text-content">
            <h1>
              Smart classes
              with instructors
              in private
            </h1>
            <p>
              Everyone agrees with the fact that learning management systems are
              the tremendous way to expand learner's knowledge base and help staff
              enhance their skills.
            </p>
            <button className='enroll-btn'>Enroll Course</button>
          </div>

          <div className="image-content">
            <img
              src="https://evewaii.com/wp-content/uploads/2023/10/Asset-10.png"
              alt="icon"
              className="private-image"
            />
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className='body4'>
        <div className="section-4">
          <div className="left-4">
            <img
              src={learn}
              alt="icon"
              className="private-image"
            />
          </div>

          <div className="right-4">
            <h1>
              Take test
              and get
              instant results
            </h1>

            <p>
              Everyone agrees with the fact that learning management systems are
              the tremendous way to expand learner's knowledge base and help staff
              enhance their skills.
            </p>

            <button className='enroll-btn'>Take test</button>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div className='body5'>
        <div className="community-section">
          <h1>Join the biggest 
            community of learning</h1>  

          <p>Everyone agrees with the fact that learning management systems are
              a tremendous way to expand learners' knowledge base and help staff
              enhance their skills.</p>

          <div>
            <img
              src={join}
              alt="Join community icon"
              className="join"
            />
          </div>

          <button className='fancy-button'>Join now</button>
        </div>
      </div>

      <Footer />

    </>
  );
};

export default Homepage;
