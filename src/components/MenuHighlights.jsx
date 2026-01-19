import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MenuHighlights = () => {
    const categories = [
        { title: "Espresso & Coffee", desc: "Von Flat White bis Espresso Tonic." },
        { title: "Hausgemachte Kuchen", desc: "Täglich frisch und mit Liebe gebacken." },
        { title: "Frühstück & Snacks", desc: "Klein, fein und regional." }
    ];

    return (
        <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-off-white)', textAlign: 'center' }}>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ color: 'var(--color-teal)', marginBottom: '3rem' }}
            >
                Kleine Auszüge
            </motion.h2>

            <div style={{
                maxWidth: '1000px',
                margin: '0 auto 4rem auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem'
            }}>
                {categories.map((cat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        style={{
                            padding: '2rem',
                            backgroundColor: 'white',
                            borderRadius: '2px',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
                        }}
                    >
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.3rem', color: 'var(--color-brown)', marginBottom: '1rem' }}>
                            {cat.title}
                        </h3>
                        <p style={{ opacity: 0.7 }}>{cat.desc}</p>
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
            >
                <Link
                    to="/menu"
                    style={{
                        display: 'inline-block',
                        padding: '1rem 3rem',
                        border: '1px solid var(--color-teal)',
                        color: 'var(--color-teal)',
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.1rem',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        textDecoration: 'none',
                        transition: 'all 0.3s'
                    }}
                    onMouseOver={(e) => {
                        e.target.style.backgroundColor = 'var(--color-teal)';
                        e.target.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'transparent';
                        e.target.style.color = 'var(--color-teal)';
                    }}
                >
                    Zum Ganzen Menü
                </Link>
            </motion.div>
        </section>
    );
};

export default MenuHighlights;
