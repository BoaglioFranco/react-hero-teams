import React from "react";
import { RiSwordFill } from "react-icons/ri";
import { Text } from "@chakra-ui/layout";
import { BsFillShieldFill } from "react-icons/bs";
import { GiBrain, GiRunningShoe } from "react-icons/gi";
import { AiFillThunderbolt } from "react-icons/ai";
import { CgGym } from "react-icons/cg";
import { Flex } from "@chakra-ui/react";

interface Props {
  highestStat:
    | "combat"
    | "durability"
    | "intelligence"
    | "power"
    | "speed"
    | "strength"
    | "";
}

const TeamDescription: React.FC<Props> = ({ highestStat }) => {
  let text;
  let icon;
  if (highestStat === "combat") {
    icon = <RiSwordFill size='2.5em' />;
    text = "Combat oriented Team";
  } else if (highestStat === "durability") {
    icon = <BsFillShieldFill size='2.5em' />;
    text = <Text>Defensive Team</Text>;
  } else if (highestStat === "intelligence") {
    icon = <GiBrain size='2.5em' />;
    text = "Smart Team";
  } else if (highestStat === "power") {
    icon = <AiFillThunderbolt size='2.5em' />;
    text = "Powerful Team";
  } else if (highestStat === "speed") {
    icon = <GiRunningShoe size='2.5em' />;
    text = "Fast Team";
  } else if (highestStat === "strength") {
    icon = <CgGym size='2.5em' />;
    text = "Strong Team";
  }

  return (
    <Flex alignItems="center" justifyContent="center" backgroundColor="gray.200" borderWidth='1px' borderColor='gray.300' borderRadius='12px' p={1}>
      {icon}
      <Text ml={2} fontSize="3xl" fontWeight="bold">
        {text}
      </Text>
    </Flex>
  );
};

export default TeamDescription;
