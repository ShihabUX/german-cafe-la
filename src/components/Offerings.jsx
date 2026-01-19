import { motion } from 'framer-motion';
import { PiCoffeeBeanLight, PiPlantLight, PiCookieLight, PiWifiHighLight } from "react-icons/pi";

const Offerings = () => {
    const items = [
        { icon: <PiCoffeeBeanLight />, title: "Specialty Coffee", text: "Fairtrade & Organic" },
        { icon: <PiPlantLight />, title: "Floral Atmosphere", text: "Ruhe & Inspiration" },
        { icon: <PiCookieLight />, title: "Fresh Pastries", text: "Hausgemacht & Lecker" },
        { icon: <PiWifiHighLight />, title: "Free Wi-Fi", text: "Arbeiten & Verweilen" },
    ];

    return (
        <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-white)' }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '3rem',
                textAlign: 'center'
            }}>
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                        <div style={{ fontSize: '3rem', color: 'var(--color-teal)', marginBottom: '1rem', opacity: 0.8 }}>
                            {item.icon}
                        </div>
                        <h3 style={{ fontSize: '1.1rem', fontFamily: 'var(--font-serif)', marginBottom: '0.5rem', letterSpacing: '1px' }}>
                            {item.title}
                        </h3>
                        <p style={{ fontSize: '0.95rem', opacity: 0.7 }}>
                            {item.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Offerings;
