import { SearchIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { fetchHero } from "../../api";
import { Hero } from "../../models";
import Spinner from "../spinner/Spinner";
import HeroList from "./HeroList";

const SearchArea = React.forwardRef<HTMLDivElement>((props, ref) => {
  const [searchResults, setSearchResults] = useState<Hero[]>([]);
  const [input, setInput] = useState("");
  // prettier-ignore
  const { data, refetch, status } = useQuery(["hero", input],() => fetchHero(input),{
      enabled: false,
    }
  );
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    const timer = setTimeout(refetch, 600);
    return () => {
      clearTimeout(timer);
    };
  }, [input, refetch]);

  useEffect(() => {
    if (data?.data.response === "success") {
      setSearchResults(
        data.data.results!.filter(
          (h) =>
            (h.biography.alignment === "good" ||
              h.biography.alignment === "bad") &&
            Object.values(h.powerstats).every((stat) => stat !== "null")
        )
      );
    }
  }, [data]);

  let body;
  if (status === "error") {
    body = <Text size="3xl">Something went wrong</Text>;
  } else if (input) {
    if (status === "loading") {
      body = <Spinner />;
    } else if (data?.data.response === "error" && searchResults.length === 0) {
      //query found no results
      body = (
        <Text fontSize="3xl" textAlign="center" mt={8} p={2}>
          Oops! Looks like there are no heroes with that name
        </Text>
      );
    } else if (data?.data.response === "success") {
      body = <HeroList heroes={searchResults} />;
    }
  }

  return (
    <Box>
      <Box mb={4}>
        <InputGroup>
        <InputLeftElement>
        <SearchIcon color='gray.500' fontSize='1.4em' alignSelf='flex-end' mb={1}/>
        </InputLeftElement>
        <Input
          placeholder="Search Hero..."
          size="lg"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        </InputGroup>
      </Box>
      {body}
    </Box>
  );
});

export default SearchArea;
