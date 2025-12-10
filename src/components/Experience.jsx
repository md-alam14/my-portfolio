import React from 'react';
import './Experience.css';

const Experience = () => {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Professional <span className="gradient-text">Experience</span></h2>
                <div className="timeline">
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content card">
                            <h3 className="job-title">Software Engineer</h3>
                            <h4 className="company">Madgical Techdom (OPC) Private Limited</h4>
                            <span className="date">OCT 2023 – Present</span>
                            <ul className="job-desc">
                                <li>Designed and developed backend architecture using NestJS for devotee and priest mobile applications (Sarvdevsthanam).</li>
                                <li>Created secure, scalable REST APIs for authentication, bookings, donations, and user interactions.</li>
                                <li>Integrated WebRTC via Ant Media Server to support live virtual pooja streaming with low latency.</li>
                                <li>Managed relational data using PostgreSQL + Prisma ORM, ensuring efficient queries.</li>
                                <li>Implemented Razorpay payment integration and built AI-powered spiritual chatbots.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="timeline-item">
                        <div className="timeline-dot"></div>
                        <div className="timeline-content card">
                            <h3 className="job-title">Software Engineer Trainee</h3>
                            <h4 className="company">MilestoneOS</h4>
                            <span className="date">Jul 2022 – Oct 2023</span>
                            <ul className="job-desc">
                                <li>Contributed to full-stack development across backend and frontend modules for core products.</li>
                                <li>Built features, integrated APIs, fixed bugs, and optimized performance for production applications.</li>
                                <li>Worked in Agile workflows delivering regular production updates and sprint commitments.</li>
                                <li>Collaborated with cross-functional teams to ensure seamless product delivery.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
