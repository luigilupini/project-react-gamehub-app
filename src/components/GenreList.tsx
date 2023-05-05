import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

import imageCropper from '../services/image-crop';
import useGameQueryStore from '../store';

// USE CUSTOM HOOK IN CONSUMER (STEP 3) ⭐️
// Now that you've created a store access it via the custom hook in a component.
// You can access the store state being count, increment, & decrement properties
// from your component globally, without prop drilling.
export default function GenreList() {
  const { data, isLoading, error } = useGenres();
  // Selectors gets the current state & only a specific property from our store.
  // Now our component only rerenders when that specific property changes!
  const query = useGameQueryStore((state) => state.query);
  const setGenreId = useGameQueryStore((state) => state.setGenreId);
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data?.results.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack gap={1}>
            <Image
              width="30px"
              height="30px"
              objectFit="cover"
              borderRadius="full"
              src={imageCropper(genre.image_background)}
            />
            <Button
              fontWeight={`${query.genreId === genre.id ? 'bold' : 'normal'}`}
              fontSize="14px"
              variant="link"
              whiteSpace="normal"
              textAlign="left"
              onClick={() => {
                setGenreId(genre.id);
              }}
            >
              {genre.name === 'Massively Multiplayer'
                ? 'Multiplayer'
                : genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

/* Typical Approach to data fetching problems 🤬 (#1)

- No request cancellation when the component unmounts (cleanup)
- No separation of concerns as our querying logic is leaked into our component
- No retries on failed requests
- No auto refreshing "refetching" so we remain in stale view
- No caching so we are fetching the same data over and over again

```jsx
const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((res) => setTodos(res.data))
      .catch((error) => setError(error));
  }, []);

  if (error) return <p>{error}</p>;
  return (...
  );
};
```

Solution: React Query

A powerful library that helps us with data fetching and caching in React Apps. A
sound replacement for "async" Redux that is used for fetching and catching data.
The result is less boilerplate & learning is much lower than Redux. React Query 
reduces the amount of code we have to introduce, write, debug and maintain.

> Redux is no longer needed (at least for caching) */
