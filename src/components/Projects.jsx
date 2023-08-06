import { projects } from "../dictionary/projects";
import { motion } from "framer-motion";
export const Projects = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="section container" id="projects">
      <h2 className="main-tasks__title">Наші проекти</h2>
      <motion.ul
        className="projects__container"
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        {projects.map(({ id, img, descr, link }) => (
          <motion.li key={id} variants={item} className="projects__item">
            <img src={img} alt={`проєкт ${descr}`} className="projects__img" />

            <a className="projects__item-hover" href={link}>
              <h3 className="item__title">{descr}</h3>
              <p className="item__details">Детальніше &#8594;</p>
            </a>
          </motion.li>
        ))}
      </motion.ul>
      <div className="project__btn-wapper">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/AndriiSolodaiev"
          className="projects__all-btn"
        >
          Всі проекти &#8594;
        </a>
      </div>
    </section>
  );
};
