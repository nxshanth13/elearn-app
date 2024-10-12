import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'

import Footer from './Footer';

const moduleContent = {
    1: {
        title: 'Introduction',
        miniSections: [
            { title: 'What is HTML?', content: 'HTML stands for HyperText Markup Language...', type: 'text' },
            { title: 'Why HTML?', content: 'HTML is the standard language for creating web pages...', type: 'text' },
            { title: 'Framework', content: 'https://www.youtube.com/embed/dQw4w9WgXcQ', type: 'video' },
            { title: 'Use Cases', content: 'HTML is used for web structure, document layout...', type: 'text' },
            { title: 'What is CSS?', content: 'CSS stands for Cascading Style Sheets...', type: 'text' }
        ]
    },
    2: {
        title: 'Getting Started',
        miniSections: [
            { title: 'Introduction to Web Development', content: 'This section will explain...', type: 'text' },
            { title: 'Understanding Browser Rendering', content: 'https://www.example.com/audio-file.mp3', type: 'audio' },
            { title: 'Creating Your First Webpage', content: 'Let\'s build a simple webpage...', type: 'text' }
        ]
    }
};

const CourseModule = () => {

    const navigate = useNavigate();

    const { id, moduleid } = useParams();
    const [activeSection, setActiveSection] = useState(0);
    
    const module = moduleContent[moduleid];
    const miniSections = module?.miniSections || [];

    const renderContent = (section) => {
        if (section.type === 'text') {
            return <p>{section.content}</p>;
        } else if (section.type === 'video') {
            return <iframe src={section.content} title={section.title} frameBorder="0" allowFullScreen></iframe>;
        } else if (section.type === 'audio') {
            return <audio controls><source src={section.content} type="audio/mpeg" /></audio>;
        }
    };

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

            <div className="modulePage">
                <div className="moduleSidebar">
                    <h2>{module.title}</h2>
                    <ul>
                        {miniSections.map((section, index) => (
                            <li key={index} className={activeSection === index ? 'active' : ''}>
                                <button onClick={() => setActiveSection(index)}>
                                    {section.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="moduleContent">
                    <h3>{miniSections[activeSection]?.title}</h3>
                    <div className="contentSection">
                        {renderContent(miniSections[activeSection])}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default CourseModule