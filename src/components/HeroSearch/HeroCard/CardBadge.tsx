import { Badge } from '@chakra-ui/react';
import React from 'react';

interface Props {bad?: boolean}

const CardBadge: React.FC<Props> = ({bad}) => {

    return (
        <Badge
        colorScheme={bad ? "red" : "green"}
        position="absolute"
        top="1rem"
        right="1rem"
      >
        {bad ? 'bad' : 'good'}
      </Badge>
    );
}

export default CardBadge;