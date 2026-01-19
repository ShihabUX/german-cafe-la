import { motion } from 'framer-motion';

const Quality = () => {
    return (
        <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-white)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ color: 'var(--color-teal)', marginBottom: '3rem' }}
                >
                    Handwerk & Herkunft
                </motion.h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-brown)', marginBottom: '0.5rem' }}>Der Espresso</h3>
                        <p style={{ fontSize: '1.1rem', color: '#555' }}>
                            Zubereitet an unserer Siebträgermaschine. Bohnen aus fairem Handel, schonend geröstet für das volle Aroma.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--color-brown)', marginBottom: '0.5rem' }}>Die Milch</h3>
                        <p style={{ fontSize: '1.1rem', color: '#555' }}>
                            Frische Weidemilch aus der Region oder hochwertige pflanzliche Alternativen. Perfekter Schaum, perfekte Temperatur.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Quality;
