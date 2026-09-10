import "./About.css";
import { motion } from "framer-motion";
import { FaLightbulb, FaPaintBrush, FaCode, FaCheckDouble, FaRocket } from "react-icons/fa";

const steps = [
    { title: "Planning", icon: <FaLightbulb />, desc: "Conducted thorough research and developed a strategic plan for the design and functionality." },
    { title: "Designing", icon: <FaPaintBrush />, desc: "Created a visually appealing and user-friendly interface for the website/application." },
    { title: "Development", icon: <FaCode />, desc: "Coded the website/application using modern and advanced frameworks." },
    { title: "Testing", icon: <FaCheckDouble />, desc: "Performed comprehensive testing to ensure optimal performance and stability." },
    { title: "Production", icon: <FaRocket />, desc: "Successfully deployed the website/application, bringing the vision to life." },
];

function About() {
    return (
        <section className="about-section" id="About">
            <motion.div 
                className="about-title-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="about-title">
                    <span className="accent">From Idea</span> To Reality
                </h2>
                <p className="about-subtitle">My Dynamic Development Process</p>
            </motion.div>

            <div className="timeline">
                <div className="timeline-line"></div>
                {steps.map((step, index) => (
                    <motion.div 
                        className={`timeline-step ${index % 2 === 0 ? 'left' : 'right'}`}
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="timeline-content glass-panel">
                            <div className="step-number">0{index + 1}</div>
                            <div className="step-icon">{step.icon}</div>
                            <div className="step-text">
                                <h3>{step.title}</h3>
                                <p>{step.desc}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default About;


