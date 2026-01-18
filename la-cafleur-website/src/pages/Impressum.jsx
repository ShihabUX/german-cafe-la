import { motion } from 'framer-motion';

const Impressum = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '100px', minHeight: '100vh', paddingBottom: '4rem', backgroundColor: 'var(--color-white)' }}
        >
            <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 2rem' }}>
                <h1 style={{ marginBottom: '2rem' }}>Impressum</h1>
                <p><strong>Angaben gemäß § 5 TMG</strong></p>
                <br />
                <p>
                    La Cafleur<br />
                    Heerstraße 76<br />
                    60488 Frankfurt Praunheim<br />
                </p>
                <br />
                <p><strong>Vertreten durch:</strong></p>
                <p>[Inhaber Name einfügen]</p>
                <br />
                <p><strong>Kontakt:</strong></p>
                <p>Telefon: 0176-24877072</p>
                <p>E-Mail: la.cafleur@outlook.de</p>
                <br />
                <p><strong>Umsatzsteuer-ID:</strong></p>
                <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz: [Nummer einfügen]</p>
            </div>
        </motion.div>
    );
};

export default Impressum;
