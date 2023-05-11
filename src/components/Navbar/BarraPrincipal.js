import { motion } from 'framer-motion'
import { Box, Input, Image, Button, Container,text, Tag, Link, Flex } from '@chakra-ui/react';


function BarraPrincipal() {
  return (
    
    <Container bg={'green'} maxW='100%'>
      <Box m={'0 auto'} w={'85%'} display={'flex'} justifyContent='space-between' textColor={'white'}>
        <Box>
            <Link >
              +001225456870
            </Link>
        </Box>

        <Box display={'Flex'} justifyContent='space-around' width={'400px'}>
            <Link >
              Get 50% Off On Selected Items
            </Link>
            <text>
              |
            </text>
            <Link >
              Shop Now
            </Link>
        </Box>
        
        <Box display={'Flex'} justifyContent='space-around' width={'120px'} >
            <Link>
              Eng
            </Link>
           
            <Link>
              Location
            </Link>
        </Box>
      
      </Box>

   
    </Container>
  
  
  );
}

export default BarraPrincipal;