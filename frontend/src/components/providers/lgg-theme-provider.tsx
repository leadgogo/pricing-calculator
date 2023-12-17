import React, { memo, ReactElement, SetStateAction, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import { lggTheme } from 'src/theme/theme';

export const SetLggThemeContext = React.createContext<React.Dispatch<SetStateAction<DefaultTheme>>>(() => lggTheme);

export const LggThemeProvider = memo(({ children }: { children: ReactElement }) => {
  const [theme, setTheme] = useState<DefaultTheme>(lggTheme);

  return (
    <SetLggThemeContext.Provider value={setTheme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SetLggThemeContext.Provider>
  );
});
