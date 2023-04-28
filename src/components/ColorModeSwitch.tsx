import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';
import { TbMoonStars, TbSun } from 'react-icons/tb';

export default function ColorModeSwitch() {
  // `useColorMode` is a React hook that reads from `ColorModeProvider` context
  // and returns the color mode and function to toggle it
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      paddingLeft={{
        base: 0,
        lg: '10%',
      }}
    >
      <Text fontSize="smaller" fontWeight="semibold" whiteSpace="nowrap">
        {colorMode === 'dark' ? 'Dark' : 'Light'}
      </Text>
      <Switch
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
      {/* {colorMode === 'dark' ? (
        <TbSun fontSize={20} />
      ) : (
        <TbMoonStars fontSize={20} />
      )} */}
    </HStack>
  );
}
