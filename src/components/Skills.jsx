import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsData = {
        "Languages": ["JavaScript", "TypeScript", "Python (Basic)", "Google Apps Script"],
        "Frameworks": ["NestJS", "ExpressJS", "Node.js"],
        "Databases": ["PostgreSQL", "MongoDB", "DynamoDB", "MySQL"],
        "Tools & Cloud": ["AWS", "Git", "GitHub", "Postman", "Jest", "Playwright"],
    };

    return (
        <section id="skills" className="section">
            <div className="container">
                <h2 className="section-title">Technical <span className="gradient-text">Skills</span></h2>
                <div className="skills-container">
                    {Object.entries(skillsData).map(([category, items]) => (
                        <div key={category} className="skill-category card">
                            <h3>{category}</h3>
                            <div className="skill-list">
                                {items.map((skill, index) => (
                                    <div key={index} className="skill-item">{skill}</div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
