import React from 'react';
import { Box, Button, Divider, Grid, GridItem, Heading, HStack, Image, Stack, Text, Toast, VStack } from '@chakra-ui/react';
import headingBg from '../../assets/images/headingBg.jpg';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';


const Profile = () => {
    return (
        <>
            <Header />

            <HStack bgImage={headingBg} h={'10vh'} py={'20'} justifyContent={'center'}>
                <Heading color={'white'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>
                    Profile
                </Heading>
            </HStack>
            <Stack direction={['column', 'column']} p={{ base: '5', md: '10', md: '20' }} spacing={'10'}>

            </Stack>
            <Footer />

        </>
    )
}

export default Profile