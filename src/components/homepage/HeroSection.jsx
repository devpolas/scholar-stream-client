import { useNavigate } from "react-router";
import HeroButton from "../ui/HeroButton";
import heroImg from "./../../assets/scholarship-for-students.webp";
import { motion } from "motion/react";
export default function HeroSection() {
  const navigate = useNavigate();
  function handelClick() {
    navigate("/all-scholarships");
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className='hero min-h-[40vh]'
      style={{
        backgroundImage: `url(${heroImg})`,
      }}
    >
      <div className='hero-overlay'></div>
      <div className='hero-overlay'></div>
      <div className='hero-content h-[60vh] text-neutral-content text-center'>
        <div className='max-w-2xl'>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className='text-3xl md:text-4xl font-bold text-center mb-8 text-primary'
          >
            Welcome to <span className='text-green-700'>Scholarship</span>{" "}
            Stream
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className='mb-5 text-lg'
          >
            The Scholarship Stream is designed to recognize exceptional students
            who demonstrate strong academic performance, leadership potential,
            and a commitment to their community.
          </motion.p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.4 }}
          >
            <HeroButton handelClick={handelClick} />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
