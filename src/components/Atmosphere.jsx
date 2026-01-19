import { motion } from 'framer-motion';

const Atmosphere = () => {
    return (
        <section style={{ height: '60vh', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Parallax Background (Simulated with fixed position or just simple image for now) */}
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
                    alt="Atmosphere"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'white', padding: '0 2rem' }}
            >
                <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>
                    Ruhe. Schönheit. Intimität.
                </h2>
                <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', opacity: 0.9 }}>
                    Ein Raum, der atmet.
                </p>
            </motion.div>
        </section>
    );
};

export default Atmosphere;
