import React from 'react';

import theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';
import LoginMail from './screens/LoginMail';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <LoginMail />
    </ThemeProvider>
  );
}
