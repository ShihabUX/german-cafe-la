import { motion } from 'framer-motion';
import Petals from './Petals';
import { FaChevronDown } from 'react-icons/fa';

const Hero = () => {
    return (
        <section
            style={{
                height: '100vh',
                width: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
                color: 'white'
            }}
        >
            {/* Background Image with Overlay */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}>
                <img
                    src="/assets/hero_background_1768764002825.png"
                    alt="La Cafleur Interior"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(7, 147, 133, 0.3)' // Teal overlay
                }}></div>
            </div>

            <Petals />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ zIndex: 2, textAlign: 'center', padding: '0 1rem' }}
            >
                <h1 style={{
                    fontSize: 'clamp(4rem, 8vw, 7rem)',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-white)',
                    marginBottom: '1rem',
                    textShadow: '0 4px 10px rgba(0,0,0,0.2)'
                }}>
                    Coffee meets Flower
                </h1>
                <p style={{
                    fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '2px',
                    fontWeight: 300,
                    textTransform: 'uppercase',
                    opacity: 0.9
                }}>
                    Ein Moment der Ruhe. Ein Schluck Poesie.
                </p>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    zIndex: 2,
                    color: 'white',
                    fontSize: '1.5rem',
                    cursor: 'pointer'
                }}
                onClick={() => {
                    const nextSection = document.getElementById('signature');
                    if (nextSection) nextSection.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <FaChevronDown />
            </motion.div>
        </section>
    );
};

export default Hero;
