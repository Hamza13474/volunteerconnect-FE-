import { Heading, HStack } from '@chakra-ui/react';
import React from 'react';
import Stripe from '../stripe/Stripe'
import headingBg from '../../assets/images/headingBg.jpg';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const DonateUs = () => {
    return (
        <>
            <Header />

            <HStack bgImage={headingBg} h={'10vh'} py={'20'} justifyContent={'center'}>
                <Heading color={'white'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>
                    Donate Us
                </Heading>
            </HStack>
            <Stripe />
            <Footer />

        </>
    )
}

export default DonateUs