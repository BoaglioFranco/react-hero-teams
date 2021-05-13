import React, { Dispatch, useReducer } from "react";
import { Hero } from "../../models";
import { HeroTeamAction, teamReducer } from "./teamReducer";

export type HeroTeamArray = [
  [Hero | null, Hero | null, Hero | null],
  [Hero | null, Hero | null, Hero | null]
];

export const TeamContext =
  React.createContext<{
    dispatch: Dispatch<HeroTeamAction>;
    heroes: HeroTeamArray;
  } | null>(null);

export const TeamContextProvider: React.FC<{}> = (props) => {
  const [heroTeam, dispatch] = useReducer(teamReducer, [
    [null, null, null],
    [null, null, null],
  ]);
  const ctx = {
    heroes: heroTeam as HeroTeamArray,
    dispatch,
  };
  return <TeamContext.Provider {...props} value={ctx} />;
};
