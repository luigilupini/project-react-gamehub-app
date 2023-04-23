import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import GameGrid from './components/GameGrid';

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: '"nav nav" "main main"',
          lg: '"nav nav" "aside main"',
        }}
      >
        <GridItem gridArea="nav">
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem gridArea="aside">Aside</GridItem>
        </Show>
        <GridItem gridArea="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
