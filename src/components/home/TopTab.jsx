import React from 'react';
import TopAvatar from '../../assets/images/TopAvatar.svg';
import { Circle, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import TopStyle from '../../assets/images/Top/TopStyle.svg';
import { useDispatch } from 'react-redux';
import { addShirt } from '../../redux/action/shirts/shirts';


const TopTab = () => {

    const dispatch = useDispatch()
    const bh = 'shirt.glb'
    const selectShirt = () => {
        dispatch(addShirt(bh))
    }

    return (
        <HStack alignItems={'flex-start'} p={'0'} spacing={'0'}>
            <VStack h={{ base: '42.5vh', md: 'auto' }} position={{ base: 'absolute', md: 'unset' }} bottom={'0'} bgColor={'#222127'} flex={'1'} alignItems={'flex-start'}>
                <VStack w={'609px'} borderColor={'#2D2C34'} borderWidth={'2px'} alignItems={'flex-start'} borderRadius={'10px'} p={'7'}>
                    <Text textTransform={'uppercase'}>top style</Text>
                    <Flex flexWrap={'wrap'} className={''} alignItems={'flex-start'} justifyContent={'space-between'} w={'full'}>
                        <Circle onClick={() => selectShirt()} my={'2'} px={'3'} py={'1'} bg={'#646367'} color='white' borderWidth={'2px'} borderColor={'white'}>
                            <Image src={TopStyle} w={'100px'} h={'115px'} />
                        </Circle>
                    </Flex>
                </VStack>
            </VStack>
        </HStack>
    )
}

export default TopTab