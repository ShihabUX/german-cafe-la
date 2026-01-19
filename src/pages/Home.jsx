import Hero from '../components/Hero';
import Concept from '../components/Concept';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Hero />
            <Concept />

            {/* Menu Teaser */}
            <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-white)', textAlign: 'center' }}>
                <h2 style={{ color: 'var(--color-teal)' }}>Unser Angebot</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.2rem' }}>
                    Entdecken Sie unsere Auswahl an handverlesenen Kaffeespezialitäten, Tees und hausgemachten Leckereien.
                </p>
                <Link
                    to="/menu"
                    style={{
                        display: 'inline-block',
                        padding: '1rem 2.5rem',
                        border: '1px solid var(--color-teal)',
                        color: 'var(--color-teal)',
                        fontFamily: 'var(--font-serif)',
                        fontSize: '1.2rem',
                        transition: 'all 0.3s'
                    }}
                >
                    Zum Menü
                </Link>
            </section>
        </motion.div>
    );
};

export default Home;
