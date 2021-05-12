import React from "react";
import { TeamContext } from "../../TeamContext/TeamContext";
import EmptyHeroBanner from "./EmptyHeroBanner";
import HeroBanner from "./HeroBanner/HeroBanner";
import StatGrid from "./StatGrid";
import TeamContainer from "./TeamContainer";

interface Props {}

const HeroTeam: React.FC<Props> = (props) => {
  
  const teamCtx = React.useContext(TeamContext);
  const team = teamCtx!.heroes.flat();

  const heroes = team
    .map((h) =>
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
    <>
      <TeamContainer>{heroes}</TeamContainer>
      <StatGrid team={team}/>
    </>
  );
};

export default HeroTeam;
