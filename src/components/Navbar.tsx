import { HStack, Text } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';

export default function Navbar() {
  return (
    <HStack justifyContent="space-between" paddingY={6}>
      {/* <Image src={logo} boxSize="60px" /> */}
      <Text fontWeight="extrabold" fontSize="18px">
        R A W G
      </Text>
      <ColorModeSwitch />
    </HStack>
  );
}
