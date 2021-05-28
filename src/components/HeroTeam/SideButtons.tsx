import { IconButton } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import React, { MouseEventHandler } from "react";
import { AiFillDelete, AiFillPrinter } from "react-icons/ai";

interface Props {
  onDelete: MouseEventHandler<HTMLButtonElement>;
  onPrint: any;
}

const SideButtons: React.FC<Props> = ({onDelete, onPrint}) => {
  return (
    <Flex direction="column" position="fixed" left="0" top="30%" zIndex='1'>
      <Tooltip label='Print team / Save to PDF' placement='right'>
      <IconButton
        aria-label="print"
        size="lg"
        icon={<AiFillPrinter />}
        borderRadius="0"
        borderTopEndRadius="8px"
        onClick={onPrint}
      />
      </Tooltip>
      <Tooltip label='Clear Team' placement='right'>
      <IconButton
        aria-label="clear team"
        size="lg"
        colorScheme="red"
        icon={<AiFillDelete />}
        borderRadius="0"
        borderBottomEndRadius="8px"
        onClick={onDelete}
      />
      </Tooltip>
    </Flex>
  );
};

export default SideButtons;
