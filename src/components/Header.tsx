import {
  chakra,
  Flex,
  IconButton,
  Link,
  useColorMode,
  useColorModeValue,
  Box,
  HStack,
} from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { useViewportScroll } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

function Header() {
  const { toggleColorMode: toggleMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const logo = useColorModeValue(
    '/assets/cogojobs-logotipo-dark.png',
    '/assets/cogojobs-logotipo-light.png',
  );
  const bg = useColorModeValue('transparent', 'gray.800');
  const borderTopColor = useColorModeValue('green.500', 'green.500');
  const ref = useRef<HTMLInputElement>(null);
  const [y, setY] = useState(0);
  const { height = 0 } = ref.current ? ref.current.getBoundingClientRect() : {};

  const { scrollY } = useViewportScroll();
  useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()));
  }, [scrollY]);

  return (
    <Box pos="relative">
      <chakra.header
        ref={ref}
        shadow={y > height ? 'sm' : undefined}
        // transition="box-shadow 0.2s"
        bg={bg}
        borderTop="6px solid"
        borderTopColor={borderTopColor}
        w="full"
        overflowY="hidden"
      >
        <chakra.div h="4.5rem" mx="auto" maxW="1200px">
          <Flex w="full" h="full" px="6" align="center" justify="space-between">
            <Flex align="center">
              <Link href="/">
                <HStack>
                  <Image src={logo} alt="Cogojobs" height={40} width={150} />
                </HStack>
              </Link>
            </Flex>

            <Flex justify="flex-end" w="full" maxW="824px" align="center" color="gray.400">
              <IconButton
                size="md"
                fontSize="lg"
                aria-label={`Switch to ${text} mode`}
                variant="ghost"
                color="current"
                ml={{ base: '0', md: '3' }}
                onClick={toggleMode}
                icon={<SwitchIcon />}
              />
            </Flex>
          </Flex>
        </chakra.div>
      </chakra.header>
    </Box>
  );
}

export default Header;
