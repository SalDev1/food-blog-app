import { Box, Container, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import LogoImage from "../images/logo.svg";
import { FaTwitter , FaFacebookF , FaInstagram } from "react-icons/fa";
import "@fontsource/source-sans-pro/400.css"
import "@fontsource/source-sans-pro/600.css"

const FooterSection = () => {
  return (
  <Box backgroundColor="#F8F8F8"
     width='100%' 
     height = "inherit" 
     display="flex" 
     alignItems="center" 
     justifyContent="space-evenly"
     flexDirection = {{base : "column" , md : "row"}}
     py = {5}
     >
        <Box 
        width = {{"base" : "90%" , md : "20%"}}
        >
            <Image src = {LogoImage} w = {130} h = {130}/>
        </Box>
        <Box display="flex" flexDirection="column" alignContent="center" width = {{"base" : "90%" , md : "20%"}}>
            <Heading mb={4} color = "#0E2368" fontSize="18px" fontFamily="Source Sans Pro">Contact Us</Heading>
            <Text fontFamily="Source Sans Pro">Lorem Ipsum Pvt Ltd.5/1, Magalton Road</Text>
            <Text mb = {2} fontFamily="Source Sans Pro">Phartosh Gate near YTM Market, XYZ-343434</Text>
            <Text mb = {2} fontFamily="Source Sans Pro">example2020@gmail.com</Text>
            <Text mb= {2} fontFamily="Source Sans Pro">(904) 443-0343</Text>
        </Box>
        <Box display="flex" flexDirection="column" alignContent="center" 
        my = {{base : "20px" , md : "0px"}} width = {{"base" : "90%" , md : "10%"}}>
            <Heading mb={4} color="#0E2368" fontSize="18px" fontFamily="Source Sans Pro">More</Heading>
            <Link mb = {2} fontFamily="Source Sans Pro" color = "#646874">About Us</Link>
            <Link mb = {2} fontFamily="Source Sans Pro" color = "#646874">Products</Link>
            <Link mb = {2} fontFamily="Source Sans Pro" color = "#646874">Career</Link>
            <Link mb= {2} fontFamily="Source Sans Pro" color = "#646874">Contact Us</Link>
        </Box>
        <Box 
        display="flex" 
        flexDir="column" 
        alignContent="center" 
        justifyContent="space-around" 
        height="inherit"
        width = {{"base" : "90%" , md : "20%"}}
        >
            <Box display="flex" flexDir="column" alignItems="center" justifyContent="center">
                <Text color="#0E2368" fontWeight="700" fontFamily="Source Sans Pro">Social Links</Text>
                <Box display="flex" alignItems="center" justifyContent="center" pt = {2}>
                    <Link href = "/" px = {2}>
                       <FaInstagram color = "#0E2368" size={22}/>
                    </Link>
                    <Link href = "/" px = {1.5}> 
                      <FaTwitter color = "#0E2368" size={22}/>
                    </Link>
                    <Link href = "/" px = {1.5}>
                      <FaFacebookF color = "#0E2368" size={20}/>
                    </Link>
                </Box>
            </Box>
            <Text textAlign="center" py = {5}>© 2022 Food Truck Example</Text>
        </Box>
    </Box>
  )
}

export default FooterSection