import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

import { courses } from '../Courses';
import Header from './Header';
import Footer from './Footer';

import boy from '../assets/images/boy.png';
import bell from '../assets/images/bell.png';
import coinIcon from '../assets/images/star.png';
import level from '../assets/images/level.png';
import mentor from '../assets/images/user.png';
import access from '../assets/images/access.png';
import download from '../assets/images/downloads.png';
import quiz from '../assets/images/assignment.png';
import basic from '../assets/images/cube.png';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPlayCircle, faLock } from '@fortawesome/free-solid-svg-icons';

const Courseoverview = () => {
  const { id } = useParams();
  const course = courses.find(c => c.id === parseInt(id));
  const navigate = useNavigate();
  console.log("Course ID:", id);

  if (!course) {
    return <h2>Course not found</h2>;
  }

  const chapters = [
    { id: 1, title: 'Introduction', status: 'completed' },
    { id: 2, title: 'Getting Started', status: 'in-progress' },
    { id: 3, title: 'What is HTML', status: 'locked' },
    { id: 4, title: 'HTML Basics', status: 'locked' },
  ];

  return (
    <>
      <Header />

      {/* Profile Section */}
      <div className="course-header">
        <div className="profile-section">
          <img src={boy} alt="profile" className="profile-image" />
          <div className="profile-text">
            <h1>
              Welcome, <span className="username">Rahul</span>
            </h1>
            <p>E-mail: xyz@gmail.com</p>
          </div>
        </div>

        {/* Notification Section */}
        <div className="notification-section">
          <img src={bell} alt="notify" className="notification-icon" />
          <div className="coins">
            <img src={coinIcon} alt="coin" className="coin-image" />
            <span className="coin-amount">3500</span>
          </div>
        </div>
      </div>

      <div>
        <p className="course-nav">
          <Link to="/course">Courses</Link> / {course.title}
        </p>
      </div>

      <div className="course-detail-container">
        <div className="course-info">
          <h1>{course.title}</h1>
          <p>{course.desc}</p>

          <div className="course-meta">
            <span className="course-tag">{course.topic}</span>
          </div>

          <div className="course-know">
            <div className="mentor-info">
              <img src={mentor} alt="Mentor" className="icon" />
              <p style={{ fontSize: '16px', margin: '0' }}>{course.mentor}</p>
            </div>
            <div className="level-info">
              <img src={level} alt="Level" className="icon" />
              <p style={{ fontSize: '16px', margin: '0' }}>{course.level}</p>
            </div>
          </div>

          {/* Course Description */}
          <h2>Description</h2>
          <p>
            Welcome to an exciting journey of building a cutting-edge FullStack Learning Management System (LMS) application with Next.js! In this in-depth tutorial, we will explore the power of Next.js and React.js.
          </p>
        </div>

        <div className="course-sidebar">
          <img
            src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?w=740"
            alt="Course"
            className="course-image"
          />

          <div className="course-enroll">
            <span className="course-price">Free</span>
            <button className="enroll-button" onClick={() => navigate(`/learn/${id}/home`)}>Enroll Now</button>
          </div>

          <div className="course-features">
            <h1 style={{ fontSize: '20px', marginBottom: '5px' }}>This course includes:</h1>
            <ul className="course-features">
              <li>
                <img src={access} alt="Lifetime Access" className="icon" />
                Lifetime Access
              </li>
              <li>
                <img src={download} alt="Downloadable Resources" className="icon" />
                Downloadable Resources
              </li>
              <li>
                <img src={quiz} alt="Quizzes and Assignments" className="icon" />
                Quizzes and Assignments
              </li>
              <li>
                <img src={basic} alt="No Prerequisites Required" className="icon" />
                No Prerequisites Required
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Chapters Section */}
      <div className="lesson-section">
        <h1>Chapters</h1>
        <p>{course.chapters} - {course.time}</p>
        <div className="lesson-list">
          {chapters.map((chapter, index) => (
            <div key={chapter.id} className={`lesson-item ${chapter.status}`}>
              <div className="lesson-info">
                <span className="lesson-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="lesson-title">{chapter.title}</span>
              </div>
              <div className="lesson-icon">
                {chapter.status === 'completed' && 
                <>
                  <p>COMPLETED</p>
                  <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green' }} />
                </>}
                {chapter.status === 'in-progress' && 
                <>
                  <p>ONGOING</p>
                  <FontAwesomeIcon icon={faPlayCircle} style={{ color: 'purple' }} />
                </>}
                {chapter.status === 'locked' && <FontAwesomeIcon icon={faLock} style={{ color: 'gray' }} />}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Courseoverview;
