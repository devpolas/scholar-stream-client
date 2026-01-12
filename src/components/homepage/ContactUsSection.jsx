export default function ContactUsSection() {
  return (
    <div className='max-w-6xl mx-auto px-4 py-16'>
      {/* Section Header */}
      <h2 className='text-3xl md:text-4xl font-bold text-center mb-8 text-primary'>
        Contact Scholar Stream
      </h2>
      <p className='text-center text-gray-600 mb-12 max-w-2xl mx-auto'>
        Have questions about scholarships, applications, or support? We’re here
        to help you every step of the way.
      </p>

      <div className='grid md:grid-cols-2 gap-8'>
        {/* Contact Info Panel */}
        <div className='bg-base-200 p-8 rounded-xl shadow'>
          <h3 className='text-2xl font-semibold mb-4'>Get in Touch</h3>

          <div className='space-y-4'>
            <p className='flex items-center gap-3 text-gray-700'>
              <span className='text-primary text-xl'>📧</span>
              support@scholarstream.com
            </p>

            <p className='flex items-center gap-3 text-gray-700'>
              <span className='text-primary text-xl'>📞</span>
              +1 (800) 234-5678
            </p>

            <p className='flex items-center gap-3 text-gray-700'>
              <span className='text-primary text-xl'>📍</span>
              125 Scholar Avenue, Cambridge, MA, USA
            </p>
          </div>

          <div className='mt-8'>
            <h4 className='text-lg font-semibold mb-2'>Office Hours</h4>
            <p className='text-gray-600'>Mon – Fri: 9:00 AM – 6:00 PM</p>
            <p className='text-gray-600'>Sat – Sun: Closed</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className='bg-base-200 p-8 rounded-xl shadow space-y-4'>
          <div>
            <label className='label'>
              <span className='label-text font-medium'>Your Name</span>
            </label>
            <input
              type='text'
              placeholder='Enter your name'
              className='input input-bordered w-full'
              required
            />
          </div>

          <div>
            <label className='label'>
              <span className='label-text font-medium'>Email Address</span>
            </label>
            <input
              type='email'
              placeholder='Enter your email'
              className='input input-bordered w-full'
              required
            />
          </div>

          <div>
            <label className='label'>
              <span className='label-text font-medium'>Message</span>
            </label>
            <textarea
              className='textarea textarea-bordered w-full h-28'
              placeholder='Write your message...'
              required
            ></textarea>
          </div>

          <button className='btn btn-primary w-full text-lg'>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
