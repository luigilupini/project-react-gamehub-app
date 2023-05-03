import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';

import { BsChevronDown } from 'react-icons/bs';

import usePlatforms, { Platform } from '../hooks/usePlatforms';

interface Props {
  selectPlatformId: number | undefined;
  setSelectPlatform: (platform: Platform) => void;
}

export default function PlatformSelector({
  selectPlatformId,
  setSelectPlatform,
}: Props) {
  const { data, error } = usePlatforms();
  const selectedPlatform = data?.results.find((p) => p.id === selectPlatformId);
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
            onClick={() => setSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}
