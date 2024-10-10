import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import Header from './components/Header';

const CourseHome = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    return (
        <>
            <Header />
            
            <div className='courseHomeMain'>
                <div className='leftCourseHome'>
                    <h2>HTML and CSS</h2>
                    <p className='accordion'>Course Overview</p>
                    <ul className='accordionPanel'>
                        <li>Introduction</li>
                        <li>Getting started</li>
                        <li>What is HTML</li>
                        <li>HTML Basics</li>
                    </ul>
                    <p>Resources</p>
                </div>
                <div className='rightCourseHome'>
                    <div className='topRightCourseHome'>
                        <img src='https://img.freepik.com/free-vector/online-tutorials-concept_52683-37481.jpg?w=740' />
                        <div>
                            <h3>HTML and CSS</h3>
                            <h4><strong>Total Time</strong> : 3hrs and 45mins</h4>
                            <h4><strong>Quiz</strong> : 4</h4>
                        </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore delectus, voluptate dolorum molestias ipsum amet, consectetur nesciunt est aliquid repellendus tempore aliquam saepe ab eveniet velit sit recusandae quia totam.
                    </p>

                    <h1>Modules</h1>

                    <p className='accordion'>1 : Introduction</p>
                    <div className='accordionPanel moduleSummary'>
                        <h2>1hr</h2>
                        <h2>Status : On going</h2>
                        <h2>Quiz : Not Taken</h2>
                        <button onClick={()=>{navigate(`/learn/${id}/home/module/1`)}}>Resume</button>
                    </div>
                    <p className='accordion'>2 : Introduction</p>
                    <div className='accordionPanel moduleSummary'>
                        <h2>1hr</h2>
                        <h2>Status : On going</h2>
                        <h2>Quiz : Not Taken</h2>
                        <button onClick={()=>{navigate(`/learn/${id}/home/module/2`)}}>Resume</button>
                    </div>
                    <p className='accordion'>3 : Introduction</p>
                    <div className='accordionPanel moduleSummary'>
                        <h2>1hr</h2>
                        <h2>Status : On going</h2>
                        <h2>Quiz : Not Taken</h2>
                        <button onClick={()=>{navigate(`/learn/${id}/home/module/3`)}}>Resume</button>
                    </div>
                    <p className='accordion'>4 : Introduction</p>
                    <div className='accordionPanel moduleSummary'>
                        <h2>1hr</h2>
                        <h2>Status : On going</h2>
                        <h2>Quiz : Not Taken</h2>
                        <button onClick={()=>{navigate(`/learn/${id}/home/module/4`)}}>Resume</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseHome