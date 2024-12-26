import "./About.css";
import { motion } from "framer-motion";
import planning from "../../assets/planning.png";
import designing from "../../assets/designing.png";
import development from "../../assets/development.png";
import testing from "../../assets/testing.png";
import production from "../../assets/production.png";

function About() {
    return (
        <div className="App">
            <div className="title">
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0 }}
                >
                    From Idea To Reality:
                </motion.span>{" "}
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.1 }}
                >
                    My Dynamic Development Process
                </motion.span>
            </div>

            <div className="roadmap-container">
                <div className="roadmap-step">
                    <img src={planning} alt="Planning" className="roadmap-icon" />
                    <h3>Planning</h3>
                    <p>Conducted thorough research and developed a strategic plan for the design and functionality.</p>
                </div>
                <div className="roadmap-step">
                    <img src = {designing} alt="Designing" className="roadmap-icon" />
                    <h3>Designing</h3>
                    <p>Created a visually appealing and user-friendly interface for the website/application.</p>
                </div>
                <div className="roadmap-step">
                    <img src= {development} alt="Development" className="roadmap-icon" />
                    <h3>Development</h3>
                    <p>Coded the website/application using modern and advanced frameworks.</p>
                </div>
                <div className="roadmap-step">
                    <img src= {testing} alt="Testing" className="roadmap-icon" />
                    <h3>Testing</h3>
                    <p>Performed comprehensive testing to ensure optimal performance and stability.</p>
                </div>
                <div className="roadmap-step">
                    <img src= {production} alt="Production" className="roadmap-icon" />
                    <h3>Production</h3>
                    <p>Successfully deployed the website/application, bringing the vision to life.</p>
                </div>
            </div>
        </div>
    );
}

export default About;
