import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-background"></div>
            <div className="container hero-content">
                <span className="subtitle">Hello, I'm</span>
                <h1 className="title">MD NAFISH <span className="gradient-text">ALAM</span></h1>
                <h2 className="role">Software Engineer & Full Stack Enthusiast</h2>
                <p className="description">
                    Versatile software developer with 3 years of experience crafting innovative and scalable solutions.
                    Proficient in JavaScript, NestJS, ExpressJS, Node.js, Python, React, React Native, Expo, SQL, and Cloud Technologies including AWS.
                </p>
                <div className="hero-buttons">
                    <a href="#projects" className="btn-primary">View Work</a>
                    <a href="#contact" className="btn-secondary">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
