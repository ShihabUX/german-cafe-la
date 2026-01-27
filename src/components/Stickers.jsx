import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Stickers = () => {
    return (
        <>
            {/* Bio & Fairtrade Badge - Organic Shape */}
            <motion.div
                initial={{ opacity: 0, rotate: -10 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 1, duration: 1 }}
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    left: '30px',
                    zIndex: 99,
                    pointerEvents: 'none' // Let clicks pass through if it overlaps purely decorative
                }}
            >
                <div style={{
                    backgroundColor: 'var(--color-mint)',
                    color: 'var(--color-teal)',
                    padding: '1.5rem',
                    borderRadius: '50% 40% 60% 50% / 50% 60% 40% 50%', // Organic blob shape
                    fontWeight: '600',
                    fontFamily: 'var(--font-serif)',
                    border: '2px solid white',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    width: '120px',
                    height: '120px',
                    justifyContent: 'center',
                    fontSize: '0.9rem',
                    lineHeight: '1.2'
                }}>
                    <span>100% Bio</span>
                    <span style={{ fontSize: '0.8rem' }}>& Fairtrade</span>
                </div>
            </motion.div>

            {/* Reservation Floating Button */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                style={{
                    position: 'fixed',
                    bottom: '40px',
                    right: '40px',
                    zIndex: 100
                }}
            >
                <Link
                    to="/contact"
                    style={{
                        backgroundColor: 'var(--color-brown)',
                        color: 'white',
                        padding: '1rem 2rem',
                        borderRadius: '50px',
                        textDecoration: 'none',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.1rem',
                        letterSpacing: '1px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'transform 0.3s'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    Reservieren
                </Link>
            </motion.div>
        </>
    );
};

export default Stickers;
