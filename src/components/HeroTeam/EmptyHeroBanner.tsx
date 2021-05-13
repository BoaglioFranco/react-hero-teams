import { Flex } from "@chakra-ui/layout";
import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
interface Props {}

const EmptyHeroBanner: React.FC<Props> = (props) => {
  return (
    <Flex
      w="16%"
      backgroundColor="gray.200"
      border="2px dashed"
      borderColor="gray.300"
      justifyContent="center"
      alignItems="center"
      borderRadius='8px'
    >
      <BsFillPersonFill size='4rem' color='#6b6969' />
    </Flex>
  );
};

export default EmptyHeroBanner;
