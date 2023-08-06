import img from "../images/contactForm.jpg";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
const initialFormData = {
  name: "",
  phone: "",
  email: "",
  goods: "",
  message: "",
};

export const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
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
  const handleChange = (e) => {
    const { name, value } = e.currentTarget;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData(initialFormData);
    toast.success("Заявку відправлено! Дякуємо за звернення!");
  };
  return (
    <section className="container section contact-form-section">
      <h2 className="section-title">Зв'яжіться з нами</h2>
      <div className="form__container ">
        <motion.form
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="form"
          onSubmit={handleSubmit}
        >
          <motion.label variants={item} className="form__label">
            <input
              className="form__input"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {!formData.name && <div className="placeholder">Ім'я</div>}
          </motion.label>
          <motion.label variants={item} className="form__label">
            <input
              className="form__input"
              type="text"
              required
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {!formData.phone && (
              <div className="placeholder">
                Номер телефону<span className="placeholder--required">*</span>
              </div>
            )}
          </motion.label>
          <motion.label variants={item} className="form__label">
            <input
              className="form__input"
              type="text"
              required
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {!formData.email && (
              <div className="placeholder">
                E-mail<span className="placeholder--required">*</span>
              </div>
            )}
          </motion.label>
          <motion.label variants={item} className="form__label">
            <input
              className="form__input"
              type="text"
              name="goods"
              value={formData.goods}
              onChange={handleChange}
            />
            {!formData.goods && (
              <div className="placeholder">Товари/послуги, які цікавлять</div>
            )}
          </motion.label>
          <motion.label variants={item} className="form__label">
            <textarea
              className="form__textarea"
              required
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {!formData.message && (
              <div className="placeholder--texarea">
                Повідомлення<span className="placeholder--required">*</span>
              </div>
            )}
          </motion.label>
          <p className="form__policy">
            Надсилаючи заявку Ви погоджуєтесь з політикою конфіденційності
          </p>
          <button className="projects__all-btn">Відправити &#8594;</button>
        </motion.form>
        <img
          src={img}
          alt="чоловік розмовляє по телефону"
          className="form__img"
        />
      </div>
    </section>
  );
};
