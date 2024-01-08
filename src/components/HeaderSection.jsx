import React from 'react'
import HeaderSectionLogo from "../images/header_section_image.jpeg"
import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react'
import "@fontsource/source-sans-pro/700.css";
import "@fontsource/open-sans/400.css"
import "@fontsource/open-sans/700.css"

const HeaderSection = () => {
  return (
     <Stack direction={{base : "column-reverse" , md : "row"}} spacing="0">
       <Box 
            display="flex" 
            justifyContent="center" 
            alignContent="center" 
            width={{base : "100%" , md : "80%"}} 
        >
            <Box
            display= "flex" 
            flexDir="column" 
            justifyContent="center" 
            alignItems ={{base : "center" , md : "flex-start"}}
            py = {{base : "40px" , md : "0px"}}
            pl = {{base : "0px" , md : "50px"}}> 
                <Heading
                fontSize={{base : "40px" , md : "48px" , lg : "68px"}}
                color = "#0E2368"
                lineHeight={1} 
                textAlign={{base : "center" , md : "left"}}
                fontWeight={700}
                fontFamily="Source Sans Pro"
                >
                  Discover the <Text color="#E23744" as="span">Best</Text> Food and Drinks</Heading>
                <Text mt = {5} 
                textAlign ={{base : "center" , md : "left"}} 
                width = {{base : "75%" , md : "100%"}}
                color="#444957"
                fontSize="16px"
                fontFamily="Open Sans"
                >
                   Naturally made Healthcare Products for the better care & support of your body.
                </Text>
                <Button mt = {10} 
                color = "white" 
                backgroundColor = "#E23744" 
                borderRadius={25}
                _hover={{ background : "#E23744"}}
                fontSize="18px"
                py = {6}
                fontWeight={700}
                fontFamily="Open Sans"
                >Explore Now !</Button>
            </Box>
       </Box>
       <Box width = {{base : "inherit",md : "90%"}}>
        <Image src = {HeaderSectionLogo} objectFit="cover" boxSize="100%" overflow="hidden"/>
       </Box>
    </Stack>
  )
}

export default HeaderSection