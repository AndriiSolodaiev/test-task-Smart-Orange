import img1 from "../images/task1.png";
import img2 from "../images/task2.png";
import { motion } from "framer-motion";
export const MainTasks = () => {
  return (
    <section className="section container" id="main-tasks">
      <h2 className=" main-tasks__title">Основні задачі</h2>
      <ul className="main-tasks__list">
        <motion.li
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="main-tasks__item"
        >
          <img className="main-tasks__img" src={img1} alt="номер 1" />
          <p className="main-tasks__descr">
            Створення комфортних умов та підвищення якості обслуговування
            клієнтів
          </p>
        </motion.li>
        <motion.li
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="main-tasks__item"
        >
          <img className="main-tasks__img" src={img2} alt="номер 2" />
          <p className="main-tasks__descr">
            Постійно вдосконалювати якість послуг шляхом навчання персоналу,
            закупівлі нового обладнання та посиленої маркетингової компанії на
            ринку
          </p>
        </motion.li>
      </ul>
    </section>
  );
};
