import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MENU_DATA = {
    drinks: [
        {
            category: "Kaffee & Espresso", items: [
                { name: "Kaffee", price: "3,00 €" },
                { name: "Cappuccino", price: "3,50 €" },
                { name: "Milchkaffee", price: "4,30 €" },
                { name: "Latte Macchiato", price: "4,20 €" },
                { name: "Flat White", price: "3,90 €" },
                { name: "Türkischer Mokka", price: "2,90 €" },
            ]
        },
        {
            category: "Tee & Kräuter", items: [
                { name: "Schwarzer Tee", price: "1,50 €" },
                { name: "Tee (klassisch)", price: "2,00 €" },
                { name: "Marokkanischer Minztee", price: "4,90 €" },
                { name: "Blumentee", price: "6,50 €", highlight: true },
                { name: "Bio Tee", price: "4,50 €" },
            ]
        },
        {
            category: "Spezialitäten", items: [
                { name: "Chai Latte", price: "3,90 €" },
                { name: "Dirty Chai Latte", price: "4,50 €" },
                { name: "Heiße Schokolade", price: "2,30 €" },
                { name: "Matcha Latte", price: "5,20 €" },
            ]
        },
    ],
    food: [
        {
            category: "Herzhaft (Savory)", items: [
                { name: "Sandwich", price: "4,90 €" },
                { name: "Bagel", price: "6,90 €" },
                { name: "Bowl", price: "7,90 €" },
                { name: "Bowl (Becher)", price: "4,20 €" },
            ]
        },
        {
            category: "Gebäck & Süsses", items: [
                { name: "Croissant", price: "1,80 €" },
                { name: "Special Croissant", price: "3,30 €" },
                { name: "Bananenbrot", price: "3,50 €" },
                { name: "Kuchen", price: "4,50 €" },
                { name: "Torten", price: "5,90 €" },
            ]
        },
        {
            category: "Lunch Special (11:00 – 14:00)", items: [
                { name: "Brötchen/Bowl mit Käffchen", price: "7,00 €", desc: "statt 8,50 €" },
            ]
        },
    ]
};

const Menu = () => {
    const [activeTab, setActiveTab] = useState('drinks');

    return (
        <section id="menu" style={{ padding: 'var(--spacing-section) var(--spacing-container)', backgroundColor: 'var(--color-white)' }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                <h2 style={{ color: 'var(--color-teal)' }}>Unser Menü</h2>

                {/* Tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem', gap: '2rem' }}>
                    {['drinks', 'food'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            style={{
                                background: 'none',
                                border: 'none',
                                fontSize: '1.5rem',
                                fontFamily: 'var(--font-serif)',
                                cursor: 'pointer',
                                paddingBottom: '0.5rem',
                                borderBottom: activeTab === tab ? '2px solid var(--color-teal)' : '2px solid transparent',
                                color: activeTab === tab ? 'var(--color-teal)' : '#ccc',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {tab === 'drinks' ? 'Getränke' : 'Speisen'}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                    >
                        {MENU_DATA[activeTab].map((section, idx) => (
                            <div key={idx} style={{ marginBottom: '3rem' }}>
                                <h3 style={{
                                    textAlign: 'center',
                                    fontSize: '1.5rem',
                                    marginBottom: '1.5rem',
                                    color: 'var(--color-brown)',
                                    borderBottom: '1px solid var(--color-mint)',
                                    display: 'inline-block',
                                    paddingBottom: '0.5rem',
                                    width: '100%'
                                }}>
                                    {section.category}
                                </h3>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '1rem 3rem' }}>
                                    {section.items.map((item, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'baseline', width: '100%' }}>
                                            <div style={{ flex: 1, paddingRight: '0.5rem' }}>
                                                <span style={{ fontSize: '1.1rem', fontWeight: item.highlight ? 'bold' : 'normal', display: 'inline-block' }}>{item.name}</span>
                                                {item.desc && <span style={{ display: 'block', fontSize: '0.9rem', color: '#888', fontStyle: 'italic' }}>{item.desc}</span>}
                                            </div>

                                            {/* Dotted Leader */}
                                            <div style={{
                                                flex: '1 1 auto',
                                                borderBottom: '1px dotted #ccc',
                                                margin: '0 0.5rem',
                                                position: 'relative',
                                                top: '-5px',
                                                minWidth: '20px'
                                            }}></div>

                                            <span style={{
                                                fontFamily: 'var(--font-serif)',
                                                fontSize: '1.2rem',
                                                color: 'var(--color-teal)',
                                                whiteSpace: 'nowrap'
                                            }}>
                                                {item.price}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Menu;
