import { Box, Flex } from '@chakra-ui/layout';
import { Tooltip } from '@chakra-ui/react';
import React from 'react';

interface Props {
    icon: JSX.Element;
    amount: number | string;
    color: any;
    statName: string;
}

const Stat: React.FC<Props> = ({icon, amount, color, statName}) => {

    return (
        <Tooltip hasArrow label={`${statName}: ${amount}`}>
        <Flex width={`${amount}%`} height='20px'  backgroundColor={color} alignItems='center' pl={2}>
            {icon}
        </Flex>
        </Tooltip>
    );
}

export default Stat;