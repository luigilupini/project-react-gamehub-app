import { Platform } from '../hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react';
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa';
import { BsGlobe } from 'react-icons/bs';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { IconType } from 'react-icons';

interface Props {
  platforms: Platform[]; // 👈🏻 An array of Platform objects
}

export default function PlatformIconList({ platforms }: Props) {
  // 👇🏻 A map of platform slugs to their corresponding icon
  const platformMapping: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
    nintendo: SiNintendo,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon
          key={platform.id}
          as={platformMapping[platform.slug]}
          color="gray.500"
          boxSize={3.5}
        />
      ))}
    </HStack>
  );
}
