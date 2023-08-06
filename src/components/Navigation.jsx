import { motion } from "framer-motion";

const variants = {
  open: {
    x: 0,
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    x: -200,
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const variantsItems = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 300, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 300 },
    },
  },
};
export const Navigation = ({ toggle }) => (
  <motion.ul className="mobile-nav__list" variants={variants}>
    <motion.li
      variants={variantsItems}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
    >
      <a href="#header" className="navigation-list__link">
        Головна
      </a>
    </motion.li>
    <motion.li
      variants={variantsItems}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
    >
      <a href="#hero" className="navigation-list__link">
        Галерея
      </a>
    </motion.li>
    <motion.li
      variants={variantsItems}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
    >
      <a href="#projects" className="navigation-list__link">
        Проєкти
      </a>
    </motion.li>
    <motion.li
      variants={variantsItems}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
    >
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://drive.google.com/file/d/1xgZYMaTHeaOyQ8XtzuYfeR5ciUO_-IyC/view?usp=sharing"
        className="navigation-list__link"
      >
        Сертифікати
      </a>
    </motion.li>
    <motion.li
      variants={variantsItems}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggle}
    >
      <a href="#footer" className="navigation-list__link">
        Контакти
      </a>
    </motion.li>
  </motion.ul>
);
