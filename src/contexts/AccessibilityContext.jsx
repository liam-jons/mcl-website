import React, { createContext, useState, useContext, useEffect } from 'react';

const AccessibilityContext = createContext();

export const useAccessibility = () => useContext(AccessibilityContext);

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(100); // percentage
  const [fontFamily, setFontFamily] = useState('Propel'); // default style
  const [highContrast, setHighContrast] = useState(false);
  
  // Font size adjustments
  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 10, 150));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 10, 80));
  const resetFontSize = () => setFontSize(100);
  
  // Toggle high contrast
  const toggleHighContrast = () => setHighContrast(prev => !prev);
  
  // Change font family - options: 'Propel', 'Inter', 'OpenDyslexic'
  const changeFontFamily = (font) => setFontFamily(font);
  
  // Apply font size to document
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);
  
  // Apply font style to document
  useEffect(() => {
    if (fontFamily === 'OpenDyslexic') {
      // OpenDyslexic for all text
      document.body.style.fontFamily = 'OpenDyslexic, sans-serif';
      document.documentElement.classList.remove('font-style-inter');
      document.documentElement.classList.remove('font-style-propel');
      document.documentElement.classList.add('font-style-opendyslexic');
    } else if (fontFamily === 'Inter') {
      // Inter for all text
      document.body.style.fontFamily = 'Inter, sans-serif';
      document.documentElement.classList.remove('font-style-propel');
      document.documentElement.classList.remove('font-style-opendyslexic');
      document.documentElement.classList.add('font-style-inter');
    } else {
      // Propel branding (default)
      document.body.style.fontFamily = 'Kohinoor Bangla, sans-serif';
      document.documentElement.classList.remove('font-style-inter');
      document.documentElement.classList.remove('font-style-opendyslexic');
      document.documentElement.classList.add('font-style-propel');
    }
  }, [fontFamily]);
  
  // Apply high contrast mode
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);
  
  // Load saved preferences from localStorage on component mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedFontSize = localStorage.getItem('fontSize');
      const savedFontFamily = localStorage.getItem('fontFamily');
      const savedHighContrast = localStorage.getItem('highContrast') === 'true';
      
      if (savedFontSize) setFontSize(parseInt(savedFontSize));
      if (savedFontFamily) setFontFamily(savedFontFamily);
      if (savedHighContrast) setHighContrast(savedHighContrast);
    }
  }, []);
  
  // Save preferences to localStorage when they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('fontSize', fontSize.toString());
      localStorage.setItem('fontFamily', fontFamily);
      localStorage.setItem('highContrast', highContrast.toString());
    }
  }, [fontSize, fontFamily, highContrast]);
  
  return (
    <AccessibilityContext.Provider value={{
      fontSize,
      fontFamily,
      highContrast,
      increaseFontSize,
      decreaseFontSize,
      resetFontSize,
      changeFontFamily,
      toggleHighContrast
    }}>
      {children}
    </AccessibilityContext.Provider>
  );
};
