import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, Heading, HStack, Image, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, useDisclosure, VStack } from '@chakra-ui/react';
import { ChevronLeftIcon, InfoIcon } from '@chakra-ui/icons';
import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import headingBg from '../../assets/images/headingBg.jpg';
import involments from '../../assets/images/involments.jpg';
import involmentsArea from '../../assets/images/involmentsArea.jpeg';
import slider1 from '../../assets/images/slider1.jpg';
import slider2 from '../../assets/images/slider2.jpg';
import slider3 from '../../assets/images/slider3.png';
import vc from '../../assets/images/vc.jpeg';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


const Landing = () => {
    const SlideData = [
        {
            image: slider1
        },
        {
            image: slider2
        },
        {
            image: slider3
        }
    ];

    let postedData = {
        savedform: [
            {
                peoples: "peoples"
            }
        ]
    };

    return (
        <>
            <Header />
            <Stack direction={['row', 'row']}>
                <VStack w={'full'} position={'relative'}>
                    <Carousel infiniteLoop>
                        {SlideData.map((slide) => {
                            return <Image src={slide.image} height="65vh" objectFit={'cover'} width="800px" />;
                        })}
                    </Carousel>
                    {/* <PDFViewer>
                    <PdfDocument />
                </PDFViewer> */}

                    <VStack alignItems={'flex-start'} p={{ base: '5', md: '10', lg: '14', xl: '20' }}>
                        <VStack alignItems={'flex-start'}>
                            <Heading textAlign={'left'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>
                                Our Mission
                            </Heading>
                            <Text>
                                VolunteerConnect believes that volunteering can change lives – starting with yours. When we connect with our communities and each other through service we can find our passion and purpose, build camaraderie and hope, and experience joy and gratitude. Every person deserves an opportunity to be a part of the greater good. VolunteerConnect believes that volunteering can change lives – starting with yours. When we connect with our communities and each other through service we can find our passion and purpose, build camaraderie and hope, and experience joy and gratitude. Every person deserves an opportunity to be a part of the greater good.
                            </Text>
                        </VStack>
                        <VStack pt={'10'} pb={'20'} alignItems={'flex-start'}>
                            <Heading textAlign={'left'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>
                                Our Vision
                            </Heading>
                            <Text>
                                Digital infrastructure that strengthens the ethos and impact of volunteering at scale. Bring people and communities together through service.
                            </Text>
                        </VStack>


                        <HStack py={'20'}>
                            <HStack flex={'1'} alignItems={'center'} justifyContent={'flex-end'} >
                                <Image src={vc} h={'50vh'} />
                            </HStack>
                            <VStack flex={'1'} pl={{ base: '0', md: '5', lg: '10', xl: '20' }} alignItems={'flex-start'}>
                                <Heading color={'#000000'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>More people.</Heading>
                                <Heading color={'#000000'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>More impact.</Heading>
                                <Text>
                                    VolunteerConnect is the most effective way to recruit highly qualified volunteers for your nonprofit. We match you with people who are passionate about and committed to your cause, and who can help when and where you need them.
                                </Text>
                                <Text>
                                    And because volunteers are often donors as well, we make it easy for them to contribute their time and money.
                                </Text>

                                <HStack pt={'10'} w={'full'} justifyContent={'space-around'} pb={'10'}>
                                    <Box textAlign={'center'}>
                                        <Heading color={'red'} size={{ base: 'sm', md: 'lg', xl: '3xl' }}>
                                            1.3M
                                        </Heading>
                                        <Text color={'black'}>monthly visitors</Text>
                                    </Box>
                                    <Box textAlign={'center'}>
                                        <Heading color={'green'} size={{ base: 'sm', md: 'lg', xl: '3xl' }}>
                                            17.5M
                                        </Heading>
                                        <Text color={'black'}>volunteers connected</Text>
                                    </Box>
                                </HStack>
                                <HStack w={'full'} justifyContent={'space-around'}>
                                    <Box textAlign={'center'}>
                                        <Heading color={'blue'} size={{ base: 'sm', md: 'lg', xl: '3xl' }}>
                                            140.9K
                                        </Heading>
                                        <Text color={'black'}>non profits</Text>
                                    </Box>
                                    <Box textAlign={'center'}>
                                        <Heading color={'orange'} size={{ base: 'sm', md: 'lg', xl: '3xl' }}>
                                            10M
                                        </Heading>
                                        <Text color={'black'}>volunteers needed</Text>
                                    </Box>
                                </HStack>
                            </VStack>

                        </HStack>

                        <Stack alignItems={'center'} justifyContent={'space-around'} direction={['column', 'row']} w={'full'} bgImage={headingBg} h={'10vh'} py={'20'} >
                            <Box textAlign={'center'}>
                                <Heading color={'white'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>
                                    150,000
                                </Heading>
                                <Text color={'white'}>Flood Relief</Text>
                            </Box>
                            <Box textAlign={'center'}>
                                <Heading color={'white'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>
                                    238,000
                                </Heading>
                                <Text color={'white'}>Marriage Served</Text>
                            </Box>
                            <Box textAlign={'center'}>
                                <Heading color={'white'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>
                                    27,600
                                </Heading>
                                <Text color={'white'}>Patinets Served</Text>
                            </Box>
                            <Box textAlign={'center'}>
                                <Heading color={'white'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>
                                    394,700
                                </Heading>
                                <Text color={'white'}>Educational Served</Text>
                            </Box>
                        </Stack>
                        <HStack pt={'20'}>
                            <HStack flex={'1'} bgImage={involments} h={'70vh'} backgroundRepeat={'no-repeat'} alignItems={'center'} justifyContent={'flex-end'}>
                                <Image src={involmentsArea} h={'50vh'} />
                            </HStack>
                            <VStack flex={'1'} pl={{ base: '0', md: '5', lg: '10', xl: '20' }} alignItems={'flex-start'}>
                                <Heading size={'md'} color={'#008c00'} pb={'5'}>HELP US, HELP THEM</Heading>
                                <Text>
                                    Our mission to provide relief to the affectees needs your help in continuing these efforts by contributing, sharing, and spreading our message across the country. Do your part in ensuring Hope Not Out for all.
                                </Text>
                                <Heading py={'5'} size={'sm'} color={'#008c00'}>You can help them by providing:</Heading>
                                <Text fontWeight={'500'}>* RATION BAG – <span style={{ color: '#008c00', fontWeight: '700' }}>$38</span></Text>
                                <Text fontWeight={'500'}>* SURVIVAL KIT – <span style={{ color: '#008c00', fontWeight: '700' }}>$38</span></Text>
                                <Text fontWeight={'500'}>* SHELTER TENT  – <span style={{ color: '#008c00', fontWeight: '700' }}>$38</span></Text>
                                <Text fontWeight={'500'}>* MEDICAL CAMP – <span style={{ color: '#008c00', fontWeight: '700' }}>$38</span></Text>
                            </VStack>
                        </HStack>
                    </VStack>
                </VStack>
            </Stack>
            <Footer />
        </>
    )
}

export default Landing