import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import Button from "./Button";
import "./Home.css";
const Home = () => {
  return (
    <motion.div
      className="home-container"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <img src="/profile.jpeg" alt="Binayak Joshi" className="profile-pic" />
      <h1 className="home-title">Binayak Joshi</h1>
      <p className="home-intro">
        Welcome to my portfolio! I'm a Full Stack Developer passionate about
        building clean, scalable, and interactive web applications.
      </p>
      <Button href="/resume.pdf" download className="resume-btn">
        Download Resume
        <FaDownload />
      </Button>
    </motion.div>
  );
};

export default Home;
