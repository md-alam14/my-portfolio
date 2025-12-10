import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-content">
                    <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
                    <div className="about-text-container">
                        <p className="about-text">
                            I am a Backend Developer with a strong passion for building scalable and efficient web applications.
                            Currently based in India, I specialize in innovative digital solutions, combining cutting-edge technology with creative strategies to drive business success.
                        </p>
                        <p className="about-text">
                            With a Bachelor of Technology in Computer Science, I have cultivated a diverse skillset ranging from
                            <strong> JavaScript, NestJS, and Node.js</strong> to cloud technologies like <strong>AWS</strong>.
                        </p>
                        <p className="about-text">
                            Beyond coding, I am an active contributor to the tech community, sharing knowledge on LinkedIn and engaging with open-source projects.
                            My approach to development is centered around problem-solving, ownership, and continuous learning.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
