import { Circle, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import AvatarImag from '../../assets/images/userAvatar.svg';

const BodyTab = () => {
    const colorArry = [
        {
            BGcolor: '#F3C9A7',
            name: 'code'
        },
        {
            BGcolor: '#D9A47F',
            name: 'code'
        },
        {
            BGcolor: '#B47F5A',
            name: 'code'
        },
        {
            BGcolor: '#9E653D',
            name: 'code'
        },
        {
            BGcolor: '#7A553B',
            name: 'code'
        },
        {
            BGcolor: '#7A553B',
            name: 'code'
        },
        {
            BGcolor: '#7A553B',
            name: 'code'
        },
        {
            BGcolor: '#624030',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
        {
            BGcolor: '#572E1B',
            name: 'code'
        },
    ];
    return (
        <HStack alignItems={'flex-start'}>
            <VStack position={{base: 'absolute', md: 'unset'}} bottom={'0'} bgColor={'#222127'} flex={'1'} borderColor={'#2D2C34'} borderWidth={'2px'} alignItems={'flex-start'} borderRadius={'10px'} p={'7'} maxH={'400px'} overflowY={'auto'}>
                <Text>Skin tone</Text>
                <HStack flexWrap={'wrap'} spacing={'0'}>
                    {colorArry.map((item) => 
                        <Circle bg={(item.BGcolor)} className='color_code'>
                        </Circle>
                    )}
                </HStack>
            </VStack>
            {/* <VStack flex={'1'}>
                <Image src={AvatarImag} />
            </VStack> */}
        </HStack>
    )
}

export default BodyTab