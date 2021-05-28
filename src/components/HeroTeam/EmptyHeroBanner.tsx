import { Flex } from "@chakra-ui/layout";
import React, { MouseEventHandler } from "react";
import { BsFillPersonFill } from "react-icons/bs";
interface Props {
  onClick?: MouseEventHandler;
}

const EmptyHeroBanner: React.FC<Props> = ({ onClick }) => {
  return (
    <Flex
      height="55vh"
      maxW="80%"
      minW="10rem"
      backgroundColor="gray.200"
      border="2px dashed"
      borderColor="gray.300"
      justifyContent="center"
      alignItems="center"
      borderRadius="8px"
      onClick={onClick}
      cursor={onClick ? "pointer" : "auto"}
    >
      <BsFillPersonFill size="4rem" color="#6b6969" />
    </Flex>
  );
};

export default EmptyHeroBanner;
