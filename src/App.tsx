import { useState } from 'react';
import { Flex, Grid, GridItem, Show } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/usePlatforms';

export interface Query {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [query, setQuery] = useState<Query>({
    genre: null,
    platform: null,
    sortOrder: '',
    searchText: '',
  } as Query);

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
          <Navbar
            // 👇🏻 We spread the current query and overwrite the genre property
            setSearchText={(searchText) => setQuery({ ...query, searchText })}
          />
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside">
            <GenreList
              selectGenre={query.genre}
              // 👇🏻 We spread the current query and overwrite the genre property
              setSelectGenre={(genre) => setQuery({ ...query, genre })}
            />
          </GridItem>
        </Show>
        <GridItem gridArea="main">
          <GameHeading query={query} />
          <Flex gap={2} marginBottom={2}>
            <PlatformSelector
              selectPlatform={query.platform}
              // 👇🏻 We spread the current query and overwrite the genre property
              setSelectPlatform={(platform) => setQuery({ ...query, platform })}
            />
            <SortSelector
              sortOrder={query.sortOrder}
              // 👇🏻 We spread the current query and overwrite the genre property
              setSortOrder={(sortOrder) => setQuery({ ...query, sortOrder })}
            />
          </Flex>
          <GameGrid query={query} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
