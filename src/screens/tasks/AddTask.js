import { Button, Heading, Input, Stack, Text, Textarea, Toast, useToast, VStack } from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgImg from '../../assets/images/auth.jpg';
import TextEditor from '../../components/editor/Editor';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import { Api_URL } from '../../utils/ApiURL';

const AddTask = () => {

    const toast = useToast();
    const navigate = useNavigate();

    const [data, setData] = useState(null);
    console.log(data, "data")
    const [organizationName, setOrganizationName] = useState(null);
    const [addressOne, setAddressOne] = useState(null);
    const [addressTwo, setAddressTwo] = useState(null);
    const [city, setCity] = useState(null);
    const [postalCode, setPostalCode] = useState(null);
    const [contact, setContact] = useState(null);
    const [organizationalDescription, setorGanizationalDescription] = useState(null);
    const [volunteersCount, setVolunteersCount] = useState(null);
    const [tsData, setTSData] = useState(null);
    const [teData, setTEData] = useState(null);
    const [image, setImage] = useState(null);
    const [thearticle, setTheArticle] = useState(null);
    const getid = localStorage.getItem('user_id');

    const formData = new FormData();
    formData?.append("title", organizationName);
    formData?.append("address_1", addressOne);
    formData?.append("address_2", addressTwo);
    formData?.append("city", city);
    formData?.append("no_of_volunteer", volunteersCount);
    formData?.append("zip", postalCode);
    formData?.append("user_id", getid);
    formData?.append("contact", contact);
    formData?.append("task_desc", organizationalDescription);
    formData?.append("st_date", tsData);
    formData?.append("ed_date", teData);
    formData?.append("image", image)
    formData?.append("thearticle", thearticle)

    // const [formData, setFormData] = useState({
    //     title: "",
    //     description: "",
    //     category: "",
    //     tags: "asd",
    //     theArticle: null,
    //     imageUrl: null,
    // });

    const setEditor = (data) => {
        setTheArticle({ ...formData, thearticle: data });
    };














    ///http://localhost:8000/storage/ngoimage/ {image name} image link
    const registerTask = async () => {

        if (organizationName !== null && addressOne !== null && city !== null && contact !== null && image !== null) {
            await axios
                .post(`${Api_URL}/api/add-task`, formData)
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
                    navigate('/tasks')
                })
                .catch((err) => {
                    Toast.error(err?.response?.data.msg, {
                        position: "top-right",
                        autoClose: 2000,
                    });
                    console.log(err?.response?.data.msg)
                })
        }
        else if (organizationName !== null && addressOne !== null && city !== null && contact !== null && image !== null) {
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
            <VStack backgroundImage={bgImg} backgroundSize={'cover'} backgroundPosition={'center'} w={'full'} minH={{ base: 'auto', md: 'auto', lg: '120vh' }} py={'10'} alignItems={'center'} justifyContent={'center'}>
                <VStack color={'white'} isFitted w={{ base: 'full', md: '60%', lg: '65%', xl: '50%' }} p={'5'} minH={{ base: 'auto', md: '50vh' }} bgGradient='linear(to-b, #d4efdb38, #2f723a45 )'>
                    <Heading size={'lg'} mb={'3'}>Create Task</Heading>
                    <Input onChange={(e) => setOrganizationName(e?.target?.value)} value={organizationName} placeholder='Enter Title' type={'text'} mb={'5'} borderRadius={'0'} py={'6'} />
                    <Input onChange={(e) => setContact(e?.target?.value)} value={contact} placeholder='Enter your Contact' type={'text'} borderRadius={'0'} py={'6'} />
                    <Input onChange={(e) => setAddressOne(e?.target?.value)} value={addressOne} placeholder='Address 1' type={'text'} mb={'5'} borderRadius={'0'} py={'6'} color={'white'} />
                    <Input onChange={(e) => setAddressTwo(e?.target?.value)} value={addressTwo} placeholder='Address 2' type={'text'} mb={'5'} borderRadius={'0'} py={'6'} color={'white'} />
                    <Input onChange={(e) => setCity(e?.target?.value)} value={city} placeholder='City' type={'text'} mb={'5'} borderRadius={'0'} py={'6'} color={'white'} />
                    <Input onChange={(e) => setPostalCode(e?.target?.value)} value={postalCode} placeholder='Zip' type={'text'} mb={'5'} borderRadius={'0'} py={'6'} color={'white'} />
                    <Input onChange={(e) => setVolunteersCount(e?.target?.value)} value={volunteersCount} placeholder='How many volunteers do you need for the Opportunity?' type={'text'} mb={'5'} borderRadius={'0'} py={'6'} color={'white'} />
                    <Input value={getid} type={'hidden'} />
                    <TextEditor onEditorChange={setTheArticle} />
                    <Textarea onChange={(e) => setorGanizationalDescription(e?.target?.value)} value={organizationalDescription} rows={'10'} placeholder='Enter Short Description' borderRadius={'0'} color={'white'} className={'footer___input'}></Textarea>
                    <Stack direction={['column', 'row']} py={'5'} w={'full'}>
                        <VStack flex={'1'} alignItems={'flex-start'}>
                            <Text mb='8px'>Select Start Date and Time</Text>
                            <Input
                                size="md"
                                w={'full'}
                                value={tsData}
                                // type="date"
                                type="datetime-local"
                                borderRadius={'0'} py={'6'} color={'white'}
                                onChange={(e) => setTSData(e?.target?.value)}
                            />
                        </VStack>
                        <VStack flex={'1'} alignItems={'flex-start'}>
                            <Text mb='8px'>Select End Date and Time</Text>
                            <Input
                                size="md"
                                w={'full'}
                                value={teData}
                                // type="date"
                                type="datetime-local"
                                borderRadius={'0'} py={'6'} color={'white'}
                                onChange={(e) => setTEData(e?.target?.value)}
                            />
                        </VStack>
                    </Stack>
                    <Input pt={'3'} h={'55px'} type={'file'} onChange={(e) => setImage(e?.target?.files[0])} />
                    <Button w={'full'} bg={'black'} borderRadius={'0'} py={'6'} onClick={() => registerTask()}>Add Task</Button>
                </VStack>
            </VStack>
            <Footer />

        </>
    )
}

export default AddTask