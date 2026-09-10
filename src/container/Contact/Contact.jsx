import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import "./contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_8skgeef",
        "template_tqcjpbk",
        formData,
        "YZwYG0U5R04LZpgqB"
      )
      .then(
        () => {
          setSuccess(true);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <section className="contact-section" id="Contact">
      <motion.div
        className="contact-container glass-panel"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-header">
          <h2 className="contact-title">Let's <span className="accent">Talk</span></h2>
          <p className="contact-subtitle">Got a project in mind? Shoot me a message.</p>
          <a href="mailto:stanislavkamenov39@gmail.com" className="email-link">
            stanislavkamenov39@gmail.com
          </a>
        </div>

        <div className="contact-form-wrapper">
          {success && (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Message sent successfully! ✨
            </motion.div>
          )}
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="input-group">
              <motion.input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                required
              />
            </div>
            <div className="input-group">
              <motion.input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                required
              />
            </div>
            <div className="input-group">
              <motion.textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                whileFocus={{ scale: 1.02 }}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;

