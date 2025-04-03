import React from 'react';
import Button from '../ui/Button';

const Neurodiversity = () => {
  const benefits = [
    {
      title: 'Unique Perspectives',
      description: 'Neurodivergent individuals bring unique ways of thinking and solving problems that can lead to innovative solutions.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: 'Detail-Oriented',
      description: 'Many neurodivergent individuals excel at pattern recognition and paying attention to details that others might miss.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      title: 'Specialised Focus',
      description: 'The ability to deeply focus on specific interests can result in exceptional expertise and dedication to technical fields.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      title: 'Resilience & Adaptability',
      description: 'Having navigated a neurotypical world, many neurodivergent individuals develop exceptional problem-solving and adaptability skills.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];
  
  return (
    <section id="neurodiversity" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-primary-50 dark:bg-primary-900/20 px-6 py-3 rounded-full inline-block text-primary-700 dark:text-primary-300 font-medium text-sm mb-6">
                Our Unique Approach
              </div>
              
              <h2 className="text-3xl md:text-4xl font-headline text-gray-900 dark:text-white mb-6">
                Neurodiversity at the Heart of What We Do
              </h2>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
                Neuroinclusion is at the heart of MCL. We're committed to providing a workplace where people can thrive.
              
              <div className="mb-8">
                <p className="text-gray-600 dark:text-gray-300">
                  Propel began in 2017 supporting teachers and support staff to prepare neurodivergent young people with the transition to working life. Our USP is evidence-based content, which has been created with NATSPEC college specialist and students.
                </p>
              </div>
              
              <blockquote className="border-l-4 border-primary-500 pl-4 mb-8">
                <p className="text-gray-600 dark:text-gray-300 italic mb-2">
                  "We believe you don't need to change the neurodivergent person; you need to provide them with the right role and environment to thrive."
                </p>
                <cite className="text-gray-500 dark:text-gray-400 text-sm">— Propel Team</cite>
              </blockquote>
              
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Propel's team are committed to reversing the dire neurodivergent unemployment stats and high rates of anxiety, depression and suicide that can often coincide.
              </p>
              
              <Button 
                variant="primary"
                onClick={() => window.open('https://propelpeople.co.uk', '_blank')}
              >
                Learn More About Propel
              </Button>
            </div>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="flex">
                    <div className="flex-shrink-0 mr-4">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="bg-primary-50 dark:bg-primary-900/20 p-6 rounded-lg border border-primary-100 dark:border-primary-800">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Our Support Structure
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Staffed by our experts in the Neurodiversity space, Propel supports our IT Services through:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Expert support for our neurodivergent staff</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Support for neurotypical staff working with neurodivergent colleagues</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600 dark:text-gray-300">Bespoke specialist training for clients</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-20 bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200 dark:divide-gray-700">
              <div className="p-8 text-center">
                <div className="text-4xl font-headline text-primary-600 dark:text-primary-400 mb-2">50%+</div>
                <p className="text-gray-600 dark:text-gray-300">Neurodivergent staff</p>
              </div>
              <div className="p-8 text-center">
                <div className="text-4xl font-headline text-primary-600 dark:text-primary-400 mb-2">3</div>
                <p className="text-gray-600 dark:text-gray-300">Centres for Excellence</p>
              </div>
              <div className="p-8 text-center">
                <div className="text-4xl font-headline text-primary-600 dark:text-primary-400 mb-2">100%</div>
                <p className="text-gray-600 dark:text-gray-300">Not-for-profit organisation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Neurodiversity;
