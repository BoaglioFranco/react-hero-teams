import { Flex } from '@chakra-ui/layout';
import React from 'react';

interface Props {}

const TeamContainer: React.FC<Props> = ({children}) => {

    return (
    <Flex
    margin='auto'
    justifyContent='space-around'
    mt={4}
    height='55vh'>
        {children}
    </Flex>
        
    );
}

export default TeamContainer;