import React from 'react';
import {
  ChakraProvider,
} from '@chakra-ui/react';

import Header from './components/Header';
import Main from './components/main';
import theme from './theme/font'
import './App.css'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Main />
    </ChakraProvider>
  );
}

export default App;
