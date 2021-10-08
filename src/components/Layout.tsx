import { Flex } from '@chakra-ui/layout';
import Head from 'next/head';
import type { ReactElement } from 'react';

type LayoutProps = {
  children: ReactElement | ReactElement[];
};

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>Cogojobs</title>
      </Head>
      <Flex direction="column" maxW={{ xl: '1200px' }} m="0 auto" p={6} {...props}>
        {children}
      </Flex>
    </>
  );
};

export default Layout;
