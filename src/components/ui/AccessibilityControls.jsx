import React from 'react';
import { useAccessibility } from '../../contexts/AccessibilityContext';

const AccessibilityControls = ({ onClose }) => {
  const {
    fontSize,
    fontFamily,
    highContrast,
    increaseFontSize,
    decreaseFontSize,
    resetFontSize,
    changeFontFamily,
    toggleHighContrast
  } = useAccessibility();
  
  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Accessibility Options</h3>
        {onClose && (
          <button 
            onClick={onClose} 
            className="p-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
            aria-label="Close accessibility panel"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        )}
      </div>
      
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Text Size</h4>
          <div className="flex items-center space-x-3">
            <button 
              onClick={decreaseFontSize}
              className="p-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              aria-label="Decrease font size"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            
            <span className="text-sm">{fontSize}%</span>
            
            <button 
              onClick={increaseFontSize}
              className="p-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              aria-label="Increase font size"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            
            <button 
              onClick={resetFontSize}
              className="p-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
              aria-label="Reset font size"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Font</h4>
          <div className="flex flex-col space-y-2">
            {/* First row - 2 buttons */}
            <div className="grid grid-cols-2 gap-2">
              <button 
                onClick={() => changeFontFamily('Kohinoor Bangla')}
                className={`p-2 rounded-md text-sm ${
                  fontFamily === 'Kohinoor Bangla' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                }`}
              >
                Kohinoor Bangla
              </button>
              
              <button 
                onClick={() => changeFontFamily('Library 3am Soft')}
                className={`p-2 rounded-md text-sm ${
                  fontFamily === 'Library 3am Soft' 
                    ? 'bg-primary-600 text-white' 
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
                }`}
                style={{ fontFamily: 'Library 3am Soft, Georgia, serif' }}
              >
                Library 3am
              </button>
            </div>
            
            {/* Second row - 1 button (full width) */}
            <button 
              onClick={() => changeFontFamily('OpenDyslexic')}
              className={`p-2 rounded-md text-sm ${
                fontFamily === 'OpenDyslexic' 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
              }`}
              style={{ fontFamily: 'OpenDyslexic, sans-serif' }}
            >
              OpenDyslexic
            </button>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-2">Display</h4>
          <button
            onClick={toggleHighContrast}
            className={`w-full p-2 rounded-md text-sm ${
              highContrast
                ? 'bg-primary-600 text-white'
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600'
            }`}
          >
            {highContrast ? 'Disable' : 'Enable'} High Contrast
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccessibilityControls;
