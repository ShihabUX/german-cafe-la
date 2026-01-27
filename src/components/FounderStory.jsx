import { motion } from 'framer-motion';

const FounderStory = () => {
    return (
        <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-off-white)' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center' }}
                >
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontStyle: 'italic', color: 'var(--color-brown)', opacity: 0.7, marginBottom: '1rem', display: 'block' }}>
                        Über uns
                    </span>
                    <h2 style={{ color: 'var(--color-teal)', marginBottom: '2rem' }}>
                        Mehr als nur Kaffee. Ein Herzensprojekt.
                    </h2>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>
                        La Cafleur entstand nicht am Reißbrett, sondern aus einem Wunsch: Einen Ort zu schaffen, an dem man nicht nur "bestellt", sondern ankommt. Wir wollten weg von sterilen Coffee-Shop-Ketten, hin zu echtem Austausch.
                    </p>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', marginBottom: '2rem' }}>
                        Es geht uns nicht um Perfektion. Es geht um das Lächeln, wenn wir Ihnen Ihre Lieblingstasse bringen. Um das "Hallo", das von Herzen kommt. Wir wachsen mit Ihnen, Schritt für Schritt, Gespräch für Gespräch.
                    </p>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-brown)', fontStyle: 'italic' }}>
                        - Ihre Gastgeber
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FounderStory;
