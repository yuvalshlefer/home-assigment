import React, { useState } from 'react';
import { MuiThemeProvider, createTheme, PaletteType } from '@material-ui/core';

import { themeDefinition } from '../utils/theme';

interface ThemeContextProps {
  themeType: PaletteType,
  setThemeType: React.Dispatch<React.SetStateAction<PaletteType>>
}

export const ThemeContext = React.createContext<ThemeContextProps>({} as ThemeContextProps);

export const ThemeProvider = ({ children }) => {
  const [themeType, setThemeType] = useState<PaletteType>('light');
  const theme = createTheme({
    ...themeDefinition,
    palette: {
      ...themeDefinition.palette,
      type: themeType
    }
  })

  return (
    <ThemeContext.Provider value={{ themeType, setThemeType }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  )
}