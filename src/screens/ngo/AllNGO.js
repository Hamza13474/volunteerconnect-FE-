import { Box, Button, Divider, Grid, GridItem, Heading, HStack, Image, Stack, Text, Toast, useToast, VStack } from '@chakra-ui/react';
import headingBg from '../../assets/images/headingBg.jpg';
import user from '../../assets/images/user.jpg';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { AddIcon, DeleteIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { Api_URL } from '../../utils/ApiURL';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


const AllNGO = () => {

    const navigate = useNavigate();
    const toast = useToast();

    const [delRoal, setDelRoal] = useState(null);

    useEffect(() => {
        setDelRoal(localStorage?.getItem('role', 'admin'))
    }, [delRoal])


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

    const delNgo = async (id) => {
        await axios
            .delete(`${Api_URL}/api/delete-ngo/${id}`)
            .then((res) => {
                window.location.reload();
                console.log('hit......', res);
                // setData(res.data?.Ngo);
                toast({
                    title: res?.data?.message,
                    description: "Delete NGO successfuly",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                    position: "right"
                });
                // navigate('/allngo');
            })
            .catch((err) => {
                Toast.error(err?.response?.data.msg, {
                    position: "top-right",
                    autoClose: 2000,
                });
                console.log(err?.response?.data.msg)
            })
    }





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
                            <GridItem w={'full'} bgColor={'white'} className="data_____box" alignItems={'flex-start'} py={'3'}>
                                <HStack px={'3'} pb={'3'} w={'full'} justifyContent={'space-between'}>
                                    <Box>
                                        <Heading size={'sm'} p={'0'} m={'0'}>hehfiewhfio</Heading>
                                        <Text>{item?.organization_name}</Text>
                                        {/* ///http://localhost:8000/storage/ngoimage/  */}
                                    </Box>
                                    {delRoal === 'admin' ?
                                        <Button onClick={() => delNgo(item?.id)}>
                                            <DeleteIcon />
                                        </Button>
                                        : null}
                                </HStack>
                                <Image h={'200px'} w={'full'} objectFit={'cover'} src={`${Api_URL}/storage/ngoimage/${item?.image}`} />
                                <Box px={'3'} py={'3'}>
                                    <Text>
                                        {item?.organizational_description}
                                    </Text>
                                    <Button variant='link' color={'blue.400'} mt={'5'} onClick={() => navigate(`/ngodetail/${item?.id}`)}>Read More</Button>
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