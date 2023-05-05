import { Flex, Grid, GridItem, Show } from '@chakra-ui/react';

import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import Navbar from './components/Navbar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: '"nav nav" "main main"',
          lg: '"nav nav" "aside main"',
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}
        paddingX={4}
      >
        <GridItem gridArea="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside">
            <GenreList />
          </GridItem>
        </Show>
        <GridItem gridArea="main">
          <GameHeading />
          <Flex gap={2} marginBottom={2}>
            <PlatformSelector />
            <SortSelector />
          </Flex>
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
