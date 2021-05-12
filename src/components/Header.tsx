import { Box, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

interface Props {}

const Header: React.FC<Props> = (props) => {

    return (
        <Box backgroundColor='#A6D6D6' p={2}>
            <Flex maxW='1100px' m='auto'>
                <Heading color='white' size='lg'>HERO APP</Heading>
            </Flex>
        </Box>
    );
}

export default Header;