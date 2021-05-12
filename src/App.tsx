import { Button } from "@chakra-ui/button";
import { Box, Heading } from "@chakra-ui/layout";
import { useRef } from "react";
import Header from "./components/Header";
import SearchArea from "./components/HeroSearch/SearchArea";
import HeroTeam from "./components/HeroTeam/HeroTeam";
import { TeamContextProvider } from "./TeamContext/TeamContext";

function App() {
  const searchRef = useRef<HTMLDivElement>(null);

  const goToSearch = ()=>{
    window.scroll({top: searchRef.current!.offsetTop, left: 0, behavior: 'smooth'});
  }

  return (
    <TeamContextProvider>
      <Header/>
      <Box maxW="80%" m="auto">
        <Box height='100vh'>
          <HeroTeam />
          <Button variant='link' size='lg' fontSize='2xl' display='block' m='auto' mt={2} onClick={goToSearch}>Add heroes to your team</Button>
        </Box>
        <Heading textAlign="center">Hero app</Heading>
        <SearchArea ref={searchRef}/>
      </Box>
    </TeamContextProvider>
  );
}

export default App;
