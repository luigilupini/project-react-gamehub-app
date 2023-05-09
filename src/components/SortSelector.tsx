import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

// USE CUSTOM HOOK IN CONSUMER (STEP 3) ⭐️
// Now that you've created a store access it via the custom hook in a component.
// You can access the store state being count, increment, & decrement properties
// from your component globally, without prop drilling.
export default function SortSelector() {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  // Selectors gets the current state & only a specific property from our store.
  // Now our component only rerenders when that specific property changes!
  const sortOrder = useGameQueryStore((state) => state.query.sortOrder);
  const setSortOrder = useGameQueryStore((state) => state.setSortOrder);

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} fontSize="sm">
        Order by: {currentSortOrder?.label || 'Relevance'}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={() => setSortOrder(order.value)} key={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
