import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Invitation = () => {
    return (
        <section style={{ padding: '8rem 2rem', backgroundColor: 'var(--color-off-white)', textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    color: 'var(--color-teal)',
                    lineHeight: '1.4',
                    marginBottom: '3rem'
                }}>
                    "Come by. Slow down. Enjoy."
                </p>
                <Link
                    to="/contact"
                    style={{
                        display: 'inline-block',
                        padding: '1.2rem 3.5rem',
                        backgroundColor: 'var(--color-brown)',
                        color: 'white',
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        textDecoration: 'none',
                        borderRadius: '2px',
                        transition: 'background 0.3s'
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = '#4a3f35'}
                    onMouseOut={(e) => e.target.style.backgroundColor = 'var(--color-brown)'}
                >
                    Visit La Cafleur
                </Link>
            </motion.div>
        </section>
    );
};

export default Invitation;
