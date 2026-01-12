import { motion } from "motion/react";
import {
  HiOutlineSearch,
  HiOutlineDocumentText,
  HiOutlineAcademicCap,
  HiOutlineShieldCheck,
  HiOutlineClock,
  HiOutlineUsers,
} from "react-icons/hi";

const features = [
  {
    icon: <HiOutlineSearch />,
    title: "Smart Scholarship Search",
    description:
      "Find scholarships easily using filters based on country, degree level, and deadlines.",
  },
  {
    icon: <HiOutlineDocumentText />,
    title: "Simple Application Process",
    description:
      "Apply to multiple scholarships through a streamlined and user-friendly interface.",
  },
  {
    icon: <HiOutlineAcademicCap />,
    title: "Trusted Institutions",
    description:
      "Scholarships posted directly by verified universities and organizations.",
  },
  {
    icon: <HiOutlineClock />,
    title: "Deadline Tracking",
    description:
      "Never miss an opportunity with real-time deadline alerts and updates.",
  },
  {
    icon: <HiOutlineUsers />,
    title: "Student-Centered Platform",
    description:
      "Designed to support students at every step of their scholarship journey.",
  },
  {
    icon: <HiOutlineShieldCheck />,
    title: "Secure & Reliable",
    description:
      "Your data is protected with modern security practices and privacy controls.",
  },
];

export default function FeaturesSection() {
  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold text-center mb-4 text-primary'>
            Why Choose ScholarStream?
          </h2>
          <p className='text-lg text-base-content/70 max-w-2xl mx-auto'>
            Everything you need to discover, apply for, and manage scholarship
            opportunities—all in one place.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className='card bg-base-100 border border-blue-100 shadow-lg hover:shadow-xl transition'
            >
              <div className='card-body text-center'>
                <div className='mx-auto text-5xl text-primary mb-4'>
                  {feature.icon}
                </div>
                <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
                <p className='text-base-content/70'>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
