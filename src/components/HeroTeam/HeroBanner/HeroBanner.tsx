import { Image } from "@chakra-ui/image";
import React, { useState } from "react";
import { Hero } from "../../../models";
import { Box } from "@chakra-ui/layout";
import { Fade } from "@chakra-ui/react";
import HeroName from "./HeroName";
import CloseIcn from "./CloseIcn";
import StatList from "./Stats/StatList";

interface Props {
  hero: Hero;
  onClose: any;
}

const HeroBanner: React.FC<Props> = ({ hero, onClose }) => {
  const [showCloseBtn, setShowCloseBtn] = useState(false);

  const toggleCloseBtn = () => {
    setShowCloseBtn(!showCloseBtn);
  };

  return (
    <Box
      position="relative"
      width='16%'
      borderRadius="8px"
      overflow="hidden"
      onMouseEnter={toggleCloseBtn}
      onMouseLeave={toggleCloseBtn}
    >
      <HeroName>{hero.name}</HeroName>
      <Image
        src={hero.image.url}
        objectFit="cover"
        objectPosition="center"
        height="100%"
      />
      <StatList stats={hero.powerstats} />
      <Fade in={showCloseBtn}>
        <CloseIcn onClick={onClose}/>
      </Fade>
    </Box>
  );
};

export default HeroBanner;
