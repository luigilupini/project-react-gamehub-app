import { HStack, Switch, useColorMode } from '@chakra-ui/react';
import { TbSunFilled, TbMoonFilled } from 'react-icons/tb';

export default function ColorModeSwitch() {
  // `useColorMode` is a React hook that reads from `ColorModeProvider` context
  // and returns the color mode and function to toggle it
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      paddingLeft={{
        base: 0,
        // lg: '10%',
      }}
    >
      <TbSunFilled
        fontSize={20}
        color={colorMode === 'dark' ? '#5a5a6b' : '#e08e09'}
      />
      <Switch
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      <TbMoonFilled
        fontSize={20}
        color={colorMode === 'dark' ? '#81e5a4' : '#e5e5e5'}
      />
    </HStack>
  );
}
