/* eslint-disable react-hooks/rules-of-hooks */
import { chakra, useColorModeValue, Image, Box, Flex, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

// import useUser from '@/hooks/useUser';

function Username() {
  const router = useRouter();
  const { username } = router.query;
  console.log('username', username);

  // const { data: user, error } = useUser({ username: username as string });

  // if (error) return <>Error</>;
  // if (!user) return <>Loading...</>;

  return (
    <Flex py={50} px={5} w="full" alignItems="center" justifyContent="center">
      <Box
        w="md"
        mx="auto"
        py={4}
        px={8}
        bg={useColorModeValue('white', 'gray.700')}
        shadow="lg"
        rounded="lg"
      >
        <Flex justifyContent={{ base: 'center', md: 'end' }} mt={-16}>
          <Image
            w={20}
            h={20}
            fit="cover"
            rounded="full"
            borderStyle="solid"
            borderWidth={2}
            borderColor={useColorModeValue('brand.500', 'brand.400')}
            alt="Mario Colque en Cogojobs"
            src="/assets/users/colketo.jpg"
          />
        </Flex>

        <chakra.h2
          color={useColorModeValue('gray.800', 'white')}
          fontSize={{ base: '2xl', md: '3xl' }}
          mt={{ base: 2, md: 0 }}
          fontWeight="bold"
        >
          Mario Colque
        </chakra.h2>

        <chakra.p mt={2} color={useColorModeValue('gray.600', 'gray.200')}>
          🌱 Adicto a la Tecnología. Amante del Arte. Apasionado por el Cannabis y el poder de las
          plantas.
        </chakra.p>

        <Flex justifyContent="center" mt={4}>
          {/* <Link fontSize="xl" color={useColorModeValue('brand.500', 'brand.300')}>
            Contactar
          </Link> */}
          <Image
            w={150}
            h={150}
            fit="cover"
            alt="Mario Colque en Cogojobs"
            src="/assets/qrcodes/colketo.png"
          />
        </Flex>
      </Box>
    </Flex>
  );
}

export default Username;
