import { Box, Button, Divider, Grid, GridItem, Heading, HStack, Image, Stack, Text, Toast, VStack } from '@chakra-ui/react';
import headingBg from '../../assets/images/headingBg.jpg';
import user from '../../assets/images/user.jpg';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { AddIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { Api_URL } from '../../utils/ApiURL';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


const AllNGO = () => {

    const navigate = useNavigate();

    const [data, setData] = useState([]);
    console.log(data[0]?.id, "get data NGO")
    useEffect(() => {
        const registerUser = async () => {
            await axios
                .get(`${Api_URL}/api/get-ngo`)
                .then((res) => {
                    setData(res.data?.Ngo);
                })
                .catch((err) => {
                    Toast.error(err?.response?.data.msg, {
                        position: "top-right",
                        autoClose: 2000,
                    });
                    console.log(err?.response?.data.msg)
                })
        }
        registerUser();
    }, [])




    return (
        <>
            <Header />

            <HStack bgImage={headingBg} h={'10vh'} py={'20'} justifyContent={'center'}>
                <Heading color={'white'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>
                    All NGO's
                </Heading>
            </HStack>
            <Stack direction={['column', 'column']} p={{ base: '5', md: '10', md: '20' }} spacing={'10'}>
                <Grid templateColumns='repeat(3, 1fr)' gap={6} spacing={'10'}>
                    {data?.map((item) => {
                        return (
                            <GridItem w={'full'} onClick={() => navigate(`/ngodetail/${item?.id}`)} bgColor={'white'} className="data_____box" alignItems={'flex-start'} py={'3'}>
                                <Box px={'3'} pb={'3'}>
                                    <Heading size={'sm'} p={'0'} m={'0'}>hehfiewhfio</Heading>
                                    <Text>{item?.organization_name}</Text>
                                    {/* ///http://localhost:8000/storage/ngoimage/  */}
                                </Box>
                                <Image h={'200px'} w={'full'} objectFit={'cover'} src={`${Api_URL}/storage/ngoimage/${item?.image}`} />
                                <Box px={'3'} py={'3'}>
                                    <Text>
                                        {item?.organizational_description}
                                    </Text>
                                </Box>
                            </GridItem>
                        )
                    })}
                </Grid>
            </Stack>
            <Footer />

        </>
    )
}

export default AllNGO