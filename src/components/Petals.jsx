import { motion } from 'framer-motion';

const Petals = () => {
    // Generate random petals
    const petals = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        x: Math.random() * 100, // random start position %
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 10,
        size: 10 + Math.random() * 20,
    }));

    return (
        <div className="petals-container" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            overflow: 'hidden',
            zIndex: 1
        }}>
            {petals.map((petal) => (
                <motion.div
                    key={petal.id}
                    initial={{ y: -50, x: `${petal.x}vw`, opacity: 0, rotate: 0 }}
                    animate={{
                        y: '100vh',
                        x: [`${petal.x}vw`, `${petal.x + (Math.random() * 10 - 5)}vw`],
                        opacity: [0, 0.8, 0],
                        rotate: 360,
                    }}
                    transition={{
                        duration: petal.duration,
                        repeat: Infinity,
                        delay: petal.delay,
                        ease: "linear",
                    }}
                    style={{
                        position: 'absolute',
                        width: petal.size,
                        height: petal.size,
                        backgroundColor: 'rgba(255, 230, 240, 0.6)',
                        borderRadius: '50% 0 50% 50%', // Petal shape approximation
                    }}
                />
            ))}
        </div>
    );
};

export default Petals;
