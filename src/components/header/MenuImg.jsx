import { Image } from '@chakra-ui/react';
import React from 'react';
import userAvatar from '../../assets/images/user.jpg'

const MenuImg = () => {
    return (
        <Image
            boxSize='30px'
            borderRadius={'3'}
            objectFit='cover'
            src={userAvatar}
            alt='Dan Abramov'
        />
    )
}

export default MenuImg