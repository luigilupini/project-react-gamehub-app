import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

export default function ColorModeSwitch() {
  // `useColorMode` is a React hook that reads from `ColorModeProvider` context
  // and returns the color mode and function to toggle it
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <HStack>
        <Text fontSize="smaller" fontWeight="semibold">
          {colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
        </Text>
        <Switch
          colorScheme="green"
          isChecked={colorMode === 'dark'}
          onChange={toggleColorMode}
        />
      </HStack>
    </>
  );
}
