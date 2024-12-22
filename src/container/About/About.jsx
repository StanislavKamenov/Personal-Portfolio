import "./About.css";
import { motion } from "framer-motion";

function About() {
    const title = ["My", "mission"];
    const subtitle = ["From", "idea", "to", "reality"];

    return (
        <div className="App">
            <div className="title">
                {title.map((el, i) => (
                    <motion.span
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 5,
                            delay: i / 10,
                        }}
                        key={i}
                    >
                        {el}{" "}
                    </motion.span>
                ))}
            </div>

            <div className="subtitle">
                {subtitle.map((el, i) => (
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 5,
                            delay: i / 10 + 0.5,
                        }}
                        key={i}
                    >
                        {el}{" "}
                    </motion.span>
                ))}
            </div>
        </div>
    );
}


export default About
