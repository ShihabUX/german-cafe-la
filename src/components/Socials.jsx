import { motion } from 'framer-motion';
import { FaInstagram } from 'react-icons/fa';

const Socials = () => {
    return (
        <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-white)', textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
            >
                <div style={{ fontSize: '2.5rem', color: 'var(--color-brown)', marginBottom: '1rem' }}>
                    <FaInstagram />
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '1rem', color: 'var(--color-teal)' }}>
                    @cafleur.la
                </h2>
                <p style={{ maxWidth: '500px', margin: '0 auto 2rem auto', fontSize: '1.1rem', color: '#777' }}>
                    Folgen Sie uns für tägliche Inspirationen, Blumenarrangements und Kaffeekunst.
                </p>
                <a
                    href="https://instagram.com/cafleur.la"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        textDecoration: 'none',
                        color: 'var(--color-brown)',
                        borderBottom: '1px solid currentColor',
                        paddingBottom: '2px',
                        fontSize: '1rem',
                        letterSpacing: '1px',
                        textTransform: 'uppercase'
                    }}
                >
                    Instagram Besuchen
                </a>
            </motion.div>
        </section>
    );
};

export default Socials;
