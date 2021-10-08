import { Flex } from '@chakra-ui/layout';
import type { ReactElement } from 'react';

type LayoutProps = {
  children: ReactElement | ReactElement[];
};

const Layout = ({ children, ...props }: LayoutProps) => {
  return (
    <Flex direction="column" maxW={{ xl: '1200px' }} m="0 auto" p={6} {...props}>
      {children}
    </Flex>
  );
};

export default Layout;
