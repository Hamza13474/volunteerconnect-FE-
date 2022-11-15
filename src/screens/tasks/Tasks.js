import { Box, Button, Divider, Grid, GridItem, Heading, HStack, Image, Stack, Text, Toast, VStack } from '@chakra-ui/react';
import headingBg from '../../assets/images/headingBg.jpg';
import user from '../../assets/images/user.jpg';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { AddIcon } from '@chakra-ui/icons'
import { Api_URL } from '../../utils/ApiURL';
import axios from 'axios';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
const Tasks = () => {

    const navigate = useNavigate();
    const [data, setData] = useState([]);
    console.log(data, "get data NGO")
    let userRole = localStorage?.getItem('role');


    useEffect(() => {
        const registerUser = async () => {
            await axios
                .get(`${Api_URL}/api/get-task`)
                .then((res) => {
                    setData(res.data?.Task);
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
                    Tasks
                </Heading>
            </HStack>
            <Stack direction={['column', 'column']} p={{ base: '5', md: '10', md: '20' }} spacing={'10'}>
               {userRole === 'NGO' ?
                <HStack alignItems={'flex-center'} w={'full'} justifyContent={'flex-end'}>
                    <Button onClick={() => navigate('/addtask')} px={'16'} h='40px' w={'100px'} bg='transparent' borderWidth={'1px'} borderRadius={'5px'} borderColor={'#008c00'} variant='outline'>
                        <AddIcon /> &nbsp; Add Task
                    </Button>
                </HStack>
                : null
                }
                <Grid templateColumns={{base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)', '2xl': 'repeat(4, 1fr)'}} gap={6} spacing={'10'}>
                    {data?.map((item) => {
                        return (
                            <GridItem onClick={() => navigate(`/tasksdetails/${item?.id}`)} w={'full'} bgColor={'white'} className="data_____box" alignItems={'flex-start'} py={'3'}>
                                <Box px={'3'} pb={'3'}>
                                    {/* <Heading size={'sm'} p={'0'} m={'0'}>Paradanusorn School</Heading> */}
                                    <Text>{item?.title}-- {item?.id}</Text>
                                </Box>
                                <Image h={'200px'} w={'full'} objectFit={'cover'} src={`${Api_URL}/storage/ngoimage/${item?.image}`} />
                                <Box px={'3'} py={'3'}>
                                    <Text>
                                        {item?.task_desc?.slice(0, 116)}
                                    </Text>
                                </Box>
                                <Divider orientation='horizontal' />
                                <Box px={'3'} pt={'3'}>
                                    {/* <Heading size={'md'}>Create a promotional video</Heading> */}
                                    <Text>Start time: {item?.st_date} </Text>
                                    <Text>Created by: {item?.name} </Text>
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

export default Tasks