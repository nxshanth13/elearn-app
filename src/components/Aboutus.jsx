import React from 'react';
import Header from './Header';
import mission from '../assets/images/mission.jpg';
import about from '../assets/images/about.jpg';

const Aboutus = () => {
  return (
    <>
      <Header />

      <div className="about-section">
        <div className="about-left">
          <img src={about} alt="About Fluent Path" className="about-image" />
        </div>

        <div className="about-right abt-container">
          <h1>About Us</h1>
          <p>Curious about who we are and what we stand for?</p>
          <p>
            <b>Fluent Path</b> is a dynamic e-learning app designed to help
            students sharpen their English language skills in key areas such as
            vocabulary, grammar, reading, and more. Our platform provides a
            seamless learning experience, offering a wide range of tools and
            resources to guide learners at every level.
          </p>

          <p>
            You wanted to know who we are and what we're here for? Simply put, Fluent
            Path exists to unlock your full potential in mastering the English language.
          </p>

          <p>
            With Fluent Path, users can easily access interactive lessons,
            practice materials, and content designed to help them develop and manage
            their language skills effectively. Whether you're looking to build a
            stronger vocabulary, improve your grammar, or become more confident in
            reading and comprehension, Fluent Path offers the support you need.
          </p>
        </div>
      </div>


      <div className="about-section">
        <div className="about-left">
          <img src={about} alt="About Fluent Path" className="about-image" />
        </div>

        <div className="about-right abt-container">
          <h1>Our Vision</h1>

          <p>
            <b>Fluent Path</b> is a dynamic e-learning app designed to help
            students sharpen their English language skills in key areas such as
            vocabulary, grammar, reading, and more. Our platform provides a
            seamless learning experience, offering a wide range of tools and
            resources to guide learners at every level.
          </p>


          <p>
            You wanted to know who we are and what we're here for? Simply put, Fluent
            Path exists to unlock your full potential in mastering the English language.
          </p>

          <p>
            With Fluent Path, users can easily access interactive lessons,
            practice materials, and content designed to help them develop and manage
            their language skills effectively. Whether you're looking to build a
            stronger vocabulary, improve your grammar, or become more confident in
            reading and comprehension, Fluent Path offers the support you need.
          </p>
        </div>
      </div>

      {/* Our Mission Section */}
      <div className="mission-container">
        <div className="mission-left">
          <h1>Our Mission</h1>

          <div className="card-section">
            <div className="card">
              <h3>Get your certificate and add to your resume</h3>
              <p>
                Everyone agrees with the fact that learning management systems are a tremendous
                way to expand learners' knowledge.
              </p>
            </div>

            <div className="card">
              <h3>Premium one-to-one support for students</h3>
              <p>
                Everyone agrees with the fact that learning management systems are a tremendous
                way to expand learners' knowledge.
              </p>
            </div>

            <div className="card">
              <h3>Lifetime access to all your enrolled courses</h3>
              <p>
                Everyone agrees with the fact that learning management systems are a tremendous
                way to expand learners' knowledge.
              </p>
            </div>

            <div className="card">
              <h3>More resources to help you succeed</h3>
              <p>
                Everyone agrees with the fact that learning management systems are a tremendous
                way to expand learners' knowledge.
              </p>
            </div>
          </div>
        </div>

        <div className="mission-right">
          <img src={mission} alt="Our Mission" className="mission-image" />
        </div>
      </div>
    </>
  );
};

export default Aboutus;
