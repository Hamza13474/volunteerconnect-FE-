import React from 'react';
import {
  ChakraProvider
} from '@chakra-ui/react';
import theme from './assets/theme/Theme';
import MainRoutes from './utils/routes/MainRoutes';
import axios from 'axios';

function App() {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  return (
    <>
      <ChakraProvider >
        <MainRoutes />
      </ChakraProvider>
    </>
  );
}

export default App;
