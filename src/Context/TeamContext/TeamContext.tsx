import React, { Dispatch, useEffect, useReducer } from "react";
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

  //read from localstorage on mount
  useEffect(() => {
    let items: any = localStorage.getItem("REACT_HERO_APP-TEAM");
    if (items) {
      items = JSON.parse(items);
      console.log("items", items);
      dispatch({ type: "SET", team: items });
    }
  }, []);

  //save to localstorage on update
  useEffect(() => {
    localStorage.setItem("REACT_HERO_APP-TEAM", JSON.stringify(heroTeam));
  }, [heroTeam]);

  const ctx = {
    heroes: heroTeam as HeroTeamArray,
    dispatch,
  };
  return <TeamContext.Provider {...props} value={ctx} />;
};
