import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "MyFloppy",
            subtitle: "Decentralized Storage Platform",
            tech: ["Node.js", "NestJS", "TypeScript", "SpiceDB", "PostgreSQL"],
            desc: "Designed and implemented decentralized cloud storage workflows using STORJ, enabling secure, scalable, and cost-efficient file management. Implemented fine-grained access control using SpiceDB.",
            link: "https://play.google.com/store/apps/details?id=com.skandham.synthar&pcampaignid=web_share"
        },
        {
            title: "Sarvdevsthanam",
            subtitle: "Temple Management Platform",
            tech: ["NestJS", "PostgreSQL", "WebRTC", "Razorpay", "Prisma"],
            desc: "Temple management platform with separate apps for devotees and priests. Features online pooja bookings, live virtual rituals via WebRTC, and donation payments.",
            link: "https://play.google.com/store/apps/details?id=in.sarvdevasthanam.devotee"
        },
        {
            title: "AI Chatbots",
            subtitle: "Conversational AI",
            tech: ["Node.js", "WhatsApp API", "SwiftChat API", "DynamoDB"],
            desc: "WhatsApp chatbot for education and AI-powered spiritual chatbots (Gita/Ramayana) to provide spiritual insights."
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div className="card project-card" key={index}>
                            <div>
                                <div className="project-header">
                                    <h3 className="project-title">{project.title}</h3>
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-icon" title="View on Play Store">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        </a>
                                    )}
                                </div>
                                <h4 className="project-subtitle">{project.subtitle}</h4>
                                <p className="project-desc">{project.desc}</p>
                            </div>
                            <div className="tech-stack">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="tech-tag">{t}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
