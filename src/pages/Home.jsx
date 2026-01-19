import Hero from '../components/Hero';

import Signature from '../components/Signature';
import Offerings from '../components/Offerings';
import MenuHighlights from '../components/MenuHighlights';
import Atmosphere from '../components/Atmosphere';
import Quality from '../components/Quality';
import VisitTeaser from '../components/VisitTeaser';
import Socials from '../components/Socials';
import Invitation from '../components/Invitation';
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
            <Signature />
            <Offerings />
            <MenuHighlights />
            <Atmosphere />
            <Quality />
            <VisitTeaser />
            <Socials />
            <Invitation />
        </motion.div>
    );
};

export default Home;
