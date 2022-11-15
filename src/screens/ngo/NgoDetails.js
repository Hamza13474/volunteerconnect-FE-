import { Box, Button, Divider, Heading, HStack, Stack, Text, VStack, Toast, Image } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import headingBg from '../../assets/images/headingBg.jpg';
import axios from 'axios';
import { Api_URL } from '../../utils/ApiURL';
import { useParams } from 'react-router-dom';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';


const NgoDetails = () => {

    const [data, setData] = useState([]);
    console.log(data, "get data ngo")
    let { tid } = useParams();


    const registerUser = async () => {
        await axios
            .get(`${Api_URL}/api/get-ngo-detail/${tid}`)
            .then((res) => {
                setData(res.data?.Ngo);
            })
            .catch((err) => {
                Toast.error(err?.response?.data.msg, {
                    position: "top-right",
                    autoClose: 2000,
                });
                // console.log(err?.response?.data.msg)
            })
    }
    useEffect(() => {
        registerUser();
    }, [])


    return (
        <>
            <Header />

            <HStack bgImage={headingBg} h={'10vh'} py={'20'} justifyContent={'center'}>
                <Heading color={'white'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>
                    NGO Detail
                </Heading>
            </HStack>
            <Stack direction={['column', 'row']} p={{ base: '5', md: '10', lg: '14', xl: '20' }} justifyContent={'space-between'} spacing={'20'}>
                <VStack flex={'2'} alignItems={'flex-start'}>
                    <Heading textAlign={'left'} fontWeight={'400'} size={{ base: 'sm', md: 'lg', xl: 'lg' }}>
                        {data?.organization_name}
                    </Heading>
                    <Divider orientation='horizontal' my={'5'} />

                    <Divider orientation='horizontal' />
                    <Image src={`${Api_URL}/storage/ngoimage/${data?.image}`} h={'70vh'} w={'full'} />
                    <Box py={'10'}>
                        <Heading size={'md'}>Description</Heading>
                        <Text>
                            {data?.organizational_description}
                        </Text>
                    </Box>
                    <Box py={'10'}>
                        <Heading size={'md'}>Mission Statement</Heading>
                        <Text>
                            {data?.mission_statement}
                        </Text>
                    </Box>

                </VStack>
                <VStack flex={'1'} border={'1px'} borderColor={'#c1c1c1'} borderRadius={'5px'} alignItems={'flex-start'} pt={'4'} pl={'4'}>
                    {/* <Box pb={'10'}>
                        <Heading size={'xs'}>Datas</Heading>
                        <Text>Start Date and Time <br />
                            {data?.st_date}
                        </Text>
                        <Text>Start Date <br />
                            {data?.ed_date}
                        </Text>
                    </Box> */}
                    <Box pb={'10'}>
                        <Heading size={'xs'}>Address</Heading>
                        <Text>
                            Address 1 <br />
                            {data?.address_1}
                        </Text>
                        <Text>
                            Address 2 <br />
                            {data?.address_2}
                        </Text>
                        <Text>
                            city <br />
                            {data?.city}
                        </Text>
                        <Text>
                            Postal Code <br />
                            {data?.postal_code}
                        </Text>
                    </Box>
                    <Box pb={'10'}>
                        <Heading size={'xs'}>Region</Heading>
                        <Text>{data?.region}</Text>
                    </Box>
                    <Box pb={'10'}>
                        <Heading size={'xs'}>Contact</Heading>
                        <Text>{data?.phone}</Text>
                    </Box>
                </VStack>
            </Stack>
            <Footer />

        </>
    )
}

export default NgoDetails