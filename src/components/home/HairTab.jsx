import { Circle, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import HairAvatar from '../../assets/images/HairAvatar.svg';
import hairAvatarOrignal from '../../assets/images/Avatars/hairAvatarOrignal.svg'


const HairTab = () => {
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
            <VStack h={{ base: '42.5vh', md: 'auto' }} position={{ base: 'absolute', md: 'unset' }} bottom={'0'} bgColor={'#222127'} flex={'1'} alignItems={'flex-start'}>
                <VStack maxH={'400px'} overflowY={'auto'} w={'609px'} borderColor={'#2D2C34'} borderWidth={'2px'} alignItems={'flex-start'} borderRadius={'10px'} p={'7'}>
                    <Text>HAIR STYE tone</Text>
                    <Flex flexWrap={'wrap'} className={''} alignItems={'flex-start'} justifyContent={'space-between'} w={'full'}>
                        {/* {colorArry.map((ind, color) => {
                        <Circle width={'40px'} height={'40px'} bg={JSON.stringify(color.BGcolor)} key={ind} color='white' className='color_code'>
                            {color.name}
                        </Circle>
                    })} */}
                        <Circle my={'2'} px={'7'} py={'3'} bg={'#F3C9A7'} color='white' borderWidth={'2px'} borderColor={'white'}>
                            <Image src={hairAvatarOrignal} w={'52px'} h={'86px'} />
                        </Circle>
                        <Circle my={'2'} px={'7'} py={'3'} bg={'#F3C9A7'} color='white' borderWidth={'2px'} borderColor={'white'}>
                            <Image src={hairAvatarOrignal} w={'52px'} h={'86px'} />
                        </Circle>
                        <Circle my={'2'} px={'7'} py={'3'} bg={'#F3C9A7'} color='white' borderWidth={'2px'} borderColor={'white'}>
                            <Image src={hairAvatarOrignal} w={'52px'} h={'86px'} />
                        </Circle>
                        <Circle my={'2'} px={'7'} py={'3'} bg={'#F3C9A7'} color='white' borderWidth={'2px'} borderColor={'white'}>
                            <Image src={hairAvatarOrignal} w={'52px'} h={'86px'} />
                        </Circle>
                        <Circle my={'2'} px={'7'} py={'3'} bg={'#F3C9A7'} color='white' borderWidth={'2px'} borderColor={'white'}>
                            <Image src={hairAvatarOrignal} w={'52px'} h={'86px'} />
                        </Circle>
                        <Circle my={'2'} px={'7'} py={'3'} bg={'#F3C9A7'} color='white' borderWidth={'2px'} borderColor={'white'}>
                            <Image src={hairAvatarOrignal} w={'52px'} h={'86px'} />
                        </Circle>
                        <Circle my={'2'} px={'7'} py={'3'} bg={'#F3C9A7'} color='white' borderWidth={'2px'} borderColor={'white'}>
                            <Image src={hairAvatarOrignal} w={'52px'} h={'86px'} />
                        </Circle>
                        <Circle my={'2'} px={'7'} py={'3'} bg={'#F3C9A7'} color='white' borderWidth={'2px'} borderColor={'white'}>
                            <Image src={hairAvatarOrignal} w={'52px'} h={'86px'} />
                        </Circle>
                    </Flex>
                </VStack>
                <VStack maxH={'400px'} overflowY={'auto'} w={'609px'} borderColor={'#2D2C34'} borderWidth={'2px'} alignItems={'flex-start'} borderRadius={'10px'} p={'7'}>
                    <Text>Skin tone</Text>
                    <HStack flexWrap={'wrap'} className={''}>
                        {colorArry.map((item) => 
                            <Circle bg={(item.BGcolor)} className='color_code'>
                                {/* {color.name} */}
                            </Circle>
                        )}
                        {/* <Circle width={'40px'} height={'40px'} bg={'#F3C9A7'} color='white' className='color_code'></Circle>
                        <Circle width={'40px'} height={'40px'} bg={'#F3C9A7'} color='white' className='color_code'></Circle>
                        <Circle width={'40px'} height={'40px'} bg={'#F3C9A7'} color='white' className='color_code'></Circle>
                        <Circle width={'40px'} height={'40px'} bg={'#F3C9A7'} color='white' className='color_code'></Circle>
                        <Circle width={'40px'} height={'40px'} bg={'#F3C9A7'} color='white' className='color_code'></Circle>
                        <Circle width={'40px'} height={'40px'} bg={'#F3C9A7'} color='white' className='color_code'></Circle>
                        <Circle width={'40px'} height={'40px'} bg={'#F3C9A7'} color='white' className='color_code'></Circle>
                        <Circle width={'40px'} height={'40px'} bg={'#F3C9A7'} color='white' className='color_code'></Circle>
                        <Circle width={'40px'} height={'40px'} bg={'#F3C9A7'} color='white' className='color_code'></Circle>
                        <Circle width={'40px'} height={'40px'} bg={'#F3C9A7'} color='white' className='color_code'></Circle>
                        <Circle width={'40px'} height={'40px'} bg={'#F3C9A7'} color='white' className='color_code'></Circle> */}
                    </HStack>
                </VStack>
            </VStack>
            {/* <VStack flex={'1'} justifyContent={'center'} alignItems={'center'}>
                <Image src={HairAvatar} w={'509px'} h={'518px'} objectFit={'contain'} />
            </VStack> */}
        </HStack>
    )
}

export default HairTab 