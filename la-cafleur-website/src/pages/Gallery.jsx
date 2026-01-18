import { motion } from 'framer-motion';

const images = [
    { id: 1, src: '/assets/concept_coffee_flowers_1768764017924.png', span: 2 },
    { id: 2, src: '/assets/interior_atmosphere_1768764033112.png', span: 1 },
    // Placeholders for future client uploads
    { id: 3, src: null, color: '#e0f2ef', span: 1 },
    { id: 4, src: null, color: '#fcfbf9', span: 2 },
    { id: 5, src: null, color: '#afe0d8', span: 1 },
    { id: 6, src: null, color: '#079385', span: 1 },
];

const Gallery = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '4rem', backgroundColor: 'var(--color-white)' }}
        >
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '1rem', color: 'var(--color-teal)' }}>Galerie</h1>
                <p style={{ textAlign: 'center', marginBottom: '4rem', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
                    Einblicke in unsere Welt. Momente der Ruhe, des Genuss und der Schönheit.
                </p>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem',
                    autoRows: '300px'
                }}>
                    {images.map((img, index) => (
                        <motion.div
                            key={img.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            style={{
                                gridColumn: `span ${window.innerWidth > 768 ? img.span : 1}`,
                                gridRow: `span ${img.span === 2 ? 2 : 1}`,
                                borderRadius: '4px',
                                overflow: 'hidden',
                                position: 'relative',
                                backgroundColor: img.color || '#eee'
                            }}
                        >
                            {img.src ? (
                                <img
                                    src={img.src}
                                    alt="Gallery Item"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            ) : (
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'rgba(0,0,0,0.1)',
                                    fontSize: '2rem'
                                }}>
                                    ✿
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Gallery;
