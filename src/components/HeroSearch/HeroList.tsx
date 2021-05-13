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
  const pageSize = 4;

  //resets page when list changes
  useEffect(() => {
    setPage(0);
  }, [heroes]);

  const heroesPage = heroes.slice(page * pageSize, page * pageSize + pageSize);

  const hasNextPage = heroes.length > (page + 1) * pageSize;
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
      {heroes.length > pageSize && (
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
