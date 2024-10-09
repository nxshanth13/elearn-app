import React from 'react';
import Header from './components/Header';
import study from './assets/images/study.png';
import bell from './assets/images/bell.png';
import boy from './assets/images/boy.png';
import coinIcon from './assets/images/star.png';
import left from './assets/images/left-arrow.png';
import right from './assets/images/arrow-right.png';
import clockIcon from './assets/images/clock.png'; 
import bookIcon from './assets/images/chapter.png'; 
import { Link } from 'react-router-dom'; 

export const courses = [
    {
      id: 1,
      image: 'https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?w=740',
      title: 'Learn Basic HTML',
      desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      time: '2h 30min',
      chapters: '15 Chapters',
      topic: 'Grammar',
      mentor: 'xyz',
      level:'Basic',
    },
    {
      id: 2,
      image: 'https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740',
      title: 'Learn CSS Basics',
      time: '3h 15min',
      chapters: '18 Chapters',
      topic: 'Grammar',
      mentor: 'xyz',
      level:'Basic',
    },
    {
      id: 3,
      image: 'https://img.freepik.com/free-vector/building-websites-concept-illustration_114360-1524.jpg?w=740',
      title: 'Introduction to JavaScript',
      time: '4h 00min',
      chapters: '20 Chapters',
      topic: 'Grammar',
      mentor: 'xyz',
      level:'Basic',
    },
    {
      id: 4,
      image: 'https://img.freepik.com/free-vector/coding-concept-illustration_114360-1081.jpg?w=740',
      title: 'Advanced React.js Concepts',
      time: '5h 30min',
      chapters: '25 Chapters',
      topic: 'Grammar',
      mentor: 'xyz',
      level:'Basic',
    },
    {
      id: 5,
      image: 'https://img.freepik.com/free-vector/developer-concept-illustration_114360-1990.jpg?w=740',
      title: 'Mastering Node.js',
      time: '6h 45min',
      chapters: '30 Chapters',
      topic: 'Grammar',
      mentor: 'xyz',
      level:'Basic',
    }
];

const CourseCard = ({ id, image, title, time, chapters }) => {
    return (
      <div className="course-card">
        <img src={image} alt={title} className="course-image" />
        <div className="course-info">
          <h3>{title}</h3>
          <div className="course-details">
            <span>
              <img src={clockIcon} alt="clock" className="icon" /> {time}
            </span>
            <span> | </span>
            <span>
              <img src={bookIcon} alt="book" className="icon" /> {chapters}
            </span>
          </div>
          <Link to={`/course/${id}`} className="course-link">Check it Out ➔</Link>
        </div>
      </div>
    );
};

const CourseList = () => {
  return (
    <div className="course-list">
      {courses.map((course) => (
        <CourseCard
          key={course.id}
          id={course.id} 
          image={course.image}
          title={course.title}
          time={course.time}
          chapters={course.chapters}
        />
      ))}
    </div>
  );
};

const Course = () => {
  return (
    <div>
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

      {/* Course Intro Section */}
      <div className="course-wrapper">
        <div className="course-intro">
          <h1>Investing in Knowledge and Your Future</h1>
          <p>
            Ready to take your skills to the next level? Why settle for average when you can learn from the very best?
            <br />
            Our courses are designed by leading experts, ensuring you get top-notch training that’s relevant, up-to-date, and
            <br />
            highly effective.
          </p>
        </div>
        <div className="course-image">
          <img src={study} alt="Students learning" />
        </div>
      </div>

      {/* Course Layout Section */}
      <div className="course-layout">
        <div className="course-head">
          <h1>Basic Courses</h1>
          <img src={left} alt="left" className="arrow-icon" />
          <img src={right} alt="right" className="arrow-icon" />
        </div>
      </div>

      {/* Course List Section */}
      <CourseList />
    </div>
  );
};

export default Course;
