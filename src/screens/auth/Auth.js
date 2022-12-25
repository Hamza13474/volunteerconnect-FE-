import { Button, Checkbox, HStack, Image, Input, Select, Tab, TabList, TabPanel, TabPanels, Tabs, Text, Toast, useToast, VStack } from '@chakra-ui/react';
import bgImg from '../../assets/images/auth.jpg';
import React, { useState } from 'react';
import { Api_URL } from '../../utils/ApiURL';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.png';


const Auth = () => {
    const toast = useToast();
    const navigate = useNavigate();
    const [data, setData] = useState(null);
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [role, setRole] = useState(null);
    const [password, setPassword] = useState(null);
    console?.log(data, "data")
    // login
    // localStorage.setItem(data)


    const registerUser = async () => {
        const data = {
            name: name,
            email: email,
            role: role,
            password: password
        }
        if (name !== null && email !== null && password !== null) {
            await axios
                .post(`${Api_URL}/api/add-user`, data)
                .then((res) => {
                    toast({
                        title: 'Account created.',
                        description: "We've created your account for you.",
                        status: 'success',
                        duration: 2000,
                        isClosable: true,
                        position: "top"
                    });
                    setData(res.data);
                    navigate('/auth')
                })
                .catch((err) => {
                    Toast.error(err?.response?.data.msg, {
                        position: "top-right",
                        autoClose: 2000,
                    });
                    console.log(err?.response?.data.msg)
                })
        }
        else if (name == null && email == null && password == null) {
            toast({
                title: 'Error.',
                description: "please fill all feilds",
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: "top"
            });
        }
        else {
            toast({
                title: 'Error.',
                description: "please fill all feilds",
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: "top"
            });
        }

    }


    // Login

    const LoginUser = async () => {
        const data = {
            email: email,
            password: password
        }
        if (email !== null && password !== null) {
            await axios
                .post(`${Api_URL}/api/user-login`, data)
                .then((res) => {
                    if (res?.data?.status === 200) {
                        setData(res.data);
                        localStorage.setItem('role', res.data.user_role);
                        localStorage.setItem('user_id', res.data.user_id);
                        localStorage.setItem('user_name', res.data.user_name);
                        toast({
                            title: 'User login successfuly.',
                            description: "Login user successfuly",
                            status: 'success',
                            duration: 2000,
                            isClosable: true,
                            position: "top"
                        });
                        navigate('/')
                        console.log('asdasd');
                    } else if (res?.data?.status === 300) {
                        console.log('else');
                        toast({
                            title: 'Error.',
                            description: "credentials are not correct",
                            status: 'error',
                            duration: 2000,
                            isClosable: true,
                            position: "top"
                        });
                    }
                })
                .catch((err) => {
                    console.log('catchhhhhhhhh');
                    Toast.error(err?.response?.data.msg, {
                        position: "top-right",
                        autoClose: 2000,
                    });
                    console.log(err?.response?.data.msg)
                })
        }
        else if (email == null && password == null) {
            toast({
                title: 'Error.',
                description: "please fill all feilds",
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: "top"
            });
        }
        else {
            toast({
                title: 'Error.',
                description: "please fill all feilds",
                status: 'error',
                duration: 2000,
                isClosable: true,
                position: "top"
            });
        }

    }





    return (
        <>

            <VStack bg='white' backgroundSize={'cover'} backgroundPosition={'center'} w={'full'} h={'100vh'} alignItems={'center'} justifyContent={'center'}>
                <Image h='100px' w={'300px'} objectFit={'contain'} src={logo} onClick={() => navigate('/')} cursor={'pointer'} />
                <Tabs variant='enclosed' color={'black'} isFitted w={{ base: 'full', md: '50%', lg: '40%' }} minH={{ base: 'auto', md: '50vh' }} borderColor={'black'} border={'1px'} >
                    <TabList mb='1em'>
                        <Tab _selected={{ color: 'white', fontWeight: '700', bg: 'black' }} borderRadius={'0'} py={'3.5'}>Login</Tab>
                        <Tab _selected={{ color: 'white', fontWeight: '700', bg: 'black' }} borderRadius={'0'} py={'3.5'}>Sign Up</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Input className='form__input' borderColor={'black'} _placeholder={'black'} placeholder='Email' type={'email'} mb={'5'} borderRadius={'0'} py={'6'} value={email} onChange={(e) => setEmail(e?.target?.value)} />
                            <Input className='form__input' borderColor={'black'} _placeholder={'black'} placeholder='Password' type={'password'} mb={'5'} borderRadius={'0'} py={'6'} color={'black'} value={password} onChange={(e) => setPassword(e?.target?.value)} />
                            <HStack justifyContent={'space-between'} alignItems={'center'} w={'full'}>
                                <Checkbox>Remember me</Checkbox>
                                <Button w={'fit-content'} bg={'black'} borderRadius={'0'} color={'white'} py={'6'} onClick={() => LoginUser()}>Login</Button>
                            </HStack>
                        </TabPanel>
                        <TabPanel>
                            <Input className='form__input' borderColor={'black'} onChange={(e) => setName(e?.target?.value)} value={name} placeholder='Full Name' type={'text'} mb={'5'} borderRadius={'0'} py={'6'} />
                            <Input className='form__input' borderColor={'black'} onChange={(e) => setEmail(e?.target?.value)} value={email} required="" placeholder='Email' type={'email'} borderRadius={'0'} py={'6'} />
                            <Select borderColor={'black'} onChange={(e) => setRole(e?.target?.value)} value={role} borderRadius={'0'} py={'5'} h={'50px'} bgColor={'transparent'}>
                                <option value='option1' selected style={{ backgroundColor: 'green' }}>Select Role</option>
                                <option value='NGO' style={{ backgroundColor: 'green' }}>NGO</option>
                                <option value='Volunteer' style={{ backgroundColor: 'green' }}>Volunteer</option>
                            </Select>
                            <Input borderColor={'black'} className='form__input' onChange={(e) => setPassword(e?.target?.value)} value={password} placeholder='Password' type={'password'} mb={'5'} borderRadius={'0'} py={'6'} color={'black'} />
                            {/* <Input placeholder='Confirm password' type={'password'} mb={'5'} borderRadius={'0'} py={'6'} color={'black'} /> */}
                            <Button w={'full'} color={'white'} bg={'black'} borderRadius={'0'} py={'6'} onClick={() => registerUser()}>Sign Up</Button>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
                <Text pt={'5'}>Note: If you have already an account please login, Otherwise Sign up</Text>
            </VStack>
        </>
    )
}

export default Auth