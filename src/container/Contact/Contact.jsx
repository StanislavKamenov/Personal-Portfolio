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
    <motion.div
      className="contact-form-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <h2>Contact Us</h2>
      <a href="mailto:stanislavkamenov39@gmail.com" className="email-box">stanislavkamenov39@gmail.com</a>
      {success && (
        <motion.p
          className="success-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Message sent successfully!
        </motion.p>
      )}
      <form onSubmit={handleSubmit} className="contact-form">
        <motion.input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          whileFocus={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
          transition={{ duration: 0.3 }}
          required
        />
        <motion.input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          whileFocus={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
          transition={{ duration: 0.3 }}
          required
        />
        <motion.textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          whileFocus={{ scale: 1.05, boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)" }}
          transition={{ duration: 0.3 }}
          required
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.1, backgroundColor: "#0056b3" }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
