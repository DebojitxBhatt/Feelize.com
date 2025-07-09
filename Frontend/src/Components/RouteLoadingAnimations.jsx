import { motion, AnimatePresence } from 'framer-motion';

export function ToolsLoader({ show }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white bg-opacity-90"
        >
          <motion.svg
            width="100" height="100" viewBox="0 0 100 100"
            className="mb-6"
            initial={false}
          >
            {/* Hammer handle */}
            <motion.rect
              x="60" y="55" width="10" height="35" rx="4"
              fill="#DE4396"
              animate={{ rotate: [0, -20, 0], y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
              origin="65 55"
            />
            {/* Hammer head */}
            <motion.rect
              x="50" y="45" width="30" height="12" rx="4"
              fill="#333"
              animate={{ rotate: [0, -20, 0], y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
              origin="65 55"
            />
            {/* Screwdriver handle */}
            <motion.rect
              x="25" y="60" width="8" height="30" rx="3"
              fill="#0D1C9F"
              animate={{ rotate: [0, 20, 0], y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut', delay: 0.2 }}
              origin="29 60"
            />
            {/* Screwdriver blade */}
            <motion.rect
              x="27" y="40" width="4" height="20" rx="2"
              fill="#aaa"
              animate={{ rotate: [0, 20, 0], y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut', delay: 0.2 }}
              origin="29 60"
            />
          </motion.svg>
          <span className="text-lg font-semibold text-indigo-700 tracking-widest animate-pulse">
            Preparing tools...
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 