import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

export default function ColorModeSwitch() {
  // `useColorMode` is a React hook that reads from `ColorModeProvider` context
  // and returns the color mode and function to toggle it
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Switch
          colorScheme="green"
          isChecked={colorMode === 'dark'}
          onChange={toggleColorMode}
        />
        <Text>{colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}</Text>
      </HStack>
    </>
  );
}
