import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillsData = {
        "Languages": ["JavaScript", "TypeScript", "Python", "Google Apps Script"],
        "Frameworks & Libraries": ["NestJS", "ExpressJS", "Node.js", "React.js", "Next.js", "React Native", "Expo", "HTML5", "CSS3", "TailwindCSS"],
        "Databases": ["PostgreSQL", "MongoDB", "DynamoDB", "MySQL"],
        "Tools & Platforms": ["AWS", "Git", "GitHub", "Postman", "VS Code", "Jest", "Playwright"],
        "Soft Skills": ["Problem Solving", "Team Collaboration", "Communication", "Adaptability", "Mentoring"]
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
