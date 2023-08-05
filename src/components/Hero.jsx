import heroImg from "../images/hero.jpg";
import heroImg2 from "../images/heroImg2.jpg";
import { motion } from "framer-motion";
import { useState } from "react";
export const Hero = () => {
  const [currentImg, setCurrentImg] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const onAnimationComplete = () => {
    setIsAnimating(false);
  };

  const imgArray = [heroImg, heroImg2];

  const handleClickPrev = () => {
    setCurrentImg((s) => (s -= 1));
    setIsAnimating(true);
  };
  const handleClickNext = () => {
    setCurrentImg((s) => (s += 1));
    setIsAnimating(true);
  };

  return (
    <section className=" section container hero-section" id="hero">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hero__left-part"
      >
        <h1 className="hero__title">
          Project <br />
          <span className="hero__title--second-word">Home</span>
        </h1>
        <div className="hero__button-wrapper">
          <button
            className="hero__button-arrow"
            onClick={handleClickPrev}
            disabled={currentImg === 1}
          >
            &#8592;
          </button>
          <button
            className="hero__button-arrow "
            onClick={handleClickNext}
            disabled={currentImg === imgArray.length}
          >
            &#8594;
          </button>
        </div>
        <p className="hero__pagination">
          <span className="hero__pagination--current">{`0${currentImg}`}</span>/
          <span className="hero__pagination--all">02</span>
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="hero__right-part"
      >
        <motion.img
          initial={{ opacity: 1, x: 0 }}
          animate={
            isAnimating ? { opacity: [0, 0.5, 1], x: [200, 100, 0] } : {}
          }
          transition={{ duration: 0.5 }}
          onAnimationComplete={onAnimationComplete}
          src={imgArray[currentImg - 1]}
          alt="beautiful buiding"
          className="hero__picture"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={
            currentImg === 1
              ? "https://www.fflogistics.com.ua/"
              : "https://andriisolodaiev.github.io/goit-react-hw-08-phonebook/"
          }
          className="hero__btn-details"
        >
          Подивитися &#8594;
        </a>
      </motion.div>
    </section>
  );
};
