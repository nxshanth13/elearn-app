import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Accordion = (props) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const navigate = useNavigate();

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    return (
        <div className="accordion">
            {props.modules.map((module, index) => (
                <div key={index} className="accordionItem">
                    <div className={`accordionHeader 
                        ${module.status == "Locked" ? "lockedmod" : 
                        module.status == "Ongoing" ? "unlockedmod" : "completedmod"
                        }`} 
                        onClick={() => toggleAccordion(index)}>
                        <h2>{module.name}</h2>
                        <span>{activeIndex === index ? '-' : '+'}</span>
                    </div>
                    {activeIndex === index && (
                        <div className="accordionContent">
                            {module.status == "Ongoing" && 
                            <>
                                <p><strong>Time:</strong> {module.time}</p>
                                <p><strong>Status:</strong> Ongoing</p>
                                <p><strong>Quiz:</strong> {module.quiz}</p>
                                <button className="resumeBtn" onClick={() => {navigate(`/learn/${props.courseid}/home/module/${activeIndex+1}`)}}>Resume</button>
                            </>}
                            {module.status == "Completed" && 
                            <>
                                <p><strong>Time:</strong> {module.time}</p>
                                <p><strong>Status:</strong> Completed</p>
                                {module.quiz == "Taken" ? 
                                <>
                                    <p><strong>Quiz:</strong> Completed</p>
                                    <button className="viewResultBtn">View Result</button>
                                </> :
                                <>
                                    <p><strong>Quiz:</strong> Not Completed</p>
                                    <button className="takeQuizBtn">Take Quiz</button>
                                </>}
                                <button className="resumeBtn" onClick={() => {navigate(`/learn/${props.courseid}/home/module/${activeIndex+1}`)}}>Learn Module Again</button>
                            </>}
                            {module.status == "Locked" && 
                            <>
                                <p><strong>Time:</strong> {module.time}</p>
                            </>}
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Accordion