import { Flex, Heading, Image } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Hero } from "../../../models";
import { Backdrop } from "../../Backdrop/Backdrop";
import ImageOverlay from "../../Backdrop/ImageOverlay";
import StatPanel from "../../StatPanel/StatPanel";
import { TeamContext } from "../../../Context/TeamContext/TeamContext";
import CardButton from "./CardButton";
import CardBadge from "./CardBadge";

interface Props {
  hero: Hero;
}

const HeroCard: React.FC<Props> = ({ hero }) => {
  const [isPictureOpen, setIsPictureOpen] = useState(false);
  const teamCtx = useContext(TeamContext);

  const addToTeam = () => {
    teamCtx?.dispatch({ type: "ADD", hero });
  };

  return (
    <>
      <Flex
        border="1px"
        borderColor="gray.200"
        p={2}
        width="100%"
        position="relative"
      >
        <Image
          src={hero.image.url}
          boxSize="7rem"
          objectFit="cover"
          objectPosition="center"
          cursor="pointer"
          onClick={() => {
            setIsPictureOpen(true);
          }}
        />
        <Flex px={4} direction="column" justifyContent="space-between" w='80%'>
          <Heading fontSize="1.7rem">{hero.name}</Heading>
          <StatPanel stats={hero.powerstats} />
        </Flex>
       <CardButton onClick={addToTeam} />
       <CardBadge bad={hero.biography.alignment === 'bad'}/>
      </Flex>
      {isPictureOpen && (
        <Backdrop
          onClick={() => { setIsPictureOpen(false); }}>
          <ImageOverlay src={hero.image.url} alt={hero.name} />
        </Backdrop>
      )}
    </>
  );
};

export default HeroCard;
