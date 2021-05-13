import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { AppContext } from "../../Context/AppContext";
import { TeamContext } from "../../Context/TeamContext/TeamContext";
import EmptyHeroBanner from "./EmptyHeroBanner";
import HeroBanner from "./HeroBanner/HeroBanner";
import StatGrid from "./StatGrid";
import TeamContainer from "./TeamContainer";

interface Props {}

const HeroTeam: React.FC<Props> = (props) => {
  const teamCtx = React.useContext(TeamContext);
  const appCtx = React.useContext(AppContext);
  console.log('teamctx', teamCtx);
  const team = teamCtx!.heroes.flat();

  const heroes = team.map((h) =>
    h === null ? (
      <EmptyHeroBanner key={Math.random()} />
    ) : (
      <HeroBanner
        key={h.id}
        hero={h}
        onClose={() => teamCtx!.dispatch({ type: "REMOVE", hero: h })}
      />
    )
  );
  return (
    <Box>
      <TeamContainer>{heroes}</TeamContainer>
      <StatGrid team={team} />
      <Button
        variant="link"
        size="lg"
        fontSize="2xl"
        display="block"
        m="auto"
        mt={2}
        onClick={appCtx?.toggleDrawer}
      >
        Add heroes to your team
      </Button>
    </Box>
  );
};

export default HeroTeam;
