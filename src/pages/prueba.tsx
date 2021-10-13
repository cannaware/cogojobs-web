import { EmailIcon } from '@chakra-ui/icons';
import {
  chakra,
  Box,
  Icon,
  Flex,
  useColorModeValue,
  Center,
  Container,
  Stack,
  Text,
  Heading,
  Button,
} from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { IoMdCheckmarkCircle } from 'react-icons/io';

function Prueba() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSendEmail = async () => {
    setIsLoading(true);

    const testEmail = 'info+test@cogojobs.com';
    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ to: testEmail }),
    });

    setIsLoading(false);
    console.log('res', res.ok, res.statusText);
  };

  return (
    <Container>
      <Stack>
        <Heading color="green.400">The spectacle before us was indeed sublime.</Heading>
        <Text>
          Apparently we had reached a great height in the atmosphere, for the sky was a dead black,
          and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the
          sea to the level of the spectator on a hillside, the sable cloud beneath was dished out,
          and the car seemed to float in the middle of an immense dark sphere, whose upper half was
          strewn with silver. Looking down into the dark gulf below, I could see a ruddy light
          streaming through a rift in the clouds.
        </Text>
      </Stack>

      <Center bg="green.400" h="100px" color="white" fontSize="xx-large">
        cogojobs
      </Center>

      <Center color="white" fontSize="xx-large">
        <Image src="/android-chrome-512x512.png" alt="Cogojobs" height={500} width={500} />
      </Center>

      <Center color="white" fontSize="xx-large">
        <Button
          leftIcon={<EmailIcon />}
          colorScheme="teal"
          variant="solid"
          onClick={handleSendEmail}
          isLoading={isLoading}
          loadingText="Enviando"
        >
          Email
        </Button>
      </Center>

      <Flex w="full" bg="gray.600" p={50} alignItems="center" justifyContent="center">
        <Flex
          maxW="sm"
          w="full"
          mx="auto"
          bg={useColorModeValue('white', 'gray.800')}
          shadow="md"
          rounded="lg"
          overflow="hidden"
        >
          <Flex justifyContent="center" alignItems="center" w={12} bg="green.500">
            <Icon as={IoMdCheckmarkCircle} color="white" boxSize={6} />
          </Flex>

          <Box mx={-3} py={2} px={4}>
            <Box mx={3}>
              <chakra.span color={useColorModeValue('green.500', 'green.400')} fontWeight="bold">
                Success
              </chakra.span>
              <chakra.p color={useColorModeValue('gray.600', 'gray.200')} fontSize="sm">
                Your account was registered!
              </chakra.p>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Container>
  );
}

export default Prueba;
