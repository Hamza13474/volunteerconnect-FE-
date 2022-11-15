import { Box, Button, Checkbox, Heading, HStack, Image, Input, Stack, Text, Textarea, Toast, useToast, VStack } from '@chakra-ui/react';
import headingBg from '../../assets/images/headingBg.jpg';
import React, { useState } from 'react';
import { Api_URL } from '../../utils/ApiURL';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';

const CreateNGO = () => {

    const toast = useToast();
    const navigate = useNavigate();

    const [data, setData] = useState(null);
    console.log(data, "data")
    const [organizationName, setOrganizationName] = useState(null);
    const [addressOne, setAddressOne] = useState(null);
    const [addressTwo, setAddressTwo] = useState(null);
    const [city, setCity] = useState(null);
    const [region, setRegion] = useState(null);
    const [postalCode, setPostalCode] = useState(null);
    const [country, setCountry] = useState(null);
    const [phone, setPhone] = useState(null);
    const [missionStatement, setMissionStatement] = useState(null);
    const [organizationalDescription, setorGanizationalDescription] = useState(null);
    const [intrest, setIntrest] = useState(false);
    console.log(intrest, "intrest")
    const [image, setImage] = useState(null);

    const formData = new FormData();
    formData?.append("organization_name", organizationName);
    formData?.append("address_1", addressOne);
    formData?.append("address_2", addressTwo);
    formData?.append("city", city);
    formData?.append("region", region);
    formData?.append("postal_code", postalCode);
    formData?.append("country", country);
    formData?.append("phone", phone);
    formData?.append("mission_statement", missionStatement);
    formData?.append("organizational_description", organizationalDescription);
    // formData?.append("intrest", intrest);
    formData?.append("image", image)

    ///http://localhost:8000/storage/ngoimage/ {image name} image link
    const registerNgo = async () => {

        if (organizationName !== null && addressOne !== null && city !== null && phone !== null && image !== null) {
            await axios
                .post(`${Api_URL}/api/add-ngo`, formData)
                .then((res) => {
                    Toast({
                        title: 'Account created.',
                        description: "We've created your account for you.",
                        status: 'success',
                        duration: 2000,
                        isClosable: true,
                        position: "top"
                    });
                    setData(res.data);
                    navigate('/')
                })
                .catch((err) => {
                    Toast.error(err?.response?.data.msg, {
                        position: "top-right",
                        autoClose: 2000,
                    });
                    console.log(err?.response?.data.msg)
                })
        }
        else if (organizationName !== null && addressOne !== null && city !== null && phone !== null && image !== null) {
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
            <Header />

            <HStack bgImage={headingBg} h={'10vh'} py={'20'} justifyContent={'center'}>
                <Heading color={'white'} size={{ base: 'sm', md: 'lg', xl: 'xl' }}>
                    Create New NGO
                </Heading>
            </HStack>
            <Stack direction={['column', 'column']} py={{ base: '5', md: '10', lg: '20' }} px={{ base: '5', md: '10', lg: '20', xl: '32' }}>
                <VStack alignItems={'flex-start'} pb={'10'}>
                    <Heading size={'lg'} fontWeight={'400'}>Update your organization's profile</Heading>
                    <Heading size={'md'} fontWeight={'100'}>
                        Let volunteers know more about your organization's mission and primary cause areas to help them connect with you.
                    </Heading>
                </VStack>
                <Stack direction={['column', 'row']} spacing={'20'}>
                    <VStack flex={'1'}>
                        <Box w={'full'}>
                            <Text mb='8px'>Organization Name</Text>
                            <Input
                                onChange={(e) => setOrganizationName(e?.target?.value)}
                                value={organizationName}
                                size='sm'
                                w={'full'}
                            />
                        </Box>
                        <Box w={'full'}>
                            <Text mb='8px'>Address Line 1</Text>
                            <Input
                                onChange={(e) => setAddressOne(e?.target?.value)}
                                value={addressOne}
                                size='sm'
                                w={'full'}
                            />
                        </Box>
                        <Box w={'full'}>
                            <Text mb='8px'>Address Line 2</Text>
                            <Input
                                onChange={(e) => setAddressTwo(e?.target?.value)}
                                value={addressTwo}
                                size='sm'
                                w={'full'}
                            />
                        </Box>
                        <Box w={'full'}>
                            <Text mb='8px'>City</Text>
                            <Input
                                onChange={(e) => setCity(e?.target?.value)}
                                value={city}
                                size='sm'
                                w={'full'}
                            />
                        </Box>
                        <Box w={'full'}>
                            <Text mb='8px'>Region</Text>
                            <Input
                                onChange={(e) => setRegion(e?.target?.value)}
                                value={region}
                                size='sm'
                                w={'full'}
                            />
                        </Box>
                        <Box w={'full'}>
                            <Text mb='8px'>Postal Code</Text>
                            <Input
                                onChange={(e) => setPostalCode(e?.target?.value)}
                                value={postalCode}
                                size='sm'
                                w={'full'}
                            />
                        </Box>
                        <Box w={'full'}>
                            <Text mb='8px'>Country</Text>
                            <Input
                                onChange={(e) => setCountry(e?.target?.value)}
                                value={country}
                                size='sm'
                                w={'full'}
                            />
                        </Box>
                        <Box w={'full'}>
                            <Text mb='8px'>Phone</Text>
                            <Input
                                onChange={(e) => setPhone(e?.target?.value)}
                                value={phone}
                                size='sm'
                                w={'full'}
                            />
                        </Box>
                    </VStack>
                    <VStack flex={'1'} alignItems={'center'} justifyContent={'center'}>
                        <HStack>
                            <Image src='https://via.placeholder.com/150' />
                            <VStack alignItems={'flex-start'} spacing={'10'}>
                                <Text>A good photo helps distinguish your nonprofit and generates more potential volunteers</Text>
                                {/* <Button variant={'outline'}>Upload</Button> */}
                                <Input pt={'3'} h={'55px'} type={'file'} onChange={(e) => setImage(e?.target?.files[0])} />
                            </VStack>
                        </HStack>
                    </VStack>
                </Stack>
                <VStack py={'10'}>
                    <HStack w={'full'} justifyContent={'space-between'}>
                        <Text>MISSION STATEMENT:</Text>
                        <Text>Tell potential volunteers the aims and values of your organization</Text>
                    </HStack>
                    <Textarea onChange={(e) => setMissionStatement(e?.target?.value)} value={missionStatement}></Textarea>
                </VStack>
                <VStack pb={'10'}>
                    <HStack w={'full'} justifyContent={'space-between'}>
                        <Text>ORGANIZATION DESCRIPTION:</Text>
                        <Text>Tell potential volunteers about your history, goals, programs, and achievements</Text>
                    </HStack>
                    <Textarea onChange={(e) => setorGanizationalDescription(e?.target?.value)} value={organizationalDescription}></Textarea>
                    {/* <Input type={'checkbox'}  /> */}
                </VStack>
                {/* <HStack w={'full'} justifyContent={'space-between'}>
                    <Checkbox onChange={(e) => setIntrest(e.target.checked)}>Children & Youth</Checkbox>
                    <Checkbox>Community</Checkbox>
                </HStack>
                <HStack w={'full'} justifyContent={'space-between'}>
                    <Checkbox>Crisis Support</Checkbox>
                    <Checkbox>Homeless & Housing</Checkbox>
                    <Checkbox>Women</Checkbox>
                </HStack> */}
                <HStack pt={'10'} w={'full'} alignItems={'flex-center'} justifyContent={'flex-end'}>
                    <Button onClick={(e) => registerNgo()} bg='transparent' borderWidth={'1px'} borderRadius={'5px'} borderColor={'#008c00'} variant='outline'>Save</Button>
                </HStack>
            </Stack>
            <Footer />

        </>
    )
}

export default CreateNGO