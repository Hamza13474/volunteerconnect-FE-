import React, { useState } from 'react';
import { Box, Link, Button, Heading, HStack, Image, Menu, MenuButton, MenuItem, MenuList, Square, Stack, Text, Toast } from '@chakra-ui/react';
import { ChevronDownIcon, SmallCloseIcon } from '@chakra-ui/icons'
import MenuImg from './MenuImg';
import MobileMenu from './MobileMenu';
import {
    useNavigate
} from 'react-router-dom';
import logo from '../../assets/images/logo.png';


const Header = () => {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('role');
        localStorage.removeItem('user_id');
        Toast({
            title: 'Account created.',
            description: "Logout user successfuly",
            status: 'success',
            duration: 2000,
            isClosable: true,
            position: "top"
        });
        navigate('/');
    }

    let condUser = localStorage?.getItem('user_id');
    let userRole = localStorage?.getItem('role');
    let userName = localStorage?.getItem('user_name')
    console.log(userName, "userName")
    userRole === 'NGO' ? console?.log(userRole, "condUser?????????? role") : console?.log(userRole, "..................... condUser")
    console?.log(condUser, "condUser")
    return (
        <Stack alignItems={'center'} direction={['row', 'row']} borderBottom={'1px'} borderColor={'#008c00'} justifyContent={'space-between'} px={{ base: '7', md: '10', lg: '20' }} py={'0'}>
            {/* <Link to={'/'}> */}
            {/* <Heading size={'md'}>Logo</Heading> */}
            <Image h='100px' w={'300px'} objectFit={'contain'} src={logo} onClick={() => navigate('/')} cursor={'pointer'} />
            {/* </Link> */}
            {/* <Heading size={'md'}>Logo</Heading> */}
            <Box display={{ base: 'flex', md: 'none' }}>
                <MobileMenu />
            </Box>
            <HStack display={{ base: 'none', md: 'flex' }} w="calc(100vw - 150px)" justifyContent={'space-between'} pl={'28'}>
                <HStack spacing={'10'} w={'full'} justifyContent={'center'}>
                    {/* <Link to='/aboutus' cursor={'pointer'} _hover={{ color: '#008c00', borderBottom: '1px', borderColor: '#008c00' }}>About us</Link> */}
                    {/* <Link to='/aboutus' cursor={'pointer'} _hover={{ color: '#008c00', borderBottom: '1px', borderColor: '#008c00' }}>About us</Link> */}
                    <Text onClick={() => navigate('/')} cursor={'pointer'} _hover={{ color: '#008c00', borderBottom: '1px', borderColor: '#008c00' }}>Home</Text>
                    <Text onClick={() => navigate('/aboutus')} cursor={'pointer'} _hover={{ color: '#008c00', borderBottom: '1px', borderColor: '#008c00' }}>About us</Text>
                    {/* <Text cursor={'pointer'} _hover={{ color: '#008c00', borderBottom: '1px', borderColor: '#008c00' }}>Our Foundation</Text> */}
                    <Menu>
                        <MenuButton
                            bgColor={'transparent'}
                            d={'flex'}
                            as={Button}
                            rightIcon={<ChevronDownIcon />}
                            borderColor={'#008c00'}
                            variant='outline'
                            border={'none'}
                            px={'0'}
                        >
                            NGO's
                        </MenuButton>
                        <MenuList
                            bgColor={'#008c00'} color={'white'} borderWidth={{ base: '0', md: '2px' }} borderColor={'#008c00'}
                            _hover={{ bg: '#008c00', color: 'white' }}
                        >
                            {
                                userRole === 'NGO' ?
                                    <>
                                        <MenuItem
                                            _hover={{ bg: '#008c00', color: 'white' }}
                                            _active={{ bg: '#008c00', color: 'white' }}
                                            _focus={{ bg: '#008c00', color: 'white' }}
                                            onClick={() => navigate('/createngo')}
                                        >Create NGO's</MenuItem>
                                        <MenuItem
                                            _hover={{ bg: '#008c00', color: 'white' }}
                                            _active={{ bg: '#008c00', color: 'white' }}
                                            _focus={{ bg: '#008c00', color: 'white' }}
                                            onClick={() => navigate('/allngo')}
                                        >All NGO's</MenuItem>
                                    </> :
                                    <MenuItem
                                        _hover={{ bg: '#008c00', color: 'white' }}
                                        _active={{ bg: '#008c00', color: 'white' }}
                                        _focus={{ bg: '#008c00', color: 'white' }}
                                        onClick={() => navigate('/allngo')}
                                    >All NGO's</MenuItem>
                            }

                        </MenuList>
                    </Menu>
                    <Text onClick={() => navigate('/tasks')} cursor={'pointer'} _hover={{ color: '#008c00', borderBottom: '1px', borderColor: '#008c00' }}>Tasks</Text>
                </HStack>
                <HStack>
                    {/* <Button onClick={() => navigate('/profile')} h='40px' w={'100px'} bg='transparent' borderWidth={'1px'} borderRadius={'5px'} borderColor={'#008c00'} variant='outline'>
                        Profile
                    </Button> */}
                    {/* <Button onClick={() => navigate('/auth')} h='40px' w={'100px'} bg='transparent' borderWidth={'1px'} borderRadius={'5px'} borderColor={'#008c00'} variant='outline'>
                        Login
                    </Button>
                    <Button onClick={() => logout()} h='40px' w={'100px'} bg='transparent' borderWidth={'1px'} borderRadius={'5px'} borderColor={'#008c00'} variant='outline'>
                        Logout
                    </Button> */}

                    {condUser ?
                        <Menu>
                            <MenuButton
                                _active={{ bg: '#008c00', color: 'white' }}
                                _hover={{ bg: '#008c00', color: 'white' }}
                                pl={'5px'} h='40px' w={'100px'} d={'flex'} as={Button} rightIcon={<ChevronDownIcon />} borderColor={'#008c00'} variant='outline'>
                                {userName}
                            </MenuButton>
                            <MenuList
                                bgColor={'#008c00'} color={'white'} borderWidth={{ base: '0', md: '2px' }} borderColor={'#008c00'}
                                _hover={{ bg: '#008c00', color: 'white' }}
                            >
                                <MenuItem
                                    _hover={{ bg: '#008c00', color: 'white' }}
                                    _active={{ bg: '#008c00', color: 'white' }}
                                    _focus={{ bg: '#008c00', color: 'white' }}
                                    onClick={() => logout()}
                                >Logout</MenuItem>
                            </MenuList>
                        </Menu>
                        :
                        <Button onClick={() => navigate('/auth')} h='40px' w={'100px'} bg='transparent' borderWidth={'1px'} borderRadius={'5px'} borderColor={'#008c00'} variant='outline'>
                            Login
                        </Button>
                    }
                    <Button onClick={() => navigate('/donateus')} h='40px' w={'150px'} bg='#008c00' color={'white'} _hover={{ color: '#008c00', bg: 'transparent' }} borderWidth={'1px'} borderRadius={'5px'} borderColor={'#008c00'} variant='outline'>
                        Donate us
                    </Button>
                </HStack>
            </HStack>
        </Stack >
    )
}

export default Header