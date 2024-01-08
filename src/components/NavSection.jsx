import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'
import LogoImage from "../images/logo.svg";

const NavSection = () => {
  return (
    <Box 
    width='100%' 
    height = "10vh" 
    display="flex" 
    alignItems="center" 
    justifyContent={{base : "end" , md : "space-between"}}
    backgroundColor= "transparent"
    position="absolute"
    px={8}
    >
        <Image src = {LogoImage} 
        alt = "Logo" 
        width = {70} 
        height ={70} 
        display = {{base :"none" , md : "block"}}/>
        
        <Button 
        backgroundColor="#E23744" 
        color= "white" 
        borderRadius={20} 
        borderColor="white" borderWidth="2px">
            Get in Touch
        </Button>
    </Box>
  )
}

export default NavSection