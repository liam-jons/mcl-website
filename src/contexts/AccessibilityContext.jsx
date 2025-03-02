import React, { createContext, useState, useContext, useEffect } from 'react';

const AccessibilityContext = createContext();

export const useAccessibility = () => useContext(AccessibilityContext);

export const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(100); // percentage
  const [fontFamily, setFontFamily] = useState('Inter'); // default font
  const [highContrast, setHighContrast] = useState(false);
  
  // Font size adjustments
  const increaseFontSize = () => setFontSize(prev => Math.min(prev + 10, 150));
  const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 10, 80));
  const resetFontSize = () => setFontSize(100);
  
  // Toggle high contrast
  const toggleHighContrast = () => setHighContrast(prev => !prev);
  
  // Change font family - options: 'Inter', 'Roboto', 'OpenDyslexic'
  const changeFontFamily = (font) => setFontFamily(font);
  
  // Apply font size to document
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);
  
  // Apply font family to document
  useEffect(() => {
    document.body.style.fontFamily = fontFamily === 'OpenDyslexic' 
      ? 'OpenDyslexic, sans-serif' 
      : fontFamily === 'Roboto' 
        ? 'Roboto, sans-serif' 
        : 'Inter, sans-serif';
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
