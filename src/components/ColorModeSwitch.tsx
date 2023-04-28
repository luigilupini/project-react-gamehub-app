import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

export default function ColorModeSwitch() {
  // `useColorMode` is a React hook that reads from `ColorModeProvider` context
  // and returns the color mode and function to toggle it
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      paddingLeft={{
        base: 0,
        lg: 10,
        xl: 20,
      }}
    >
      <Text fontSize="smaller" fontWeight="semibold" whiteSpace="nowrap">
        {colorMode === 'dark' ? 'Dark Mode' : 'Light Mode'}
      </Text>
      <Switch
        colorScheme="green"
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
      />
    </HStack>
  );
}
