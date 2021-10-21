import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { GlobalProps } from '@emotion/react';

const styles = {
  global: (props: GlobalProps) => ({
    body: {
      fontFamily: 'body',
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('#F9FAFB', 'gray.800')(props),
      lineHeight: 'base',
    },
    '*::placeholder': {
      color: mode('gray.400', 'whiteAlpha.400')(props),
    },
    '*, *::before, &::after': {
      borderColor: mode('gray.200', 'whiteAlpha.300')(props),
      wordWrap: 'break-word',
    },
  }),
};

const theme = extendTheme({
  styles,
  fonts: {
    heading: 'Kanit',
    body: 'Kanit',
  },
});

export default theme;
