import { useState } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelecter from './components/PlatformSelecter';

import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/useGames';

export interface Query {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [query, setQuery] = useState<Query>({
    genre: null,
    platform: null,
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
        paddingX={3}
      >
        <GridItem gridArea="nav">
          <Navbar />
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
          <PlatformSelecter
            selectPlatform={query.platform}
            // 👇🏻 We spread the current query and overwrite the genre property
            setSelectPlatform={(platform) => setQuery({ ...query, platform })}
          />
          <GameGrid query={query} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
