import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import Accordion from './components/Accordion';

const CourseHome = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [section, setSection] = useState(1);

    const modules = [
        {
            name: 'Introduction',
            time: '1hr',
            status: 'Ongoing',
            quiz: 'Not Taken',
        },
        {
            name: 'Getting Started',
            time: '1hr',
            status: 'Ongoing',
            quiz: 'Not Taken',
        },
        {
            name: 'Advanced Concepts',
            time: '1hr',
            status: 'Ongoing',
            quiz: 'Not Taken',
        },
        {
            name: 'Final Project',
            time: '1hr',
            status: 'Ongoing',
            quiz: 'Not Taken',
        }
    ];

    return (
        <>
            <nav className="courseHomeNav">
                <div>
                    <h1 onClick={()=>{navigate('/')}}>FLUENT PATH</h1>
                    <h3 onClick={()=>{navigate('/course')}}>Courses</h3>
                </div>
                <div className="profileDiv" >
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    <h2>PROFILE</h2> 
                </div>
            </nav>
            <div className="courseHomeMain">
                <div className="leftCourseHome">
                    <h2>HTML and CSS</h2>
                    <hr />
                    <p onClick={() => setSection(1)} className={`list-elements ${section === 1 ? 'activeEle' : ''}`}>Course Overview</p>
                    <p onClick={() => setSection(2)} className={`list-elements ${section === 2 ? 'activeEle' : ''}`}>Resources</p>
                </div>

                <div className="rightCourseHome">
                    {section === 1 ? (
                        <>
                            <div className="topRightCourseHome">
                                <img src="https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?w=740" alt="Course Overview" />
                                <div>
                                    <h3>HTML and CSS</h3>
                                    <h4><strong>Total Time</strong>: 3hrs and 45mins</h4>
                                    <h4><strong>Quiz</strong>: 4</h4>
                                </div>
                            </div>
                            <p className="borderBox">
                                This course will provide a solid understanding of HTML and CSS, 
                                teaching you how to create responsive and visually appealing web pages.
                            </p>
                            <div className="borderBox">
                                <h2>Modules</h2>
                                <Accordion modules={modules} courseid={id} />
                            </div>
                        </>
                    ) : (
                        <h1>Resources</h1>
                    )}
                </div>
            </div>
        </>
    );
};

export default CourseHome;
