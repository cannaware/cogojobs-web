import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/kanit/400.css';
import '@fontsource/kanit/600.css';
import type { AppProps } from 'next/app';

import Layout from '@/components/Layout';

import theme from '@/utils/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
