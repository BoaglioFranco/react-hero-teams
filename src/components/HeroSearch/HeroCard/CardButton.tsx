import { AddIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import React from 'react';

interface Props {
    onClick: any
}

const CardButton: React.FC<Props> = ({onClick}) => {

    return (
        <IconButton
        onClick={onClick}
        position="absolute"
        bottom="1rem"
        right="1rem"
        aria-label="Add to team"
        icon={<AddIcon />}
        size="sm"
        backgroundColor="transparent"
        borderRadius="50%"
        // border="1px solid black"
        _hover={{
          backgroundColor: "green.100",
        }}
      >
        Add
      </IconButton>
    );
}

export default CardButton;