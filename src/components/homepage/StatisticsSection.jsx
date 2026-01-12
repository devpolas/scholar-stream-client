import { motion } from "motion/react";
import CountUp from "react-countup";
import {
  HiOutlineAcademicCap,
  HiOutlineUsers,
  HiOutlineDocumentCheck,
  HiOutlineGlobeAlt,
} from "react-icons/hi2";

const stats = [
  {
    icon: <HiOutlineAcademicCap />,
    value: 1200,
    suffix: "+",
    label: "Scholarships Listed",
  },
  {
    icon: <HiOutlineUsers />,
    value: 35000,
    suffix: "+",
    label: "Students Registered",
  },
  {
    icon: <HiOutlineDocumentCheck />,
    value: 18000,
    suffix: "+",
    label: "Applications Submitted",
  },
  {
    icon: <HiOutlineGlobeAlt />,
    value: 45,
    suffix: "+",
    label: "Partner Institutions",
  },
];

export default function StatisticsSection() {
  return (
    <section className='py-16 bg-base-100'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-4 text-primary'>
            Our Impact So Far
          </h2>
          <p className='text-lg text-base-content/70 max-w-2xl mx-auto'>
            ScholarStream is empowering students and institutions worldwide
            through accessible scholarship opportunities.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='card bg-base-200 shadow-md border border-blue-100 hover:shadow-lg transition'
            >
              <div className='card-body items-center text-center'>
                <div className='text-5xl text-primary mb-3'>{stat.icon}</div>

                <h3 className='text-4xl font-bold'>
                  <CountUp
                    end={stat.value}
                    duration={2}
                    separator=','
                    suffix={stat.suffix}
                  />
                </h3>

                <p className='text-base-content/70 mt-2'>{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
