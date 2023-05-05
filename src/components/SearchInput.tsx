import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import useGameQueryStore from '../store';

// USE CUSTOM HOOK IN CONSUMER (STEP 3) ⭐️
// Now that you've created a store access it via the custom hook in a component.
// You can access the store state being count, increment, & decrement properties
// from your component globally, without prop drilling.
export default function SearchInput() {
  const ref = useRef<HTMLInputElement>(null);
  // Selectors gets the current state & only a specific property from our store.
  // Now our component only rerenders when that specific property changes!
  const setSearchText = useGameQueryStore((state) => state.setSearchText);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          console.log(ref.current.value);
          setSearchText(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement color="gray.500" children={<BiSearch />} />
        <Input
          ref={ref}
          fontSize="14px"
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
}
