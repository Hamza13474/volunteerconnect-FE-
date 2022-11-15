import React from 'react';
import TopAvatar from '../../assets/images/TopAvatar.svg';
import { Circle, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import shoe from '../../assets/images/shoe/shoes.svg';
import { useDispatch } from 'react-redux';
import { addShoe } from '../../redux/action/shoe/shoeA';


const ShoeTop = () => {

    const dispatch = useDispatch();
    const shoe = 'shoes.glb';
    const AddShoeHande = () => {
        dispatch(addShoe(shoe))
    }

    return (
        <HStack alignItems={'flex-start'} p={'0'} spacing={'0'}>
            <VStack position={{base: 'absolute', md: 'unset'}} bottom={'0'} bgColor={'#222127'} flex={'1'} alignItems={'flex-start'}>
                <VStack w={'609px'} borderColor={'#2D2C34'} borderWidth={'2px'} alignItems={'flex-start'} borderRadius={'10px'} p={'7'}>
                    <Text textTransform={'uppercase'}>shoes style</Text>
                    <Flex flexWrap={'wrap'} className={''} alignItems={'flex-start'} justifyContent={'space-between'} w={'full'}>
                        {/* {colorArry.map((ind, color) => {
                        <Circle width={'40px'} height={'40px'} bg={JSON.stringify(color.BGcolor)} key={ind} color='white'>
                            {color.name}
                        </Circle>
                    })} */}
                        <Circle onClick={() => AddShoeHande()} my={'2'} px={'3'} py={'1'} bg={'#646367'} color='white' borderWidth={'2px'} borderColor={'white'}>
                            <Image src={shoe} w={'100px'} h={'115px'} />
                        </Circle>
                    </Flex>
                </VStack>
            </VStack>
            {/* <VStack flex={'1'} justifyContent={'center'} alignItems={'center'}>
                <Image src={TopAvatar} w={'509px'} h={'518px'} objectFit={'contain'} />
            </VStack> */}
        </HStack>
    )
}

export default ShoeTop