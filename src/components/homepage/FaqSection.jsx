export default function FaqSection() {
  return (
    <div className='max-w-4xl mx-auto px-4 py-12'>
      <h2 className='text-3xl md:text-4xl font-bold text-center mb-8 text-primary'>
        Frequently Asked Questions
      </h2>

      <div className='space-y-4'>
        {/* FAQ 1 */}
        <div className='collapse collapse-arrow bg-base-200 shadow'>
          <input type='checkbox' />
          <div className='collapse-title text-lg font-medium'>
            How can I apply for a scholarship?
          </div>
          <div className='collapse-content'>
            <p>
              You can apply by visiting the scholarship details page and
              clicking the
              <span className='font-semibold text-primary'>
                {" "}
                "Apply Now"
              </span>{" "}
              button. Follow the instructions provided and upload all required
              documents.
            </p>
          </div>
        </div>

        {/* FAQ 2 */}
        <div className='collapse collapse-arrow bg-base-200 shadow'>
          <input type='checkbox' />
          <div className='collapse-title text-lg font-medium'>
            Do all scholarships require application fees?
          </div>
          <div className='collapse-content'>
            <p>
              No, not all scholarships require application fees. Some are free,
              while others may charge a small processing fee depending on the
              university.
            </p>
          </div>
        </div>

        {/* FAQ 3 */}
        <div className='collapse collapse-arrow bg-base-200 shadow'>
          <input type='checkbox' />
          <div className='collapse-title text-lg font-medium'>
            What is the difference between Full Fund and Partial Fund?
          </div>
          <div className='collapse-content'>
            <p>
              <span className='font-semibold'>Full Fund</span> scholarships
              cover tuition fees, living expenses, and sometimes travel costs.
              <span className='font-semibold'>Partial Fund</span> scholarships
              cover only a portion of the tuition or living expenses.
            </p>
          </div>
        </div>

        {/* FAQ 4 */}
        <div className='collapse collapse-arrow bg-base-200 shadow'>
          <input type='checkbox' />
          <div className='collapse-title text-lg font-medium'>
            Can I apply for multiple scholarships at once?
          </div>
          <div className='collapse-content'>
            <p>
              Yes, you can apply for as many scholarships as you qualify for.
              Each scholarship may have its own requirements and deadlines.
            </p>
          </div>
        </div>

        {/* FAQ 5 */}
        <div className='collapse collapse-arrow bg-base-200 shadow'>
          <input type='checkbox' />
          <div className='collapse-title text-lg font-medium'>
            How do I know if my application is accepted?
          </div>
          <div className='collapse-content'>
            <p>
              After submitting your application, you will receive a confirmation
              email. Universities usually send an acceptance notification via
              email as well.
            </p>
          </div>
        </div>

        {/* FAQ 6 */}
        <div className='collapse collapse-arrow bg-base-200 shadow'>
          <input type='checkbox' />
          <div className='collapse-title text-lg font-medium'>
            Are service charges refundable?
          </div>
          <div className='collapse-content'>
            <p>
              Service charges are typically non-refundable as they are used to
              process your application and provide consultancy support.
            </p>
          </div>
        </div>

        {/* FAQ 7 */}
        <div className='collapse collapse-arrow bg-base-200 shadow'>
          <input type='checkbox' />
          <div className='collapse-title text-lg font-medium'>
            Who can I contact for help regarding applications?
          </div>
          <div className='collapse-content'>
            <p>
              You can reach out to our support team at
              <span className='font-semibold'> support@scholarhub.com</span>.
              You may also contact the university directly using the email
              provided on the scholarship details page.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
