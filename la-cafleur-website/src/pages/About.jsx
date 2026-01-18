import { motion } from 'framer-motion';

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--color-off-white)' }}
        >
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--color-teal)' }}>Unsere Philosophie</h1>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    style={{ textAlign: 'center', fontSize: '1.3rem', lineHeight: '2', fontFamily: 'var(--font-body)' }}
                >
                    <p style={{ marginBottom: '2rem' }}>
                        <strong>La Cafleur</strong> ist mehr als ein Café in Frankfurt. Es ist eine Einladung, die Hektik der Stadt hinter sich zu lassen und in eine Welt einzutauchen, in der Zeit keine Rolle spielt to.
                    </p>
                    <p style={{ marginBottom: '2rem' }}>
                        Unsere Vision verbindet zwei der schönsten Dinge der Welt: <strong>Kaffee und Blumen</strong>. Wir glauben, dass Genuss nicht nur schmecken, sondern auch gefühlt werden muss.
                    </p>

                    <div style={{ margin: '4rem 0' }}>
                        <img
                            src="/assets/concept_coffee_flowers_1768764017924.png"
                            alt="Coffee Art"
                            style={{ width: '100%', borderRadius: '4px', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}
                        />
                    </div>

                    <h2 style={{ fontSize: '2rem', margin: '3rem 0 1.5rem 0', color: 'var(--color-brown)' }}>Das Ritual</h2>
                    <p>
                        Jede Tasse wird bei uns mit Hingabe zubereitet. Wir verwenden Bohnen aus nachhaltigem Anbau und servieren sie in einer Atmosphäre, die von der Sanftheit und Schönheit der Natur inspiriert ist.
                    </p>
                    <p style={{ marginTop: '2rem', fontStyle: 'italic', color: 'var(--color-teal)' }}>
                        "Kaffee für den Geist, Blumen für die Seele."
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default About;
