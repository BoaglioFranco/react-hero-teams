import { Flex, Grid } from '@chakra-ui/layout';
import React from 'react';

interface Props {}

const TeamContainer: React.FC<Props> = ({children}) => {

    return (
    <Grid
    templateColumns={['15rem', 'repeat(2,1fr)', 'repeat(3,1fr)','repeat(6,1fr)']}
    margin='auto'
    gap='1.5rem'
    justifyContent='center'
    justifyItems='center'
    mt={4}
    >
        {children}
    </Grid>
        
    );
}

export default TeamContainer;