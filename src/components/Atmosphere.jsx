import { motion } from 'framer-motion';

const Atmosphere = () => {
    return (
        <section id="atmosphere" style={{ height: '80vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

            {/* Background with Parallax effect simulated by fixed attachment if desirable, or just absolute cover */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0
            }}>
                <img
                    src="/assets/interior_atmosphere_1768764033112.png"
                    alt="Cozy Atmosphere"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(0,0,0,0.3)'
                }}></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{
                    zIndex: 2,
                    textAlign: 'center',
                    color: 'white',
                    maxWidth: '800px',
                    padding: '2rem',
                    background: 'rgba(7, 147, 133, 0.7)', // Semi-transparent teal
                    backdropFilter: 'blur(5px)',
                    borderRadius: '2px'
                }}
            >
                <h2 style={{ color: 'white', marginBottom: '1rem' }}>Eine Oase der Ruhe</h2>
                <p style={{ fontSize: '1.2rem', fontFamily: 'var(--font-body)' }}>
                    "Hier atmet die Seele auf. Zwischen duftenden Blüten und dem Aroma frisch gerösteten Kaffees finden Sie einen Moment ganz für sich."
                </p>
            </motion.div>
        </section>
    );
};

export default Atmosphere;
