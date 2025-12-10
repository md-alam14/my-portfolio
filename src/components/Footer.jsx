import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            padding: '40px 0',
            textAlign: 'center',
            background: 'var(--bg-color)',
            color: 'var(--text-secondary)',
            fontSize: '0.9rem',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <p>&copy; {new Date().getFullYear()} Md Nafish Alam. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
