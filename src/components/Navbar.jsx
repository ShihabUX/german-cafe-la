import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Close menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Handle scroll for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Menu', path: '/menu' },
        { name: 'Gallery', path: '/gallery' },
        { name: 'Visit', path: '/contact' },
    ];

    const isHome = location.pathname === '/';

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1000,
            transition: 'background-color 0.3s ease, padding 0.3s ease',
            backgroundColor: scrolled || !isHome ? 'var(--color-white)' : 'transparent',
            boxShadow: scrolled || !isHome ? '0 2px 10px rgba(0,0,0,0.05)' : 'none',
            padding: scrolled ? '1rem 2rem' : '1.5rem 2rem',
            color: scrolled || !isHome ? 'var(--color-brown)' : 'white'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Link to="/" style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.5rem',
                    fontWeight: 600,
                    letterSpacing: '1px'
                }}>
                    La Cafleur
                </Link>

                {/* Desktop Links */}
                <ul style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-menu">
                    <style>{`
                        @media (max-width: 768px) {
                            .desktop-menu { display: none !important; }
                        }
                    `}</style>
                    {links.map((link) => (
                        <li key={link.name}>
                            <Link
                                to={link.path}
                                style={{
                                    fontFamily: 'var(--font-body)',
                                    fontSize: '0.95rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    opacity: 0.9,
                                    borderBottom: location.pathname === link.path ? '1px solid currentColor' : '1px solid transparent'
                                }}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Toggle */}
                <div
                    onClick={() => setIsOpen(!isOpen)}
                    style={{
                        cursor: 'pointer',
                        display: 'none',
                        fontSize: '1.5rem',
                        zIndex: 1001
                    }}
                    className="mobile-toggle"
                >
                    <style>{`
                        @media (max-width: 768px) {
                            .mobile-toggle { display: block !important; }
                        }
                    `}</style>
                    {isOpen ? <FaTimes color="var(--color-brown)" /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100vh',
                            backgroundColor: 'var(--color-off-white)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 1000
                        }}
                    >
                        <ul style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            {links.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        style={{
                                            fontFamily: 'var(--font-serif)',
                                            fontSize: '2rem',
                                            color: 'var(--color-teal)'
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
