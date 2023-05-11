import React from 'react'
import { motion } from 'framer-motion'
import { Box, Input, Image, Button, Container,InputGroup, InputLeftElement, Link, Flex } from '@chakra-ui/react';
import { FcShipped, FcSearch} from "react-icons/fc";
import { AiOutlineShoppingCart,AiOutlineUser  } from "react-icons/ai";
const NavBar1 = () => {
  return (
    <Container maxW='100%'>
      
      
      <Box display={'Flex'} width='85%' margin={'0 auto'} justifyContent='space-between' alignItems='center' height={'80px'}>
        
            <Box >
              <Link display={'Flex'} gap='10px' alignContent={'center'}>
                <FcShipped fontSize={'30px'}/> Shopcart
              </Link>
            </Box>

            <Box display={'flex'} gap='2rem'>
              <Link>Categories</Link>
              <Link>Deals</Link>
              <Link>Whats New</Link>
              <Link>Delivery</Link>
            </Box>

            <Box display={'Flex'}>
             
              <InputGroup >
              <Input  height={'30px'} borderRadius={'25px'} type="text" placeholder="Search Product" />
              
                <InputLeftElement
              
                pointerEvents="none"
                children={<FcSearch color="gray.300" />}
              />
              
              </InputGroup>
            </Box>

            <Box display={'Flex'} gap='1rem'>
              
              <Link display={'Flex'}><AiOutlineUser fontSize={'20px'}/>Acount</Link>
              <Link display={'Flex'}><AiOutlineShoppingCart fontSize={'20px'}/>Cart</Link>

            </Box>

      </Box>
        

    </Container>
  )
}

export default NavBar1