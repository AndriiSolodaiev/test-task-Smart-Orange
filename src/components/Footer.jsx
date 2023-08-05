import logo from "../images/logo-footer.png";
import { motion } from "framer-motion";
export const Footer = () => {
  return (
    <footer className=" section footer-container " id="footer">
      <div className="container footer__flex-container">
        <motion.img
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          src={logo}
          alt="лого"
          className="footer__logo"
        />
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="footer__block-title">Інформація</h3>
          <nav>
            <ul className="footer__nav-list">
              <li>
                <a href="#header">Головна</a>
              </li>
              <li>
                <a href="#hero">Галерея</a>
              </li>
              <li>
                <a href="#projects">Проекти</a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1xgZYMaTHeaOyQ8XtzuYfeR5ciUO_-IyC/view?usp=sharing"
                >
                  Сертифікати
                </a>
              </li>
              <li>
                <a href="#footer">Контакти</a>
              </li>
            </ul>
          </nav>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="footer__block-title">Контакти</h3>
          <div className="footer__contacts-list">
            <a
              href="https://goo.gl/maps/sBkMDh7T8zp3NFwFA"
              className="contacts__link"
            >
              <svg className="contacts__svg">
                <use href="../symbol-defs.svg#icon-location"></use>
              </svg>
              100000, Республіка Казахстан, м. Караганда, вул. Телевізійна 10
            </a>
            <a href="tel:+380634249687" className="contacts__link">
              <svg className="contacts__svg">
                <use href="../symbol-defs.svg#icon-phone"></use>
              </svg>
              +38 (063) 424 96 87
            </a>
            <a
              href="mailto:andrii.solodaiev@gmail.com"
              className="contacts__link"
            >
              <svg className="contacts__svg">
                <use href="../symbol-defs.svg#icon-envelope"></use>
              </svg>
              andrii.solodaiev@gmail.com
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <h3 className="footer__block-title">Соціальні мережі</h3>
          <ul className="footer__socials-list">
            <li>
              <a href="https://www.facebook.com/">
                <svg className="socials__svg">
                  <use href="../symbol-defs.svg#icon-facebook"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/?lang=uk">
                <svg className="socials__svg">
                  <use href="../symbol-defs.svg#icon-twitter"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/andrii-solodaiev/">
                <svg className="socials__svg">
                  <use href="../symbol-defs.svg#icon-linked-in"></use>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://ru.pinterest.com/">
                <svg className="socials__svg">
                  <use href="../symbol-defs.svg#icon-pininterest"></use>
                </svg>
              </a>
            </li>
          </ul>
        </motion.div>
      </div>
      <div className="footer__license">
        <p className="footer__license-text">
          © 2019 Digital Project. Всі права захищені.
        </p>
      </div>
    </footer>
  );
};
