import React from 'react';
import {Text} from '@chakra-ui/layout'

interface Props {}

const HeroName: React.FC<Props> = (props) => {

    return (
        <Text
        position="absolute"
        left="50%"
        transform='translateX(-50%)'
        textAlign='center'
        top="0"
        pt={2}
        fontWeight="bold"
        color="white"
        fontSize="2xl"
        style={{ WebkitTextStroke: "1px black" }}
      >
        {props.children}
      </Text>
    );
}

export default HeroName;