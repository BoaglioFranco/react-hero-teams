import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, IconButton, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Hero } from "../../models";
import HeroCard from "./HeroCard/HeroCard";

interface Props {
  heroes: Hero[];
}

const HeroList: React.FC<Props> = ({ heroes }) => {
  const [page, setPage] = useState(0);

  //resets page when list changes
  useEffect(() => {
    setPage(0);
  }, [heroes]);

  const heroesPage = heroes.slice(page * 3, page * 3 + 3);

  const hasNextPage = heroes.length > (page + 1) * 3;
  const hasPrevPage = page > 0;

  const pageUp = () => {
    setPage(page + 1);
  };
  const pageDown = () => {
    setPage(page - 1);
  };

  return (
    <VStack spacing={2} margin="auto">
      {heroesPage.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
      {heroes.length > 3 && (
        <Box>
          <IconButton
            onClick={pageDown}
            disabled={!hasPrevPage}
            aria-label="page back"
            icon={<ChevronLeftIcon />}
            mr={2}
          />
          <IconButton
            onClick={pageUp}
            disabled={!hasNextPage}
            aria-label="page up"
            icon={<ChevronRightIcon />}
          />
        </Box>
      )}
    </VStack>
  );
};

export default HeroList;
