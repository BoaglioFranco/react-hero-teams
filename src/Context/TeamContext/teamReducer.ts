import { createStandaloneToast } from "@chakra-ui/react";
import produce from "immer";
import { Hero } from "../../models";
import { HeroTeamArray } from "./TeamContext";

//prettier-ignore
export type HeroTeamAction =
{ type: "ADD" | "REMOVE"; hero: Hero; } 
| { type: "CLEAR" } 
| { type: 'SET', team: HeroTeamArray};

//allows me to display global toasts outside react components
const toast = createStandaloneToast();
//prettier-ignore
export const teamReducer = (state: HeroTeamArray, action: HeroTeamAction) => {
    const updatedState = produce(state, (draftState) => {
      if(action.type === 'SET'){
        return action.team;
      }
      if (action.type === "CLEAR") {
        return [[null, null, null], [null, null, null]] as HeroTeamArray;
      }
      let heroAlignment = action.hero.biography.alignment;
      let alignmentIdx = heroAlignment === "good" ? 0 : 1;

      if (action.type === "ADD") {
        let isOnTeamAlready = draftState[alignmentIdx].find(h => h?.id === action.hero.id);
        let emptySpace = draftState[alignmentIdx].findIndex(h => h === null);
        
        if (emptySpace !== -1  && !isOnTeamAlready) {
          draftState[alignmentIdx][emptySpace]= action.hero;
          toast({status: 'success', title: `${action.hero.name} was added to your team`, isClosable: true});
        } else{
            if(isOnTeamAlready){
                toast({status: 'warning', title: `${action.hero.name} is already on your team`, isClosable: true});
            }
            else {
                toast({status: 'warning', title: `You can't have more than 3 ${heroAlignment} heroes`, isClosable: true});
            }
        }
      }

      if (action.type === "REMOVE") {
        let heroIdx = draftState[alignmentIdx].findIndex(h => h?.id === action.hero.id);
        if(heroIdx !== -1){
          draftState[alignmentIdx][heroIdx] = null;
          toast({status: 'success', title: `${action.hero.name} was removed from your team`, isClosable: true});
        }
      }
    });
  
    return updatedState;
  };
