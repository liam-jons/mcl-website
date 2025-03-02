import React from 'react';
import Card, { CardBody } from '../ui/Card';
import Button from '../ui/Button';

const Services = () => {
  const services = [
    {
      id: 'consulting',
      title: 'Strategic Consulting',
      description: 'Our consulting services provide strategic guidance and tailored solutions for your IT function. We offer expert advice on IT strategies, AI, data engineering and analysis, project management, and digital transformation.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      features: [
        'IT strategy development',
        'Digital transformation guidance',
        'SaaS platform expertise',
        'Financial systems consulting',
        'Recruitment and staffing strategies',
      ],
    },
    {
      id: 'development',
      title: 'Software Development',
      description: 'Our development services focus on creating innovative solutions tailored to your specific needs. Our mixed teams of neurodivergent and neurotypical developers, BAs, designers and testers bring a new dimension to any development function.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      features: [
        'Full-stack development',
        'Mobile application development',
        'Custom software solutions',
        'Web application development',
        'API development and integration',
      ],
    },
    {
      id: 'ai',
      title: 'AI Services',
      description: 'We help organizations harness the power of artificial intelligence and prepare for an AI-enabled future. Our AI services include readiness assessments, strategy development, implementation support, and ongoing optimization.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      features: [
        'AI readiness assessments',
        'Data strategy and engineering',
        'Machine learning implementation',
        'AI governance frameworks',
        'Ethical AI guidance',
      ],
    },
    {
      id: 'support',
      title: 'Production Support',
      description: 'Our production support services ensure the ongoing stability, performance, and security of your critical IT systems. We provide comprehensive support with a focus on proactive monitoring, rapid issue resolution, and continuous improvement.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600 dark:text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      features: [
        '24/7 monitoring and support',
        'Incident management',
        'Performance optimization',
        'Security monitoring',
        'Continuous improvement',
      ],
    },
  ];
  
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Expertise delivered with a unique neurodiversity perspective
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          {services.map((service) => (
            <Card key={service.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardBody className="p-0">
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start mb-6">
                    <div className="flex-shrink-0 mr-4">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            All our services benefit from the support provided by our amazing charity, the Mason Foundation, and our brand Propel. Our staff receive specialized support, and when based on your site, Propel provides training to your staff and managers who work with us.
          </p>
          <Button
            variant="primary"
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Discuss Your Requirements
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
