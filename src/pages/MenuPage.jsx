import Menu from '../components/Menu';
import { motion } from 'framer-motion';

const MenuPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ paddingTop: '80px', minHeight: '100vh' }}
        >
            <Menu />
        </motion.div>
    );
};

export default MenuPage;
