import { Flex, FormControl, FormLabel, HStack, Image, Input, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import TriangleRightArrow from '../../assets/images/icons/TriangleRightArrow.svg';
import TriangleLeftArrow from '../../assets/images/icons/TriangleLeftArrow.svg';
import InfoImage from '../../assets/images/InfoImage.svg';
// import Modals from '../Modals/Modals';
// import ModelViewer from '../Modals/ModelViewer';

const InfoTab = () => {

    const [gender, setGender] = useState('Male');
    const handleClick = () => {
        if (gender === "Male") {
            setGender('Female')
        }
        else if (gender === 'Female') {
            setGender('Others')
        }
        else if (gender === 'Others') {
            setGender('Male')
        }
        // console.log("key index:", gender);
    };

    return (
        <HStack alignItems={'flex-start'}>
            <Flex
                h={{ base: '42.5vh', md: 'auto' }}
                position={{ base: 'absolute', md: 'unset' }}
                bottom={'0'} p={'6'}
                borderRadius={{ base: '0', md: '10px' }}
                flexWrap={'wrap'}
                justifyContent={'space-between'}
                flex={'1'}
                // bgColor={'#222127'}
                borderColor={'#2D2C34'}
                borderWidth={'2px'}
                m={'auto'}
                // w={{ base: 'full', md: '70%' }}
            >
                <FormControl w={'47%'}>
                    <FormLabel>First Name</FormLabel>
                    <Input type='text' placeholder='Enter first name' _placeholder={{ color: 'black', }} fontSize={'14px'} borderColor={'#2D2C32'} borderRadius={'full'} />
                </FormControl>
                <FormControl w={'47%'}>
                    <FormLabel>Last Name</FormLabel>
                    <Input type='text' placeholder='Enter last name' _placeholder={{ color: 'black', }} fontSize={'14px'} borderColor={'#2D2C32'} borderRadius={'full'} />
                </FormControl>
                <FormControl w={'47%'} mt={'10'}>
                    <FormLabel>Known as</FormLabel>
                    <Input type='text' placeholder='Known as' _placeholder={{ color: 'black', }} fontSize={'14px'} borderColor={'#2D2C32'} borderRadius={'full'} />
                </FormControl>
                <FormControl w={'47%'} mt={'10'}>
                    <FormLabel>Gender</FormLabel>
                    <HStack fontSize={'14px'} borderColor={'#2D2C32'} borderRadius={'full'} px={{ base: '5', md: '10' }} py={'2'} justifyContent={'space-between'}>
                        <Image src={TriangleLeftArrow} onClick={handleClick} />
                        {/* <Input type='text' placeholder='Female' _placeholder={{ color: 'white', }} w={'93px'} /> */}
                        <Text>{gender}</Text>
                        <Image src={TriangleRightArrow} onClick={handleClick} />
                    </HStack>
                </FormControl>
            </Flex>
            {/* <VStack flex={'1'}>
                <Image src={InfoImage} w={'full'} h={'400px'} objectFit={'contain'} />
                <Modals />
                <ModelViewer scale="40" modelPath={"/images/3d/Donut/donut.glb"} />
            </VStack> */}
        </HStack>
    )
}

export default InfoTab
