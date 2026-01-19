import { motion } from 'framer-motion';

const VisitTeaser = () => {
    return (
        <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--color-off-white)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '4rem', alignItems: 'center' }}>

                {/* Text Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ flex: '1 1 300px' }}
                >
                    <h2 style={{ fontSize: '2rem', fontFamily: 'var(--font-serif)', color: 'var(--color-teal)', marginBottom: '1.5rem' }}>
                        Ein ruhiger Ort zum Innehalten.
                    </h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: '#555' }}>
                        Heerstraße 76, 60488 Frankfurt Praunheim
                    </p>
                    <p style={{ fontSize: '1.1rem', color: '#555' }}>
                        Mo – Fr: 09:00 – 18:00<br />
                        Sa: 09:00 – 17:00<br />
                        So: 09:00 – 13:00
                    </p>
                </motion.div>

                {/* Map/Image Placeholder */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ flex: '1 1 300px', height: '300px', borderRadius: '2px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.212450302824!2d8.62312631571738!3d50.11964297943026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0bd023030a2f%3A0x6296716a5631770!2sHeerstra%C3%9Fe%2076%2C%2060488%20Frankfurt%20am%20Main!5e0!3m2!1sen!2sde!4v1679000000000!5m2!1sen!2sde"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="La Cafleur Location"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default VisitTeaser;
