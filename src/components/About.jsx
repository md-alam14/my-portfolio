import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <div className="about-content">
                    <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
                    <div className="about-details">
                        <div className="about-text-section">
                            <p className="about-text">
                                I am a Software Engineer with a strong passion for building scalable and efficient web applications.
                                Currently based in India, I specialize in innovative digital solutions, combining cutting-edge technology with creative strategies to drive business success.
                            </p>
                            <p className="about-text">
                                My approach to development is centered around problem-solving, ownership, and continuous learning.
                                I am an active contributor to the tech community, sharing knowledge on LinkedIn and engaging with open-source projects.
                            </p>
                        </div>

                        <div className="about-grid">
                            <div className="info-card">
                                <h3>Education</h3>
                                <ul className="info-list">
                                    <li>
                                        <strong>Bachelor of Technology (B.Tech)</strong><br />
                                        Computer Science
                                    </li>
                                    <li>
                                        <strong>Higher Secondary Education</strong><br />
                                        PCM (Physics, Chemistry, Mathematics)
                                    </li>
                                </ul>
                            </div>

                            <div className="info-card">
                                <h3>Certifications</h3>
                                <ul className="info-list">
                                    <li>Problem Solving (Basic)</li>
                                    <li>Frontend Developer (React)</li>
                                    <li>Introduction to Generative AI</li>
                                    <li>Introduction to Large Language Models</li>
                                </ul>
                            </div>

                            <div className="info-card">
                                <h3>Professional Attributes</h3>
                                <ul className="info-list">
                                    <li><strong>Core Competencies:</strong> Problem Solving, Communication, Ownership, Team Collaboration, Adaptability</li>
                                    <li><strong>Community:</strong> Active contributor to tech community, writing about NestJS, React, and modern dev practices.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
