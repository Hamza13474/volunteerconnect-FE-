import { AddIcon, InfoIcon } from '@chakra-ui/icons'
import { Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Image, Tab, TabList, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react';
// import body from '../../assets/images/icons/image.png';
import glasses from '../../assets/images/icons/glasses.svg';
import shoe from '../../assets/images/icons/shoe.svg';
import jeen from '../../assets/images/icons/jeen.svg';
import shirt from '../../assets/images/icons/shirt.svg';
import hair from '../../assets/images/icons/hair.svg';
import body from '../../assets/images/icons/body.svg';

const MobileView = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const firstField = React.useRef()
    return (
        <>
            <Button onClick={onOpen} color={'#FF0083'} borderColor={'#FF0083'} borderWidth={'1px'} bgColor={'transparent'}>
                Create
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='bottom'
                initialFocusRef={firstField}
                onClose={onClose}
            >
                {/* <DrawerOverlay /> */}
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth='1px'>
                        <TabList overflow={'auto'} whiteSpace={'nowrap'} justifyContent={'space-between'} py={'5'} px={{ base: '0', md: '10', lg: '20' }} borderBottomLeftRadius={'10px'} borderBottomRightRadius={'10px'} bgColor={'#222127'} borderWidth={'2px'} borderColor={'#2D2C34'}>
                            <Tab mx={{ base: '7', md: '0', lg: '0' }} _selected={{ color: 'white', borderColor: 'white' }} px={'0'} _active={{ color: 'white', borderColor: 'white', bg: 'transparent' }}>
                                <InfoIcon mr={'11px'} /> <Text>INFO</Text>
                            </Tab>
                            <Tab mx={{ base: '7', md: '0', lg: '0' }} _selected={{ color: 'white', borderColor: 'white' }} px={'0'} _active={{ color: 'white', borderColor: 'white', bg: 'transparent' }}>
                                <Image src={body} mr={'11px'} /> <Text>BODY</Text>
                            </Tab>
                            <Tab mx={{ base: '7', md: '0', lg: '0' }} _selected={{ color: 'white', borderColor: 'white' }} px={'0'} _active={{ color: 'white', borderColor: 'white', bg: 'transparent' }}>
                                <Image src={hair} mr={'11px'} /> <Text>HAIR</Text>
                            </Tab>
                            <Tab mx={{ base: '7', md: '0', lg: '0' }} _selected={{ color: 'white', borderColor: 'white' }} px={'0'} _active={{ color: 'white', borderColor: 'white', bg: 'transparent' }}>
                                <Image src={hair} mr={'11px'} /> <Text>FACIAL</Text>
                            </Tab>
                            <Tab mx={{ base: '7', md: '0', lg: '0' }} _selected={{ color: 'white', borderColor: 'white' }} px={'0'} _active={{ color: 'white', borderColor: 'white', bg: 'transparent' }}>
                                <Image src={shirt} mr={'11px'} /> <Text>TOP</Text>
                            </Tab>
                            <Tab mx={{ base: '7', md: '0', lg: '0' }} _selected={{ color: 'white', borderColor: 'white' }} px={'0'} _active={{ color: 'white', borderColor: 'white', bg: 'transparent' }}>
                                <Image src={jeen} mr={'11px'} /> <Text>BOTTOM</Text>
                            </Tab>
                            <Tab mx={{ base: '7', md: '0', lg: '0' }} _selected={{ color: 'white', borderColor: 'white' }} px={'0'} _active={{ color: 'white', borderColor: 'white', bg: 'transparent' }}>
                                <Image src={shoe} mr={'11px'} /> <Text>SHOE</Text>
                            </Tab>
                            <Tab mx={{ base: '7', md: '0', lg: '0' }} _selected={{ color: 'white', borderColor: 'white' }} px={'0'} _active={{ color: 'white', borderColor: 'white', bg: 'transparent' }}>
                                <Image src={glasses} boxSize={'30px'} mr={'11px'} /> <Text>ACCESSORIES</Text>
                            </Tab>
                        </TabList>
                    </DrawerHeader>

                    <DrawerBody>
                        <Text>Drawer</Text>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth='1px'>
                        <Button variant='outline' mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme='blue'>Submit</Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default MobileView