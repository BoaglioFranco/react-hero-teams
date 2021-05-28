import { Box, Grid, GridItem, Text } from "@chakra-ui/layout";
import React from "react";
import { Hero } from "../../models";
import TeamDescription from "./TeamDescription";

interface Props {
  //   stats: Record<keyof Powerstats, number>;
  team: (Hero | null)[];
}



const LBS_TO_KG = 0.453592;

const capitalize = (str: string) => {
  return str.charAt(0).toLocaleUpperCase() + str.slice(1);
};

const StatGrid: React.FC<Props> = ({ team }) => {
  const stats = team.reduce(
    (value, hero) => {
      if (hero) {
        value.combat += +hero.powerstats.combat;
        value.durability += +hero.powerstats.durability;
        value.intelligence += +hero.powerstats.intelligence;
        value.power += +hero.powerstats.power;
        value.speed += +hero.powerstats.speed;
        value.strength += +hero.powerstats.strength;
      }
      return value;
    },
    //prettier-ignore
    {combat: 0, durability: 0,intelligence: 0,power: 0,speed: 0,strength: 0}
  );

  //this api sucks
  const { height, weight, weightedHeroAmount } = team.reduce(
    (value, hero) => {
      if (hero) {
        let weight = parseInt(hero.appearance.weight![0].split(" ")[0]);
        console.log("weight", weight);
        if (weight) {
          weight = weight * LBS_TO_KG;
          if (hero.appearance.height?.length === 2) {
            //there is a hero whose height is: ["Shaker Heights, Ohio"]
            let [height, unit]: any = hero.appearance.height![1].split(" ");
            console.log("height, unit", height, unit);
            height = parseFloat(height);
            console.log("parsedheight", height);
            if (height && (unit === "cm" || unit === "meters")) {
              height = unit === "meters" ? height * 100 : height;
              value.height += height;
              value.weight += weight;
              value.weightedHeroAmount++;
            }
          }
        }
      }
      return value;
    },
    { height: 0, weight: 0, weightedHeroAmount: 0 }
  );

  let maxStat: number = Math.max(...Object.values(stats));
  let bestStat: any;
  for (let key in stats) {
    if ((stats as any)[key] === maxStat) {
      bestStat = key;
      break;
    }
  }

  return (
    <>
      {maxStat > 0 && (
        <>
          <Grid mt={4} gridTemplateColumns={['max-content', 'max-content max-content', 'repeat(auto-fit, minmax(23%, max-content))']} gap='1rem' justifyContent='center'>
            <GridItem gridRow={1} gridColumn='1 / -1'>
              <TeamDescription highestStat={bestStat} />
            </GridItem>
            {(Object.keys(stats) as Array<keyof typeof stats>).map((key) => {
              return (
                <GridItem key={key}>
                  <Text fontSize="2xl" fontWeight="bold">
                    {capitalize(key)}
                  </Text>
                  <Text fontSize="2xl">{stats[key]}</Text>
                </GridItem>
              );
            })}
            <Box>
              <Text fontSize="2xl" fontWeight="bold">
                Avg. Height
              </Text>
              <Text fontSize="2xl">
                {weightedHeroAmount
                  ? Math.round(height / weightedHeroAmount)
                  : 0}{" "}
                cm
              </Text>
            </Box>
            <Box>
              <Text fontSize="2xl" fontWeight="bold">
                Avg. Weight
              </Text>
              <Text fontSize="2xl">
                {weightedHeroAmount
                  ? Math.round(weight / weightedHeroAmount)
                  : 0}{" "}
                kgs
              </Text>
            </Box>
          </Grid>
        </>
      )}
    </>
  );
};

export default StatGrid;
