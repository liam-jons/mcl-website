jsx
import React from 'react';

const StructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Mason Consulting Limited",
    "url": "https://masonconsulting.co.uk",
    "logo": "https://masonconsulting.co.uk/images/mcl-logo.svg",
    "description": "A not-for-profit IT consultancy with a commitment that at least 50% of our technical staff are neurodivergent.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "UK"
    },
    "sameAs": [
      "https://propelpeople.co.uk"
    ]
  };

  return (
    
  );
};

export default StructuredData;

 