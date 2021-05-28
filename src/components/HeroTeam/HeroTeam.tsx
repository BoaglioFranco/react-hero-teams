import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { useReactToPrint } from "react-to-print";
import { AppContext } from "../../Context/AppContext";
import { TeamContext } from "../../Context/TeamContext/TeamContext";
import EmptyHeroBanner from "./EmptyHeroBanner";
import HeroBanner from "./HeroBanner/HeroBanner";
import SideButtons from "./SideButtons";
import StatGrid from "./StatGrid";
import TeamContainer from "./TeamContainer";

interface Props {}

const HeroTeam: React.FC<Props> = (props) => {
  const teamCtx = React.useContext(TeamContext);
  const appCtx = React.useContext(AppContext);
  const componentRef = React.useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const team = teamCtx!.heroes.flat();

  const heroes = team.map((h) =>
    h === null ? (
      <EmptyHeroBanner key={Math.random()} onClick={appCtx?.toggleDrawer} />
    ) : (
      <HeroBanner
        key={h.id}
        hero={h}
        onClose={() => teamCtx!.dispatch({ type: "REMOVE", hero: h })}
      />
    )
  );
  return (
    <>
      <Box ref={componentRef} p={2}>
        <TeamContainer>{heroes}</TeamContainer>
        <StatGrid team={team} />
      </Box>
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
      <SideButtons
        onDelete={() => teamCtx?.dispatch({ type: "CLEAR" })}
        onPrint={handlePrint}
      />
    </>
  );
};

export default HeroTeam;
