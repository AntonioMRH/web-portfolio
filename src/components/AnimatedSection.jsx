import { motion } from 'framer-motion'

function AnimatedSection({ children, delay = 0 }) {
    return (
        <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay }}
            mb={6}
        >
            {children}
        </motion.div>
    )
}

export default AnimatedSection
