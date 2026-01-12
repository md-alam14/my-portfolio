import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <h2 className="section-title">Get In <span className="gradient-text">Touch</span></h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Connect</h3>
                        <p>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="icon">📞</span>
                                <span>+91 87895 28534</span>
                            </div>
                            <div className="contact-item">
                                <span className="icon">📧</span>
                                <a href="mailto:mdsheikh6234@gmail.com" className="link">mdsheikh6234@gmail.com</a>
                            </div>
                        </div>

                        <div className="social-links">
                            <a href="#" className="social-btn">LinkedIn</a>
                            <a href="https://github.com/md-alam14" className="social-btn">GitHub</a>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                        <div className="form-group">
                            <input type="text" placeholder="Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Email" required />
                        </div>
                        <div className="form-group">
                            <textarea placeholder="Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="btn-primary">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
