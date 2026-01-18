import { motion } from 'framer-motion';

const Concept = () => {
    return (
        <section id="concept" style={{ padding: 'var(--spacing-section) var(--spacing-container)', backgroundColor: 'var(--color-off-white)' }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '4rem',
                alignItems: 'center'
            }}>

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ textAlign: 'left', color: 'var(--color-teal)' }}>
                        Genuss meets Gefühl
                    </h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--color-brown)' }}>
                        La Cafleur ist nicht nur ein Café. Es ist ein Ort, an dem Kaffee auf Blumen trifft – eine Oase der Ruhe inmitten der Stadt.
                    </p>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', fontStyle: 'italic' }}>
                        "Ein tiefer Atemzug in einem blumenerfüllten Raum, wo die Zeit langsamer läuft und jeder Schluck zu einem emotionalen Ritual wird."
                    </p>
                    <p style={{ fontSize: '1.1rem' }}>
                        Wir laden Sie ein, den Alltag für einen Moment zu vergessen. Genießen Sie hochwertige Kaffeespezialitäten, hausgemachte Leckereien und die einzigartige Atmosphäre, die wir mit viel Liebe zum Detail für Sie geschaffen haben.
                    </p>
                </motion.div>

                {/* Image */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    style={{ position: 'relative' }}
                >
                    <div style={{
                        position: 'absolute',
                        top: '-20px',
                        right: '-20px',
                        width: '100%',
                        height: '100%',
                        border: '2px solid var(--color-mint)',
                        zIndex: 0
                    }}></div>
                    <img
                        src="/assets/concept_coffee_flowers_1768764017924.png"
                        alt="Coffee and Flowers"
                        style={{
                            width: '100%',
                            borderRadius: '4px',
                            position: 'relative',
                            zIndex: 1,
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                        }}
                    />
                </motion.div>

            </div>
        </section>
    );
};

export default Concept;
