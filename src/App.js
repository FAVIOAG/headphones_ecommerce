import React from 'react';
import './index.css';
import BarraPrincipal from './components/Navbar/BarraPrincipal';
import { ChakraProvider } from '@chakra-ui/react';
import NavBar1 from './components/Navbar/Navbar';

const App = () => {


return(
  <React.StrictMode>
     <ChakraProvider>
       <BarraPrincipal />
       <NavBar1/>
    </ChakraProvider>
  </React.StrictMode>
);
};
  


export default App;
