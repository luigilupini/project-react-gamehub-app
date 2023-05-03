import { useState } from 'react';
import { Flex, Grid, GridItem, Show } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GameHeading from './components/GameHeading';

export interface Query {
  genreId: number | undefined;
  platformId: number | undefined;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [query, setQuery] = useState<Query>({} as Query);
  // console.log(query);
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
              selectGenreId={query.genreId}
              // 👇🏻 We spread the current query and overwrite the genre property
              setSelectGenre={(genre) =>
                setQuery({ ...query, genreId: genre.id })
              }
            />
          </GridItem>
        </Show>
        <GridItem gridArea="main">
          <GameHeading query={query} />
          <Flex gap={2} marginBottom={2}>
            <PlatformSelector
              selectPlatformId={query.platformId}
              // 👇🏻 We spread the current query and overwrite the genre property
              setSelectPlatform={(platform) =>
                setQuery({ ...query, platformId: platform.id })
              }
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
