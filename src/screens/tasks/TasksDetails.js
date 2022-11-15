import { Box, Button, Divider, Heading, HStack, Stack, Text, VStack, Toast, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, ModalFooter, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import headingBg from '../../assets/images/headingBg.jpg';
import axios from 'axios';
import { Api_URL } from '../../utils/ApiURL';
import { useParams } from 'react-router-dom';
import Countdown from 'react-countdown';
import Certificate from '../../assets/Certificate.pdf';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const TasksDetails = () => {
    const [data, setData] = useState([]);
    const [dataD, setDataD] = useState([]);
    const [dataVolunteer, setDataVolunteer] = useState('');
    let { tid } = useParams();
    let userId = localStorage?.getItem('user_id');
    const [userRole, setRole] = useState('')
    // let userRole = localStorage?.getItem('role');
    let dataVolunteerStatus = localStorage?.getItem('dataVolunteerStatus');
    const [checkVolunteerStatus, setCheckVolunteerStatus] = useState(null);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [ddstate, setDDDState] = useState("");
    // const [currentDT, setCurrentDT] = useState('');

    useEffect(() => {
        setRole(localStorage?.getItem('role'));
    }, [])

    const [update, setUpdate] = useState();
    // let ddddd = data?.ed_date;
    const currentDT = new Date().toISOString();
    useEffect(() => {
        setUpdate(data?.ed_date);
        // setCurrentDT(data?.st_date);
    }, [data])
    // checkVolunteerStatus?.map((item) => item?.)

    useEffect(() => {
        const registerUser = async () => {
            await axios
                .get(`${Api_URL}/api/get-task-detail/${tid}`)
                .then((res) => {
                    setData(res.data?.Task);
                    setDataD(res?.data?.task_details);
                    let ab = res?.data?.task_details?.map((item) => item?.task_id)

                    if (ab == tid) {
                        setDDDState(ab)
                    } else {
                    }
                })
                .catch((err) => {
                    Toast.error(err?.response?.data.msg, {
                        position: "top-right",
                        autoClose: 2000,
                    });
                    // console.log(err?.response?.data.msg)
                })
        }
        registerUser();
    }, [])




    const addUserVolunteer = async () => {
        const payload = {
            user_id: parseInt(userId),
            task_id: data?.id
        }
        await axios
            .post(`${Api_URL}/api/apply-as-volunteer`, payload)
            .then((res) => {
                setDataVolunteer(res.data);
                localStorage?.setItem('dataVolunteerStatus', res?.data?.status)
            })
            .catch((err) => {
                Toast.error(err?.response?.data.msg, {
                    position: "top-right",
                    autoClose: 2000,
                });
            })
    }
    const addUser = async () => {
        await axios
            .get(`${Api_URL}/api/task-volunteer/${userId}`)
            .then((res) => {
                setCheckVolunteerStatus(res?.data?.Task)
            })
            .catch((err) => {
                Toast.error(err?.response?.data.msg, {
                    position: "top-right",
                    autoClose: 2000,
                });
            })
    }

    const hendlesubmit = () => {
        addUserVolunteer();
        onClose();
    }

    useEffect(() => {
        addUser();
    }, [])

    // task 4
    let val2 = [];
    let checkdata = checkVolunteerStatus?.map((dd, index) => {
        if (dd?.task_id == tid) {
            ///11 12 9 13
            return val2[index] = 0
        }
        else {
            return val2[index] = 1
            ///val2[1,1,1,1]
        }
    }
    )

    let isApplied = '1';
    for (let i = 0; i < val2.length; i++) { // xa =2;  i = 0 ; 
        isApplied = isApplied * val2[i]; //
    }
    ///val2[1.1.0.1] 0
    console.log(isApplied, '121212++++')


    return (
        <>
            <Header />
            <HStack bgImage={headingBg} h={'10vh'} py={'20'} justifyContent={'center'}>
                <Heading color={'white'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>
                    Task Detail
                </Heading>
            </HStack>
            {/* {tid}///
            {val2[0]};
            ///
            {val2[0]};
            is apply {isApplied} */}
            {/* lll {parseInt(num[1])} */}
            <Stack direction={['column', 'row']} p={{ base: '5', md: '10', lg: '14', xl: '20' }} justifyContent={'space-between'} spacing={'20'}>
                <VStack flex={'2'} alignItems={'flex-start'}>
                    <Heading textAlign={'left'} fontWeight={'400'} size={{ base: 'sm', md: 'lg', xl: 'lg' }}>
                        {data?.title}
                    </Heading>
                    <Divider orientation='horizontal' my={'5'} />
                    <HStack justifyContent={'space-between'} dir={['row', 'row']} w={'full'}>
                        <Heading display={'flex'} size={'sm'} fontWeight={'400'}>ORGANIZATION: &nbsp; {dataD[0]?.name} </Heading>
                        {userRole == 'Volunteer' ?
                            <>
                                {
                                    update > currentDT ?
                                        <>

                                            {
                                                isApplied === 0 ?
                                                    <Text>Applied</Text>
                                                    :
                                                    <>
                                                        <Button onClick={onOpen}>Apply as a volunteer</Button>
                                                        <Modal isOpen={isOpen} onClose={onClose} isCentered>
                                                            <ModalOverlay />
                                                            <ModalContent>
                                                                {/* <ModalHeader>Modal Title</ModalHeader> */}
                                                                <ModalCloseButton />
                                                                <ModalBody pt={'12'}>
                                                                    <Alert
                                                                        status='success'
                                                                        variant='subtle'
                                                                        flexDirection='column'
                                                                        alignItems='center'
                                                                        justifyContent='center'
                                                                        textAlign='center'
                                                                        height='200px'
                                                                        borderRadius={'10'}
                                                                    >
                                                                        <AlertIcon boxSize='40px' mr={0} />
                                                                        <AlertTitle mt={4} mb={1} fontSize='lg'>
                                                                            Application submitted!
                                                                        </AlertTitle>
                                                                        <AlertDescription maxWidth='sm'>
                                                                            Thanks for submitting your application. Our team will get back to you soon.
                                                                        </AlertDescription>
                                                                    </Alert>
                                                                </ModalBody>

                                                                <ModalFooter>
                                                                    <Button colorScheme='blue' mr={3} onClick={() => hendlesubmit()}>
                                                                        Submit
                                                                    </Button>
                                                                </ModalFooter>
                                                            </ModalContent>
                                                        </Modal>
                                                    </>

                                            }

                                        </>
                                        :
                                        null
                                }
                            </>
                            :
                            null
                        }
                    </HStack>
                    <Divider orientation='horizontal' />
                    <HStack justifyContent={'space-between'} w={'full'}>
                        <Text>Time has left</Text>
                        <Countdown date={new Date(update)} />
                        {/* : */}
                        {update < currentDT &&
                            <>
                                {
                                    userRole == 'Volunteer' && isApplied === 0 ?
                                        <a href={Certificate} target={'_blank'}>Certificate Download</a>
                                        : null
                                }
                            </>
                        }
                    </HStack>
                    <Divider orientation='horizontal' />
                    <Image src={`${Api_URL}/storage/ngoimage/${data?.image}`} h={'7 0vh'} w={'full'} />
                    <Box py={'10'}>
                        <Text>
                            {data?.task_desc}
                        </Text>
                    </Box>
                </VStack>
                <VStack flex={'1'} border={'1px'} borderColor={'#c1c1c1'} borderRadius={'5px'} alignItems={'flex-start'} pt={'4'} pl={'4'}>
                    <Box pb={'10'}>
                        <Heading size={'xs'}>Datas</Heading>
                        <Text>Start Date and Time <br />
                            {data?.st_date}
                        </Text>
                        <Text>End Date <br />
                            {data?.ed_date}
                        </Text>
                    </Box>
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
                            zip <br />
                            {data?.zip}
                        </Text>
                    </Box>
                    <Box pb={'10'}>
                        <Heading size={'xs'}>Number of volunteer</Heading>
                        <Text>{data?.no_of_volunteer}</Text>
                    </Box>
                    <Box pb={'10'}>
                        <Heading size={'xs'}>Contact</Heading>
                        <Text>{data?.contact}</Text>
                    </Box>
                </VStack>
            </Stack>
            <Footer />

        </>
    )
}

export default TasksDetails