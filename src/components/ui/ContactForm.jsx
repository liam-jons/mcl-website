import React, { useState } from 'react';
import Button from './Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    interests: [],
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    error: null,
  });
  
  const interestOptions = [
    { id: 'production-support', label: 'Production Support Services' },
    { id: 'ai-consultancy', label: 'AI Consultancy' },
    { id: 'ai-readiness', label: 'AI Readiness Assessment' },
    { id: 'neuroinclusive', label: 'Creating a Neuroinclusive Environment' },
    { id: 'development', label: 'Software Development' },
    { id: 'testing', label: 'Quality Assurance & Testing' },
    { id: 'strategic', label: 'Strategic IT Consulting' },
  ];
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleInterestToggle = (id) => {
    setFormData(prev => {
      const interests = prev.interests.includes(id)
        ? prev.interests.filter(item => item !== id)
        : [...prev.interests, id];
      
      return { ...prev, interests };
    });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.interests.length) {
      setFormStatus({
        submitted: true,
        success: false,
        error: 'Please provide your email and select at least one area of interest.'
      });
      return;
    }
    
    try {
      // In a real implementation, this would be a fetch to your API endpoint
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      
      // if (!response.ok) throw new Error('Failed to submit form');
      
      // For demo purposes, we'll simulate a successful submission
      setFormStatus({
        submitted: true,
        success: true,
        error: null,
      });
      
      // Reset form after successful submission
      setFormData({
        email: '',
        interests: [],
        message: '',
      });
      
      // Reset success message after a delay
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, submitted: false }));
      }, 5000);
    } catch (error) {
      setFormStatus({
        submitted: true,
        success: false,
        error: error.message || 'Something went wrong. Please try again later.',
      });
    }
  };
  
  return (
    <div className="w-full max-w-md mx-auto">
      {formStatus.submitted && (
        <div className={`p-4 mb-4 rounded ${formStatus.success ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
          {formStatus.success 
            ? "Thank you for your interest! We'll be in touch soon." 
            : formStatus.error}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            required
          />
        </div>
        
        <div>
          <span className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Areas of Interest *
          </span>
          <div className="space-y-2">
            {interestOptions.map(option => (
              <div key={option.id} className="flex items-center">
                <input
                  type="checkbox"
                  id={option.id}
                  checked={formData.interests.includes(option.id)}
                  onChange={() => handleInterestToggle(option.id)}
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                />
                <label 
                  htmlFor={option.id} 
                  className="ml-2 block text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>
        
        <Button type="submit" variant="primary" className="w-full">
          Send Inquiry
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
