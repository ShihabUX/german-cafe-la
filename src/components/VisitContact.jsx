import { motion } from 'framer-motion';

const VisitContact = () => {
    return (
        <section id="visit" style={{ padding: 'var(--spacing-section) var(--spacing-container)', backgroundColor: 'var(--color-off-white)' }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                gap: '4rem'
            }}>

                {/* Info Column */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 style={{ textAlign: 'left', color: 'var(--color-teal)' }}>Besuchen Sie uns</h2>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--color-brown)', marginBottom: '0.5rem' }}>Standort</h3>
                        <p>Heerstraße 76</p>
                        <p>60488 Frankfurt Praunheim</p>
                        <div style={{
                            marginTop: '1rem',
                            width: '100%',
                            height: '250px',
                            borderRadius: '4px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                        }}>
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
                        </div>
                    </div>

                    <div style={{ marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--color-brown)', marginBottom: '0.5rem' }}>Öffnungszeiten</h3>
                        <ul style={{ lineHeight: '2' }}>
                            <li style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '300px' }}>
                                <span>Mo. – Fr.</span>
                                <span>09:00 – 18:00 Uhr</span>
                            </li>
                            <li style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '300px' }}>
                                <span>Sa.</span>
                                <span>09:00 – 17:00 Uhr</span>
                            </li>
                            <li style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '300px' }}>
                                <span>So.</span>
                                <span>09:00 – 13:00 Uhr</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 style={{ fontSize: '1.2rem', color: 'var(--color-brown)', marginBottom: '0.5rem' }}>Kontakt</h3>
                        <p>Tel: 0176-24877072</p>
                        <p>Email: la.cafleur@outlook.de</p>
                    </div>
                </motion.div>

                {/* Form Column */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ backgroundColor: 'white', padding: '2rem', borderRadius: '4px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}
                >
                    <h3 style={{ color: 'var(--color-teal)', marginBottom: '1.5rem' }}>Schreiben Sie uns</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Name</label>
                            <input
                                type="text"
                                style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '2px', fontFamily: 'inherit' }}
                                placeholder="Ihr Name"
                            />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Email</label>
                            <input
                                type="email"
                                style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '2px', fontFamily: 'inherit' }}
                                placeholder="Ihre Email"
                            />
                        </div>
                        <div style={{ marginBottom: '1.5rem' }}>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Nachricht</label>
                            <textarea
                                rows="4"
                                style={{ width: '100%', padding: '0.8rem', border: '1px solid #ddd', borderRadius: '2px', fontFamily: 'inherit' }}
                                placeholder="Wie können wir helfen?"
                            ></textarea>
                        </div>
                        <button
                            style={{
                                backgroundColor: 'var(--color-teal)',
                                color: 'white',
                                border: 'none',
                                padding: '1rem 2rem',
                                fontFamily: 'var(--font-serif)',
                                fontSize: '1.1rem',
                                cursor: 'pointer',
                                width: '100%',
                                borderRadius: '2px'
                            }}
                        >
                            Absenden
                        </button>
                    </form>
                </motion.div>

            </div>
        </section>
    );
};

export default VisitContact;
