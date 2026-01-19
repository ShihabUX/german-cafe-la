import { motion } from 'framer-motion';

const Signature = () => {
    return (
        <section id="signature" style={{ padding: 'var(--spacing-section) var(--spacing-container)', backgroundColor: 'var(--color-off-white)' }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '5rem',
                alignItems: 'center'
            }}>
                {/* Visual Side */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative' }}
                >
                    <div style={{
                        position: 'absolute',
                        top: '-20px',
                        left: '-20px',
                        width: '100%',
                        height: '100%',
                        border: '1px solid var(--color-mint)',
                        zIndex: 0
                    }}></div>
                    <img
                        src="/assets/concept_coffee_flowers_1768764017924.png"
                        alt="Coffee served with flowers"
                        style={{
                            width: '100%',
                            borderRadius: '2px',
                            position: 'relative',
                            zIndex: 1,
                            boxShadow: '0 15px 30px rgba(0,0,0,0.05)'
                        }}
                    />
                </motion.div>

                {/* Text Side */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span style={{
                        fontFamily: 'var(--font-body)',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        fontSize: '0.9rem',
                        color: 'var(--color-gold)',
                        display: 'block',
                        marginBottom: '1rem'
                    }}>
                        Unsere Signatur
                    </span>
                    <h2 style={{ textAlign: 'left', color: 'var(--color-teal)', marginBottom: '1.5rem' }}>
                        Wasser, Blume, Kaffee.
                    </h2>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: 'var(--color-brown)', marginBottom: '1.5rem' }}>
                        Bei uns wird Kaffee nicht einfach serviert. Er wird zelebriert. Zu jeder Tasse reichen wir ein Glas Wasser mit einer essbaren Blüte – eine kleine Geste, die den Moment entschleunigt.
                    </p>
                    <p style={{ fontSize: '1.15rem', lineHeight: '1.8', fontStyle: 'italic', opacity: 0.8 }}>
                        "Es geht nicht nur um den Geschmack. Es geht um das Gefühl, willkommen zu sein."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Signature;
