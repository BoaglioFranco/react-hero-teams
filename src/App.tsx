import { Button } from "@chakra-ui/button";
import { Box, Heading } from "@chakra-ui/layout";
import { useRef } from "react";
import Header from "./components/Header";
import SearchArea from "./components/HeroSearch/SearchArea";
import HeroTeam from "./components/HeroTeam/HeroTeam";
import { TeamContextProvider } from "./Context/TeamContext/TeamContext";
import { AppContextProvider } from "./Context/AppContext";
import SearchDrawer from "./components/HeroSearch/Drawer";

function App() {
  return (
    <AppContextProvider>
      <TeamContextProvider>
        <SearchDrawer/>
        <Header />
        <Box maxW="80%" m="auto">
            <HeroTeam />
        </Box>
      </TeamContextProvider>
    </AppContextProvider>
  );
}

export default App;
