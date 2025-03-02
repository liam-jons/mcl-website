import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import { AccessibilityProvider } from '../contexts/AccessibilityContext';
import '../styles/fonts.css';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <AccessibilityProvider>
        <Component {...pageProps} />
      </AccessibilityProvider>
    </ThemeProvider>
  );
}

export default MyApp;
