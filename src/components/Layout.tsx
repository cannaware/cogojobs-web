import { Flex } from '@chakra-ui/layout';
import Head from 'next/head';
import type { ReactElement } from 'react';

import Header from './Header';

type LayoutProps = {
  children: ReactElement | ReactElement[];
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <title>Cogojobs</title>
      </Head>
      <Header />
      {children}
    </>
  );
}

export default Layout;
