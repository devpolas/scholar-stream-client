import { motion } from "motion/react";
export default function StoriesSection() {
  const stories = [
    {
      id: 1,
      name: "Ariana Lopez",
      country: "Spain",
      university: "Harvard University",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      story:
        "I received the Global Excellence Scholarship and it changed my life. The platform made the process easy and smooth!",
    },
    {
      id: 2,
      name: "Samuel Johnson",
      country: "Nigeria",
      university: "University of Toronto",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      story:
        "Thanks to this platform, I secured a partial scholarship in Engineering. Highly recommended for international students.",
    },
    {
      id: 3,
      name: "Mia Chen",
      country: "China",
      university: "University of Oxford",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      story:
        "The application guidance and support helped me win a highly competitive scholarship. Forever grateful!",
    },
  ];

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      className='max-w-6xl mx-auto px-4 py-12'
    >
      <h2 className='text-3xl md:text-4xl font-bold text-center mb-8 text-primary'>
        Student Success Stories
      </h2>

      <div className='grid md:grid-cols-3 gap-8'>
        {stories.map((s) => (
          <motion.div
            key={s.id}
            variants={cardVariant}
            whileHover={{
              scale: 1.03,
              y: -5,
              boxShadow: "0 20px 30px rgba(0,0,0,0.1)",
            }}
            className='card bg-base-100 shadow-xl border border-blue-300 hover:shadow-2xl transition'
          >
            <div className='card-body'>
              {/* User Image */}
              <div className='flex justify-center mb-4'>
                <img
                  src={s.image}
                  alt={s.name}
                  className='w-20 h-20 rounded-full border-2 border-primary'
                />
              </div>

              {/* Story Text */}
              <p className='text-gray-700 text-center italic'>"{s.story}"</p>

              {/* User Info */}
              <div className='mt-4 text-center'>
                <h3 className='text-lg font-semibold'>{s.name}</h3>
                <p className='text-sm text-gray-500'>{s.country}</p>
                <p className='badge badge-primary mt-2'>{s.university}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
