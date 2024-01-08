import { Box, Button, HStack, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import AboutSectionImage from "../images/about_section_image.png";
import "@fontsource/poppins/600.css";
import "@fontsource/open-sans/400.css"
import "@fontsource/source-sans-pro/600.css"

const AboutSection = () => {
  return (
    <Stack direction="row" spacing="0">
       <Box width = "95%" display={{base : "none", md : "block"}}>
        <Image src = {AboutSectionImage} objectFit="cover" boxSize="100%"/>
       </Box>
       <Box 
            background="#F7F7F7" 
            display="flex" 
            justifyContent="center" 
            alignContent="center" 
        >
            <Box width={{base : "80%" , md : "50%"}} 
            display= "flex" 
            flexDir="column" 
            justifyContent="center" 
            alignItems ={{base : "center" , md : "flex-start"}}
            py = {{base : "40px" , md : "0px"}}> 
                <Heading fontSize="40px" color="#0E2368" fontFamily="Poppins">About Us</Heading>
                <Text mt = {5} textAlign ={{base : "center" , md : "left"}} color = "#444957"  fontSize="16px" fontFamily="Open Sans">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type 
                    specimen book. t has survived not only five centuries.
                </Text>
                <Button mt = {10} 
                color = "white" 
                backgroundColor = "#E23744" 
                borderRadius="20px"
                _hover={{ background : "#E23744"}}
                fontWeight={600}
                fontFamily="Source Sans Pro"
                >Read More</Button>
            </Box>
       </Box>
    </Stack>
  )
}

export default AboutSection