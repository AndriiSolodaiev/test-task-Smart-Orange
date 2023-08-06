import img1 from "../images/about1.jpg";
import img2 from "../images/about2.jpg";
import img3 from "../images/about3.jpg";
import { motion } from "framer-motion";
export const About = () => {
  return (
    <section className="section container">
      <div className=" about-container">
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="about__img-container-1"
        >
          <img className="about__img1" src={img1} alt="building" />{" "}
          <motion.img
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="about__img2"
            src={img2}
            alt="building"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="about__img-container-2"
        >
          <img className="about__img3" src={img3} alt="building" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="about__text-wrapper"
        >
          <h2 className="section-title">Про компанію</h2>
          <p className="about__text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <a
            href="https://andriisolodaiev.github.io/CV-Andrii-Solodaiev-Frontend-Developer/"
            target="_blank"
            rel="noopener noreferrer"
            className=" about__btn-details"
          >
            Читати &#8594;
          </a>
        </motion.div>
      </div>
    </section>
  );
};
