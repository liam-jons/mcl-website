import React from 'react';
import Card, { CardBody } from '../ui/Card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline text-gray-900 dark:text-white mb-4">
              About Mason Consulting Limited
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-standout">
              A pioneering British not-for-profit organisation with a rich heritage
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Mason Consulting Limited ("MCL") has a heritage of delivering consulting services in Financial Markets since its foundation by Stephen Mason in 1985. Top three Recruit Train Deploy ("RTD") organisation MThree was born from MCL and recently the focus has been on philanthropic activities through the Mason Foundation and the MCL brand, Propel. Propel has established itself as a key new player in the neurodiversity employment space with a mission statement "Propel was established to support young people who are neurodivergent or with a learning disability, to access and thrive in meaningful and sustainable employment."
              </p>
            </div>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Today, based on the success of Propel, MCL has moved into the next phase of our evolution: providing IT services and solutions with a commitment that at least 50% of our technical staff, including our senior leadership team, are neurodivergent. We are also not for profit (NFP) which means that we plough every penny left, after we have paid wages and bills, back into the company and into the charity, and Propel.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our senior leadership team is made exclusively of technologists, who understand IT and delivery of IT inside out. Before founding MCL et al, Stephen Mason worked for many years in American (e.g. Salomon Brothers), UK and European (e.g. ABN AMRO) investment banks as a project and programme manager, delivering complex IT programmes of work. Our Non-Executive Director, Jonathan Young has been a technologist his entire career, also working many years for investment banks and also in manufacturing, life sciences, and RTD."
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
                <CardBody>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-primary-100 dark:bg-primary-800 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Neurodiversity Focus</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Committed to maintaining a workforce where at least 50% of our technical staff are neurodivergent.
                    </p>
                  </div>
                </CardBody>
              </Card>
              
              <Card className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
                <CardBody>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-primary-100 dark:bg-primary-800 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Not-for-Profit</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      We reinvest all profits back into our company and charitable initiatives to further our mission.
                    </p>
                  </div>
                </CardBody>
              </Card>
              
              <Card className="bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
                <CardBody>
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-primary-100 dark:bg-primary-800 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600 dark:text-primary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Expert Leadership</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Led by experienced technologists with decades of industry expertise from top financial institutions.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
