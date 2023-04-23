import { Grid, GridItem, Show } from '@chakra-ui/react';
import Navbar from './components/Navbar';

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
          <GridItem gridArea="aside" bg="gold">
            Aside
          </GridItem>
        </Show>
        <GridItem gridArea="main" bg="dodgerblue">
          Main
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
