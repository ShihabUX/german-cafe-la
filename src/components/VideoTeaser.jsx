import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';

const VideoTeaser = () => {
    return (
        <section style={{ padding: '0', backgroundColor: 'var(--color-white)', position: 'relative' }}>
            <div style={{ height: '600px', width: '100%', position: 'relative', overflow: 'hidden' }}>
                {/* Placeholder Background (Simulating Video Thumbnail) */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: '#e0ebd8', // Soft green placeholder
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Abstract Visuals to make it look "active" yet waiting */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url(/assets/hero_background_1768764002825.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.4,
                        filter: 'blur(5px)'
                    }}></div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0.8 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                        style={{
                            position: 'absolute',
                            zIndex: 2,
                            width: '80px',
                            height: '80px',
                            borderRadius: '50%',
                            backgroundColor: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 0 30px rgba(0,0,0,0.1)',
                            cursor: 'pointer'
                        }}
                    >
                        <FaPlay style={{ marginLeft: '5px', color: 'var(--color-teal)', fontSize: '1.5rem' }} />
                    </motion.div>

                    <div style={{
                        position: 'absolute',
                        bottom: '3rem',
                        left: '0',
                        width: '100%',
                        textAlign: 'center',
                        zIndex: 2,
                        color: 'var(--color-teal)'
                    }}>
                        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontStyle: 'italic' }}>
                            Ein Tag im La Cafleur (Coming Soon)
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VideoTeaser;
