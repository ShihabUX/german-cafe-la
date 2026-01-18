import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-brown)', color: 'white', padding: '3rem 2rem', textAlign: 'center' }}>
            <div style={{ marginBottom: '1.5rem' }}>
                <a
                    href="https://instagram.com/cafleur.la"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '2rem', display: 'inline-block', transition: 'transform 0.3s' }}
                >
                    <FaInstagram />
                </a>
            </div>
            <p style={{ fontFamily: 'var(--font-serif)', letterSpacing: '1px', marginBottom: '1rem' }}>
                LA CAFLEUR
            </p>
            <div style={{ fontSize: '0.9rem', opacity: 0.7 }}>
                <p>&copy; {new Date().getFullYear()} La Cafleur. All rights reserved.</p>
                <div style={{ marginTop: '0.5rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                    <Link to="/impressum" style={{ textDecoration: 'none', color: 'white' }}>Impressum</Link>
                    <span style={{ opacity: 0.5 }}>|</span>
                    <Link to="/impressum" style={{ textDecoration: 'none', color: 'white' }}>Datenschutz</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
