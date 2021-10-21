import {
  chakra,
  useColorModeValue,
  Box,
  Flex,
  GridItem,
  Icon,
  SimpleGrid,
  Stack,
  Button,
  Input,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import VisuallyHidden from '@chakra-ui/visually-hidden';
import type { FC } from 'react';

function Hero() {
  const Feature: FC = ({ children }) => (
    <Flex alignItems="center" color={useColorModeValue('initial', 'white')}>
      <Icon boxSize={4} mr={1} color="green.600" viewBox="0 0 20 20" fill="currentColor">
        <path
          fillRule="evenodd"
          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          clipRule="evenodd"
        ></path>
      </Icon>
      {children}
    </Flex>
  );

  return (
    <Box px={4} py={18} mx="auto">
      <Box
        w={{ base: 'full', md: 11 / 12, xl: 8 / 12 }}
        textAlign={{ base: 'left', md: 'center' }}
        mx="auto"
      >
        <chakra.h1
          mb={3}
          fontSize={{ base: '4xl', md: '5xl' }}
          fontWeight={{ base: 'bold', md: 'extrabold' }}
          color={useColorModeValue('gray.900', 'gray.100')}
          lineHeight="shorter"
        >
          🌱 Cultivá tu talento
        </chakra.h1>
        <chakra.p mb={6} fontSize={{ base: 'lg', md: 'xl' }} color="gray.500" lineHeight="base">
          Somos la primera plataforma dedicada al trabajo en la Industria del Cannabis de
          Latinoamérica.
        </chakra.p>
        <SimpleGrid
          as="form"
          w={{ base: 'full', md: 7 / 12 }}
          columns={{ base: 1, lg: 6 }}
          spacing={3}
          pt={1}
          mx="auto"
          mb={8}
        >
          <GridItem as="label" colSpan={{ base: 'auto', lg: 4 }}>
            <VisuallyHidden>Your Email</VisuallyHidden>
            <FormControl id="email">
              <FormLabel>Ingresá tu email recibir novedades</FormLabel>
              <Input mt={0} size="lg" type="email" placeholder="Email..." required={true} />
            </FormControl>
          </GridItem>
          <Button
            as={GridItem}
            w="full"
            variant="solid"
            colSpan={{ base: 'auto', lg: 2 }}
            size="lg"
            type="submit"
            colorScheme="gray"
            cursor="pointer"
          >
            Suscribir
          </Button>
        </SimpleGrid>
        <Stack
          display="flex"
          direction={{ base: 'column', md: 'row' }}
          justifyContent={{ base: 'start', md: 'center' }}
          mb={3}
          spacing={{ base: 2, md: 8 }}
          color="gray.600"
        >
          <Feature>Siempre Gratis</Feature>
          <Feature>Sin comisiones</Feature>
          <Feature>Atendido por humanos</Feature>
        </Stack>
      </Box>
    </Box>
  );
}

export default Hero;
