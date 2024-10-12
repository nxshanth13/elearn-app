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
                    <div className="accordionHeader" onClick={() => toggleAccordion(index)}>
                        <h2>{module.name}</h2>
                        <span>{activeIndex === index ? '-' : '+'}</span>
                    </div>
                    {activeIndex === index && (
                        <div className="accordionContent">
                            <p><strong>Time:</strong> {module.time}</p>
                            <p><strong>Status:</strong> {module.status}</p>
                            <p><strong>Quiz:</strong> {module.quiz}</p>
                            <button onClick={()=>{navigate(`/learn/${props.courseid}/home/module/${activeIndex+1}`)}}>Resume</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Accordion