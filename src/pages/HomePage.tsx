import { Flex, Grid, GridItem, Show } from '@chakra-ui/react';

import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

export default function HomePage() {
  return (
    <Grid
      templateAreas={{
        base: '"main main"',
        lg: '"aside main"',
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
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
  );
}
