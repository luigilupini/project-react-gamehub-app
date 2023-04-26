import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { BsChevronDown } from 'react-icons/bs';

import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../hooks/useGames';

interface Props {
  selectPlatform: Platform | null;
  setSelectPlatform: (platform: Platform) => void;
}

export default function PlatformSelecter({
  selectPlatform,
  setSelectPlatform,
}: Props) {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <div style={{ paddingBottom: '6px' }}>
      <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown />} fontSize="sm">
          {selectPlatform?.name || 'Platforms'}
        </MenuButton>
        <MenuList>
          {data?.map((platform) => (
            <MenuItem
              key={platform.id}
              fontSize="sm"
              onClick={() => setSelectPlatform(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}
