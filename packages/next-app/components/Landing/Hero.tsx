import {
    Button,
    Flex,
    Heading,
    Icon,
    Image,
    Stack,
    Text,
    useBreakpointValue,
  } from '@chakra-ui/react';
import { IoArrowForward } from 'react-icons/io5';
  
  export default function Hero() {
    return (
      <Stack background={'linear-gradient(261.63deg,  #0B0B0D 4.87%, #FB03F5 87.02%)'} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={6} w={'full'} maxW={'lg'}>
            <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
              <Text
                as={'span'}
                position={'relative'}
                color={'white'}
                _after={{
                  content: "''",
                  width: 'full',
                  height: useBreakpointValue({ base: '20%', md: '30%' }),
                  position: 'absolute',
                  bottom: 1,
                  left: 0,
                  color:'white',
                  bg: 'blue.400',
                  zIndex: -1,
                }}>
                Music for NFT creators.
              </Text>
              <br />{' '}
              <Text color={'white'} as={'span'}>
              Digital Music for fans.
              </Text>{' '}
            </Heading>
            <Text fontSize={{ base: 'md', lg: 'lg' }} color={'#FFFFFF'}>
                Music NFTs will continue to revolutionize the way that artists and fans create community together as we enter the upcoming year — undoubtedly changing the trajectory of countless budding music careers.
            </Text>
            <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
              <Button>Discover More <Icon left={3} as={IoArrowForward} color={'black.500'} w={5} h={5} rounded={'full'}></Icon></Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={'/assets/hero.png'}
            width={'99%'}
          />
        </Flex>
      </Stack>
    );
  }