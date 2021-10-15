/* eslint-disable react-hooks/rules-of-hooks */
import { chakra, useColorModeValue, Image, Box, Flex, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import useUser from '@/hooks/useUser';

function Username() {
  const router = useRouter();
  const { username } = router.query;
  const { data: user, error } = useUser({ username: username as string });

  if (error) return <>Error</>;
  if (!user) return <>Loading...</>;

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
            alt="Testimonial avatar"
            src="https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=76&q=80"
          />
        </Flex>

        <chakra.h2
          color={useColorModeValue('gray.800', 'white')}
          fontSize={{ base: '2xl', md: '3xl' }}
          mt={{ base: 2, md: 0 }}
          fontWeight="bold"
        >
          {user.name}
        </chakra.h2>

        <chakra.p mt={2} color={useColorModeValue('gray.600', 'gray.200')}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea
          doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a
          veritatis pariatur minus consequuntur!
        </chakra.p>

        <Flex justifyContent="end" mt={4}>
          <Link fontSize="xl" color={useColorModeValue('brand.500', 'brand.300')}>
            Contactar
          </Link>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Username;
