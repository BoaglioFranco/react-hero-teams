import { CloseIcon } from '@chakra-ui/icons';
import React from 'react';

interface Props {onClick: any}

const CloseIcn: React.FC<Props> = ({onClick}) => {

    return (
        <CloseIcon
          position="absolute"
          top=".5rem"
          right=".5rem"
          boxSize="1.5rem"
          padding={1}
          onClick={onClick}
          borderRadius="50%"
          backgroundColor="red.500"
          color="white"
        />
    );
}

export default CloseIcn;