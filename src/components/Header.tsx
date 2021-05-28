import { Box, Button, Flex, Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext';

interface Props {}

const Header: React.FC<Props> = (props) => {
    const appCtx = useContext(AppContext);

    return (
        <Box backgroundColor='#A6D6D6' p={2}>
            <Flex minW='300px' w='80%' m='auto' justifyContent='space-between' alignItems='center'>
                <Heading color='white' size='lg'>HERO APP</Heading>
                <Button onClick={appCtx?.toggleDrawer}>Add heroes</Button>
            </Flex>
        </Box>
    );
}

export default Header;