import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { AiFillMoon, AiOutlineMoon } from "react-icons/ai";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  return (
    <button
      onClick={handleTheme}
      aria-label='Toggle theme'
      title='Toggle theme'
      className='btn btn-ghost btn-circle'
    >
      <AnimatePresence mode='wait'>
        {theme === "dark" ? (
          <motion.span
            key='dark'
            initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AiOutlineMoon className='text-2xl' />
          </motion.span>
        ) : (
          <motion.span
            key='light'
            initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AiFillMoon className='text-2xl' />
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}
