import { motion } from "motion/react";

export default function PrivacyTerms() {
  return (
    <main className='min-h-screen bg-base-200 px-4 py-12'>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='max-w-5xl mx-auto bg-base-100 rounded-xl shadow-lg p-8'
      >
        <h1 className='text-3xl md:text-4xl font-bold text-center mb-8 text-primary'>
          Privacy Policy & Terms of Service
        </h1>

        {/* Privacy Policy */}
        <section className='mb-12'>
          <h2 className='text-2xl font-semibold mb-4'>Privacy Policy</h2>

          <div className='space-y-4 text-base-content/80'>
            <p>
              At <strong>ScholarStream</strong>, we respect your privacy and are
              committed to protecting your personal information. This Privacy
              Policy explains how we collect, use, and safeguard your data.
            </p>

            <p>
              <strong>Information We Collect:</strong> We may collect personal
              details such as your name, email address, academic information,
              and application-related data when you use our platform.
            </p>

            <p>
              <strong>How We Use Your Information:</strong> Your information is
              used to connect you with scholarship opportunities, process
              applications, improve our services, and communicate important
              updates.
            </p>

            <p>
              <strong>Data Security:</strong> We implement appropriate technical
              and organizational measures to protect your data against
              unauthorized access or misuse.
            </p>

            <p>
              <strong>Third-Party Services:</strong> ScholarStream may work with
              trusted third-party services to operate the platform. We do not
              sell or rent your personal data to third parties.
            </p>
          </div>
        </section>

        {/* Terms of Service */}
        <section>
          <h2 className='text-2xl font-semibold mb-4'>Terms of Service</h2>

          <div className='space-y-4 text-base-content/80'>
            <p>
              By accessing or using <strong>ScholarStream</strong>, you agree to
              comply with the following terms and conditions.
            </p>

            <p>
              <strong>User Responsibilities:</strong> Users are responsible for
              providing accurate and truthful information when applying for
              scholarships.
            </p>

            <p>
              <strong>Platform Usage:</strong> ScholarStream is intended for
              lawful educational purposes only. Any misuse of the platform is
              strictly prohibited.
            </p>

            <p>
              <strong>Content & Listings:</strong> Scholarship providers are
              responsible for the accuracy of posted opportunities.
              ScholarStream does not guarantee scholarship awards.
            </p>

            <p>
              <strong>Changes to Terms:</strong> We reserve the right to update
              these terms at any time. Continued use of the platform indicates
              acceptance of updated terms.
            </p>
          </div>
        </section>

        <p className='text-sm text-center mt-10 text-base-content/60'>
          Last updated: January 2026
        </p>
      </motion.div>
    </main>
  );
}
