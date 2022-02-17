import React from 'react';

import { ThemeProvider } from './ThemeProvider';

export const Providers = ({ children }) => (
  <ThemeProvider>
    {children}
  </ThemeProvider>
)