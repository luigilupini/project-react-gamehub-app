import { HStack, Image } from '@chakra-ui/react';

import logo from '../assets/logo/logo.webp';
import ColorModeSwitch from './ColorModeSwitch';

export default function Navbar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ColorModeSwitch />
    </HStack>
  );
}
