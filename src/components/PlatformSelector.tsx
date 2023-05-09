import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { BsChevronDown } from 'react-icons/bs';

import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store';

// ZUSTAND: USE CUSTOM HOOK IN CONSUMER (STEP 3) ⭐️
// Now that you've created a store access it via the custom hook in a component.
// You can access the store state being count, increment, & decrement properties
// from your component globally, without prop drilling.
export default function PlatformSelector() {
  const { data, error } = usePlatforms();

  // Selectors gets the current state & only a specific property from our store.
  // Now our component only rerenders when that specific property changes!
  const platformId = useGameQueryStore((state) => state.query.platformId);
  const setPlatformId = useGameQueryStore((state) => state.setPlatformId);
  const selectedPlatform = data?.results.find((p) => p.id === platformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} fontSize="sm">
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            fontSize="sm"
            onClick={() => setPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
