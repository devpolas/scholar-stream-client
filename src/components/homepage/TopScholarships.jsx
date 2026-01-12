import ScholarshipCard from "../scholarships/ScholarshipCard";
import ScholarshipSkeleton from "../skeleton/ScholarshipSkeleton";
import { AnimatePresence, motion } from "motion/react";

export default function TopScholarships({ data = [], isLoading }) {
  const topScholarship = [...data].slice(0, 6);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div className='py-12 px-4'>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className='text-3xl md:text-4xl font-bold text-center mb-8 text-primary'
      >
        Top Scholarships
      </motion.h2>
      {isLoading ? (
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          {Array.from({ length: 6 }, (_, i) => (
            <ScholarshipSkeleton key={i} />
          ))}
        </div>
      ) : (
        <motion.div
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3'
        >
          <AnimatePresence>
            {topScholarship &&
              topScholarship.map((el) => (
                <ScholarshipCard key={el._id} scholarship={el} />
              ))}
          </AnimatePresence>
        </motion.div>
      )}
    </motion.div>
  );
}
