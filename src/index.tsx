/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';

import theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';
import LoginMail from './screens/LoginMail';
import { SafeAreaView, StatusBar } from 'react-native';
import LoginHub from './screens/LoginHub';

import { Routes } from './routes';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar />
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  );
}
