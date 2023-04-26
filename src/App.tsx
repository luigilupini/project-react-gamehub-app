import { useState } from 'react';
import { Grid, GridItem, Show } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelecter from './components/PlatformSelecter';

import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/useGames';

function App() {
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null);
  const [selectPlatform, setSelectPlatform] = useState<Platform | null>(null);
  console.log(selectPlatform);
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
              selectGenre={selectGenre}
              setSelectGenre={setSelectGenre}
            />
          </GridItem>
        </Show>
        <GridItem gridArea="main">
          <PlatformSelecter
            selectPlatform={selectPlatform}
            setSelectPlatform={setSelectPlatform}
          />
          <GameGrid selectPlatform={selectPlatform} selectGenre={selectGenre} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
