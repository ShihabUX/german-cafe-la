import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Petals from './Petals';
import { FaChevronDown, FaInstagram, FaTiktok, FaGoogle } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Hero = () => {
    const images = [
        "/assets/hero_background_1768764002825.png",
        // Placeholders for future emotional images
        "linear-gradient(rgba(7, 147, 133, 0.2), rgba(68, 32, 0, 0.4))",
    ];

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

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
            {/* Background Slideshow */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}>
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5 }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                        }}
                    >
                        {images[currentImage].startsWith('linear-gradient') ? (
                            <div style={{ width: '100%', height: '100%', background: images[currentImage] }}></div>
                        ) : (
                            <img
                                src={images[currentImage]}
                                alt="La Cafleur Atmosphere"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        )}
                    </motion.div>
                </AnimatePresence>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0, 0, 0, 0.2)' // Slight dark overlay for text contrast
                }}></div>
            </div>

            <Petals />

            {/* Content */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ zIndex: 2, textAlign: 'center', padding: '0 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                {/* Centerpiece Logo */}
                <motion.img
                    src={logo}
                    alt="La Cafleur"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 1 }}
                    style={{
                        width: 'clamp(150px, 20vw, 300px)',
                        marginBottom: '2rem',
                        filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))'
                    }}
                />

                <h1 style={{
                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                    fontFamily: 'var(--font-serif)',
                    color: 'var(--color-white)',
                    marginBottom: '1rem',
                    textShadow: '0 4px 10px rgba(0,0,0,0.3)',
                    lineHeight: '1.2'
                }}>
                    Endlich guter Kaffee<br />im Nord-Westen.
                </h1>

                <p style={{
                    fontSize: 'clamp(1.1rem, 1.5vw, 1.4rem)',
                    fontFamily: 'var(--font-body)',
                    letterSpacing: '1px',
                    fontWeight: 400,
                    marginBottom: '2rem',
                    opacity: 0.95
                }}>
                    Ein Moment der Ruhe. <span style={{ fontWeight: 600, borderBottom: '1px solid white' }}>Auch to Go.</span>
                </p>

                {/* Social Proof */}
                <div style={{ display: 'flex', gap: '2rem', fontSize: '1.5rem', opacity: 0.9 }}>
                    <a href="https://instagram.com/cafleur.la" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'transform 0.2s' }} aria-label="Instagram">
                        <FaInstagram />
                    </a>
                    <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'transform 0.2s' }} aria-label="TikTok">
                        <FaTiktok />
                    </a>
                    <a href="https://google.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', transition: 'transform 0.2s' }} aria-label="Google">
                        <FaGoogle />
                    </a>
                </div>
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
