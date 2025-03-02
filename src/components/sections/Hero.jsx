import React from 'react';
import Button from '../ui/Button';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-secondary-600/10 dark:from-primary-600/20 dark:to-secondary-600/20"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-grid.svg')] opacity-5 dark:opacity-10"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 pt-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200 text-sm font-medium mb-6">
            Where technology meets neurodiversity
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            IT Services with a 
            <span className="text-primary-600 dark:text-primary-400"> Neurodiversity </span> 
            Focus
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
            Mason Consulting Limited delivers exceptional IT services with a commitment that at least 50% of our technical staff are neurodivergent.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Our Services
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-center text-gray-700 dark:text-gray-300 font-medium">Software Development</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-center text-gray-700 dark:text-gray-300 font-medium">AI Readiness</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="text-center text-gray-700 dark:text-gray-300 font-medium">IT Security</span>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <span className="text-center text-gray-700 dark:text-gray-300 font-medium">Strategic Consulting</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <button 
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
          className="animate-bounce p-2 rounded-full bg-white dark:bg-gray-800 shadow-md"
          aria-label="Scroll down"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
