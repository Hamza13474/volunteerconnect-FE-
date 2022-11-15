import { AspectRatio, Divider, Heading, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react';
import headingBg from '../../assets/images/headingBg.jpg';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const AboutUs = () => {
    return (
        <>
            <Header />

            <HStack bgImage={headingBg} h={'10vh'} py={'20'} justifyContent={'center'}>
                <Heading color={'white'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>
                    About Us
                </Heading>
            </HStack>
            <Stack pb={{ base: '5', md: '10', lg: '14', xl: '20' }} pt={{ base: '5', md: '10', lg: '14', xl: '20' }} pl={{ base: '5', md: '10', lg: '14', xl: '20' }} pr={{ base: '5', md: '10', lg: '14', xl: '20' }} direction={['row-reverse', 'row']}>
                <VStack alignItems={'flex-start'} flex={'2'}>
                    <Heading textColor={'green.400'} textAlign={'left'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>
                        About Us
                    </Heading>

                    <Text>
                        Since 2021, VolunteerConnect has put the power of technology to good use by enabling the social sector to unlock over $14 billion worth of volunteer time. The award-winning nonprofit service has complemented and co-existed with commercial technologies to become the web’s largest and most popular volunteer recruiting platform. It serves thousands of nonprofits, a million interested volunteers a month, and has generated over $40 million in mission-related revenue from its legacy corporate volunteering product YourMatch.
                    </Text>

                    <Heading textColor={'green.400'} textAlign={'left'} pt={'10'} size={{ base: 'sm', md: 'md' }}>
                        Mission
                    </Heading>

                    <Text>
                        VolunteerConnect believes that volunteering can change lives – starting with yours. When we connect with our communities and each other through service we can find our passion and purpose, build camaraderie and hope, and experience joy and gratitude. Every person deserves an opportunity to be a part of the greater good.
                    </Text>
                    <Heading textColor={'green.400'} textAlign={'left'} pt={'10'} size={{ base: 'sm', md: 'md' }}>
                        Purpose
                    </Heading>

                    <Text>
                        Bring people and communities together through service.
                    </Text>
                </VStack>
                <VStack flex={'1'} pl={{ base: '0', md: '0', lg: '20' }}>
                    <Heading>Flood Appeal</Heading>
                    <Image height={'400px'} w={'full'} src="https://images.unsplash.com/photo-1617494532490-297fc0eb515e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                </VStack>
            </Stack>
            <VStack pb={{base: '5', md: '10', lg: '14', xl: '20' }} borderTop={'1px'} borderColor={'green'} pt={{ base: '5', md: '10', lg: '14', xl: '10' }} pl={{ base: '5', md: '10', lg: '14', xl: '20' }} pr={{ base: '5', md: '10', lg: '14', xl: '20' }} w={{ base: 'full', md: 'full', lg: '70%' }} m={'auto'}>
                <Heading textColor={'green.400'} textAlign={'left'} pt={'10'} size={{ base: 'sm', md: 'md' }}>
                    Vision
                </Heading>
                <Text textAlign={'center'} w={'full'} color={'#707070'} fontStyle={'italic'}>
                    “Service to Humanity with Integrity”
                </Text>
                <Heading textColor={'green.400'} textAlign={'left'} pt={'10'} size={{ base: 'sm', md: 'md' }}>
                    Guiding Principles
                </Heading>
                <Text>
                    Service | Integrity | Urgency | Collaboration | Growth
                </Text>

                <VStack pt={'10'} pb={'20'} alignItems={'center'}>
                    <Heading textColor={'green.400'} textAlign={'left'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>
                        History
                    </Heading>
                    <Text>
                        <b> Volunteer Connect </b>was launched in 2021 to provide people a useful directory to find and book trips and experiences worldwide. We aimed to provide a one stop place where people could easily search and find life changing opportunities from tours, jobs and courses to helping good causes, non-profits and companies who are ethical and promote responsible travel reach a wider audience.
                        Unlike a lot of profit organisations, One World 365 promotes free and cheap opportunities from local operators and NGO's alongside trips with large international travel brands. There is the option to learn new skills, take a new career path or just explore the world like a local and do more than just sunbathing. Our website quickly grew and at the same time so did our social network followers. Today we have thousands of visitors every week from all over the world and we also manage some of the most popular travel social network pages on the planet.
                    </Text>
                </VStack>


                <Heading textColor={'orange'} textAlign={'left'} pt={'10'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>
                    Contact
                </Heading>
                <VStack alignItems={'flex-start'}>
                    <Heading textAlign={'left'} pt={'0'} size={'md'}>
                        email
                    </Heading>
                    <Text>
                        Marketing and PR news@Volunteerconnect.org
                    </Text>
                    <Text>
                        VolunteerConnect Support support@Volunteerconnect.org
                    </Text>

                    <Heading textAlign={'left'} pt={'0'} size={'md'}>
                        Mainling Address
                    </Heading>
                    <Text>
                        1234 Sunol Blvd, Suite 10 PMB 1164; Pleasanton, CA 94566-7705
                    </Text>

                </VStack>

            </VStack>
            <Footer />

        </>
    )
}

export default AboutUs