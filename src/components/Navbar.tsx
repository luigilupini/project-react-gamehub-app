import { HStack, Text } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

export default function Navbar() {
  return (
    <HStack paddingY={6} gap={2}>
      {/* <Image src={logo} boxSize="60px" /> */}
      <Text
        fontWeight="extrabold"
        fontSize="18px"
        whiteSpace="nowrap"
        letterSpacing={2}
      >
        R A W G
      </Text>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
}
