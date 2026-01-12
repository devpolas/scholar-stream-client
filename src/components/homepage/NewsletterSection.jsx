// src/components/homepage/NewsletterSection.jsx
import { useState } from "react";
import { motion } from "motion/react";
import { HiOutlineMail } from "react-icons/hi";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;

    // TODO: connect with backend API
    setSuccess(true);
    setEmail("");
  }

  return (
    <section className='py-16 bg-base-200'>
      <div className='max-w-6xl mx-auto px-4'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='card bg-base-100 shadow-xl'
        >
          <div className='card-body text-center'>
            <div className='mx-auto text-5xl text-primary mb-4'>
              <HiOutlineMail />
            </div>

            <h2 className='text-4xl font-bold mb-4'>
              Stay Updated with Scholarships
            </h2>

            <p className='text-base-content/70 mb-8 max-w-2xl mx-auto'>
              Subscribe to our newsletter and receive the latest scholarship
              opportunities, deadlines, and tips directly in your inbox.
            </p>

            {success ? (
              <div className='alert alert-success max-w-md mx-auto'>
                🎉 Thanks for subscribing!
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className='flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto'
              >
                <input
                  type='email'
                  required
                  placeholder='Enter your email'
                  className='input input-bordered w-full'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className='btn btn-primary'>Subscribe</button>
              </form>
            )}

            <p className='text-sm text-base-content/60 mt-6'>
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
