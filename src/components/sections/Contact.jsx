import React from 'react';
import ContactForm from '../ui/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="max-w-md">
                <h2 className="text-3xl md:text-4xl font-headline text-gray-900 dark:text-white mb-6">
                  Get in Touch
                </h2>
                
                <p className="text-gray-600 dark:text-gray-300 mb-8">
                  We would be delighted to speak to any progressive potential clients for whom our approach strikes a chord. Let us know what you're looking for, and we'll get back to you promptly.
                </p>
                
                <div className="mb-12">
                  <ContactForm />
                </div>
              </div>
            </div>
            
            <div className="lg:pl-12">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm">
                <h3 className="font-headline text-2xl text-gray-900 dark:text-white mb-4">
                  Why Choose MCL?
                </h3>
                
                <ul className="space-y-4">
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        Not-for-Profit Structure
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Every penny of profit is reinvested to further employment opportunities for the neurodivergent.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        Neurodiversity Expertise
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Comprehensive support from Propel ensures both neurodivergent and neurotypical team members thrive.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        Technical Excellence
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Led by experienced technologists with deep expertise across multiple domains and industries.
                      </p>
                    </div>
                  </li>
                  
                  <li className="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                        Proven Results
                      </h4>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">
                        Track record of success with prestigious clients across multiple industries.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
