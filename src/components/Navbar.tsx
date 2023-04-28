import { HStack, Text } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
  setSearchText: (searchText: string) => void;
}

export default function Navbar({ setSearchText }: Props) {
  return (
    <HStack paddingY={8} gap={2}>
      {/* <Image src={logo} boxSize="60px" /> */}
      <Text
        fontWeight="extrabold"
        fontSize="18px"
        whiteSpace="nowrap"
        letterSpacing={2}
        border={2}
      >
        R A W G
      </Text>
      <SearchInput setSearchText={setSearchText} />
      <ColorModeSwitch />
    </HStack>
  );
}
