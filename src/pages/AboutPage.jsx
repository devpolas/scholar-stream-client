import { Link } from "react-router";

export default function AboutPage() {
  return (
    <div>
      <div className='min-h-screen bg-base-200 flex flex-col items-center px-4 py-12'>
        <div className='text-center max-w-3xl'>
          <h1 className='text-5xl font-bold text-primary mb-4'>
            About ScholarStream
          </h1>
          <p className='text-lg text-base-content/80'>
            ScholarStream connects students with scholarship opportunities and
            simplifies the journey of finding financial aid.
          </p>
        </div>

        {/* Our Vision Section */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl'>
          <div className='flex flex-col justify-center'>
            <h2 className='text-3xl font-semibold mb-4'>Our Vision</h2>
            <p className='text-base-content/80'>
              We envision a world where every student has equal access to
              education. By bridging the gap between scholarship providers and
              students, ScholarStream ensures that opportunities reach the right
              candidates efficiently and effectively.
            </p>
          </div>
          <div className='flex justify-center'>
            <img
              src='https://images.unsplash.com/photo-1581091870625-2fbe6d6de152?auto=format&fit=crop&w=800&q=80'
              alt='Students learning'
              className='rounded-lg shadow-lg'
            />
          </div>
        </div>

        <div className='mt-16 max-w-5xl w-full'>
          <h2 className='text-3xl font-semibold text-center mb-8'>
            What We Do
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div className='card bg-base-100 shadow-lg p-6'>
              <h3 className='text-xl font-bold mb-2'>For Students</h3>
              <p className='text-base-content/80'>
                Easily search, filter, and apply for scholarships tailored to
                your academic profile, interests, and goals. Never miss an
                opportunity again.
              </p>
            </div>
            <div className='card bg-base-100 shadow-lg p-6'>
              <h3 className='text-xl font-bold mb-2'>
                For Universities & Organizations
              </h3>
              <p className='text-base-content/80'>
                Post scholarships and manage applications on a centralized
                platform, streamlining the review process and reducing
                administrative burdens.
              </p>
            </div>
          </div>
        </div>

        <div className='mt-16 max-w-5xl text-center'>
          <h2 className='text-3xl font-semibold mb-4'>
            Why We Built ScholarStream
          </h2>
          <p className='text-base-content/80 mb-6'>
            The process of finding financial aid can be overwhelming. Many
            students miss out simply because they are unaware of opportunities.
            ScholarStream solves this by centralizing scholarship listings,
            simplifying applications, and making management easy for
            administrators.
          </p>
          <Link to='/login' className='btn btn-primary btn-lg'>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}
