import { extendTheme, ThemeConfig } from '@chakra-ui/react';

// Here `ThemeConfig` is an interface that contains the configuration of the
// theme provided by Chakra UI. We can extend this interface to add our own
// configuration. Below, we are adding the `initialColorMode` property.
const config: ThemeConfig = {
  initialColorMode: 'dark',
};

const theme = extendTheme({ config });

export default theme;
