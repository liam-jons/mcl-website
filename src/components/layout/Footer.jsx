import React from 'react';
import ShareButton from '../ui/ShareButton';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Neurodiversity', href: '#neurodiversity' },
    { name: 'Contact', href: '#contact' },
  ];
  
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              {/* Placeholder for logo */}
              <div className="h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                MCL
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">Mason Consulting</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              A not-for-profit IT consultancy with a commitment that at least 50% of our technical staff are neurodivergent.
            </p>
            <div className="flex items-center space-x-4">
              <ShareButton />
              
              {/* Back to top button */}
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="flex items-center space-x-1 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                aria-label="Back to top"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <span>Back to Top</span>
              </button>
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Navigation</h3>
                <ul className="space-y-2">
                  {footerLinks.map((link) => (
                    <li key={link.name}>
                      <a 
                        href={link.href}
                        className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Our Services</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#services" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm">
                      Consulting
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm">
                      Development
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm">
                      AI Services
                    </a>
                  </li>
                  <li>
                    <a href="#services" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm">
                      Production Support
                    </a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#contact" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm">
                      Contact Us
                    </a>
                  </li>
                  <li>
                    <a href="https://propelpeople.co.uk" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white text-sm">
                      Propel
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; {currentYear} Mason Consulting Limited. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 md:mt-0">
              A not-for-profit organisation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
