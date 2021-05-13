import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { AppContext } from '../../Context/AppContext';
import SearchArea from './SearchArea';

interface Props {}

const SearchDrawer: React.FC<Props> = (props) => {
    const appCtx = useContext(AppContext);
    if(!appCtx){
        return null;
    }
    
    return (
        <Drawer
        isOpen={appCtx.isDrawerOpen}
        placement="right"
        size='xl'
        onClose={appCtx.toggleDrawer}
      >
        <DrawerOverlay />
        <DrawerContent m='0'>
          <DrawerCloseButton />
          <DrawerHeader>Add Heroes to your team</DrawerHeader>

          <DrawerBody>
            <SearchArea />
          </DrawerBody>

          <DrawerFooter>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
}

export default SearchDrawer;