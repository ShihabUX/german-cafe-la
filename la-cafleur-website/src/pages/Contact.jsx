import VisitContact from '../components/VisitContact';
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '80px', minHeight: '100vh' }}
        >
            <VisitContact />
        </motion.div>
    );
};

export default Contact;
