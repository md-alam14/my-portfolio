import React from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = React.useState(''); // 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch("https://formsubmit.co/ajax/mdsheikh6234@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    _subject: `New Portfolio Message from ${formData.name}`
                })
            });

            const data = await response.json();

            if (data.success === "true" || response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                // Reset success message after 5 seconds
                setTimeout(() => setStatus(''), 5000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus('error');
        }
    };

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

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder="Message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={status === 'sending'}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>

                        {status === 'success' && (
                            <p className="status-message success">
                                ✅ Message sent successfully! I'll get back to you soon.
                            </p>
                        )}
                        {status === 'error' && (
                            <p className="status-message error">
                                ❌ Something went wrong. Please try again or email me directly.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
