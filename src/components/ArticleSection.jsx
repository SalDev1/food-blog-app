import { Box, Button, Card, CardBody, CardFooter, CardHeader, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination , Navigation } from 'swiper/modules';
import "swiper/css";
import "./styles.css";
import CornImage from "../images/corn-image.png";
import TomatoImage from "../images/tomato-image.png";
import SoupImage from "../images/soup-image.png";
import SnacksImage from '../images/snacks-image.png';
import WrapsImage from '../images/wraps-image.png';
import PostWorkoutImage from "../images/post-workout-image.png";
import "@fontsource/source-sans-pro/600.css"
import "@fontsource/poppins/700.css"
import "@fontsource/open-sans/400.css"

const ArticleSection = () => {
  return (
    <Box>
      <Box width = "100%">
        <Heading mt = {10} ml = {10} fontSize="48px" color = "#0E2368" fontWeight={600} fontFamily="Source Sans Pro">Latest Articles</Heading>
        <Box py = {10}>
            <Swiper
              slidesPerView = {1}
              pagination={{
                 type : "fraction",
                 clickable : true,
              }}
              navigation = {true}
              modules={[Pagination , Navigation]}
              breakpoints={{
                912: {
                  slidesPerView: 2,
                },
                1486: {
                  slidesPerView: 3,
                  spaceBetween : 30,
                },
              }}
              className="mySwiper"
            >
              {/* Slide 1 */}
              <SwiperSlide>       
                  <Card width={{base : "85%" , md : "495px"}} height = "inherit" display="flex" flexDir = "column" alignItems='center'
                  borderWidth="1.5px" borderColor = "lightgrey">
                    <CardBody display="flex" flexDir="column" justifyContent="center">
                       <Image src = {TomatoImage} alt = "/"/>
                      <Box display="flex" flexDirection="column" py={2} alignItems="flex-start">
                        <Heading tHeadinglign="left" my = {3} fontSize="32px" color = "#0E2368" fontFamily="Poppins">Grilled  Tomatoes at Home</Heading>
                        <Text textAlign="left" mb = {4} fontFamily="Open Sans">PLorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard...</Text>
                        <Button color = "#424961" backgroundColor = "white" borderWidth="1px" borderColor = "#424961" borderRadius="20px" fontFamily="Source Sans Pro">Read More</Button>
                    </Box>
                    </CardBody>
                  </Card>
              </SwiperSlide>

              <SwiperSlide>
                <Card width={{base : "85%" , md : "495px"}} height = "inherit" display="flex" flexDir = "column" alignItems='center'
                  borderWidth="1.5px" borderColor = "lightgrey">
                  <CardBody display="flex" flexDir="column" justifyContent="center">
                      <Image src = {SnacksImage} alt = "/"/>
                      <Box display="flex" flexDirection="column" py={2} alignItems="flex-start">
                        <Heading tHeadinglign="left" my = {3} fontSize="32px" color = "#0E2368" fontFamily="Poppins">Snacks for Travel</Heading>
                        <Text textAlign="left" mb = {4} fontFamily="Open Sans">PLorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard...</Text>
                        <Button color = "#424961" backgroundColor = "white" borderWidth="1px" borderColor = "#424961" borderRadius="20px" fontFamily="Source Sans Pro">Read More</Button>
                    </Box>
                    </CardBody>
                  </Card>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide>
                <Card width={{base : "85%" , md : "495px"}} height = "inherit" display="flex" flexDir = "column" alignItems='center'
                  borderWidth="1.5px" borderColor = "lightgrey">
                   <CardBody display="flex" flexDir="column" justifyContent="center">
                       <Image src = {PostWorkoutImage} alt = "/"/>
                      <Box display="flex" flexDirection="column" py={2} alignItems="flex-start">
                        <Heading tHeadinglign="left" my = {3} fontSize="32px" color = "#0E2368" fontFamily="Poppins">Post-workout Recipes</Heading>
                        <Text textAlign="left" mb = {4} fontFamily="Open Sans">PLorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard...</Text>
                        <Button color = "#424961" backgroundColor = "white" borderWidth="1px" borderColor = "#424961" borderRadius="20px" fontFamily="Source Sans Pro">Read More</Button>
                    </Box>
                    </CardBody>
                  </Card>
              </SwiperSlide>

              <SwiperSlide>
                 <Card width={{base : "85%" , md : "495px"}} height = "inherit" display="flex" flexDir = "column" alignItems='center'
                  borderWidth="1.5px" borderColor = "lightgrey">
                   <CardBody display="flex" flexDir="column" justifyContent="center">
                       <Image src = {CornImage} alt = "/"/>
                      <Box display="flex" flexDirection="column" py={2} alignItems="flex-start">
                        <Heading tHeadinglign="left" my = {3} fontSize="32px" color = "#0E2368" fontFamily="Poppins" >How To Grill Corn</Heading>
                        <Text textAlign="left" mb = {4} fontFamily="Open Sans">PLorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard...</Text>
                        <Button color = "#424961" backgroundColor = "white" borderWidth="1px" borderColor = "#424961" borderRadius="20px" fontFamily="Source Sans Pro">Read More</Button>
                    </Box>
                    </CardBody>
                  </Card>
              </SwiperSlide>

              <SwiperSlide>
                  <Card width={{base : "85%" , md : "495px"}} height = "inherit" display="flex" flexDir = "column" alignItems='center'
                  borderWidth="1.5px" borderColor = "lightgrey">
                    <CardBody display="flex" flexDir="column" justifyContent="center">
                       <Image src = {WrapsImage} alt = "/"/>
                      <Box display="flex" flexDirection="column" py={2} alignItems="flex-start">
                        <Heading tHeadinglign="left" my = {3} fontSize="32px" color = "#0E2368" fontFamily="Poppins">Crunchwrap Supreme</Heading>
                        <Text textAlign="left" mb = {4} fontFamily="Open Sans">PLorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard...</Text>
                        <Button color = "#424961" backgroundColor = "white" borderWidth="1px" borderColor = "#424961" borderRadius="20px" fontFamily="Source Sans Pro">Read More</Button>
                    </Box>
                    </CardBody>
                  </Card>
              </SwiperSlide>

              <SwiperSlide>
                 <Card width={{base : "85%" , md : "495px"}} height = "inherit" display="flex" flexDir = "column" alignItems='center'
                  borderWidth="1.5px" borderColor = "lightgrey">
                    <CardBody display="flex" flexDir="column" justifyContent="center">
                       <Image src = {SoupImage} alt = "/"/>
                      <Box display="flex" flexDirection="column" py={2} alignItems="flex-start">
                        <Heading tHeadinglign="left" my = {3} fontSize="32px" color = "#0E2368" fontFamily="Poppins">Broccoli Cheese Soup</Heading>
                        <Text textAlign="left" mb = {4} fontFamily="Open Sans">PLorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard...</Text>
                        <Button color = "#424961" backgroundColor = "white" borderWidth="1px" borderColor = "#424961" borderRadius="20px" fontFamily="Source Sans Pro">Read More</Button>
                    </Box>
                    </CardBody>
                  </Card>
              </SwiperSlide>
            </Swiper>
        </Box>
   
      </Box>
    </Box>
  )
}

export default ArticleSection