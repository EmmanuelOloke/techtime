import React, { useRef } from 'react';
import {
  Box,
  Text,
  Link,
  HStack,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  VStack,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { PrimaryButtonType } from '@/types/primary-button';
import PrimaryButton from './PrimaryButton';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navRef = useRef(null);

  const primaryButtonProps: PrimaryButtonType = {
    text: 'Enroll Now',
    link: '#',
    color: '#004DB3',
    bgColor: 'white',
    width: '9.063rem',
    height: '3.375rem',
    fontSize: '1rem',
  };

  return (
    <Box
      width="100vw"
      display="flex"
      justifyContent="center"
      background="transparent"
      paddingTop={5}
      position="absolute"
    >
      <HStack
        w={{ base: '100%', sm: '100%', md: '100%', lg: '83%', xl: '83%', '2xl': '60%' }}
        padding={{
          base: '1rem 1rem',
          sm: '1rem 1rem',
          md: '1rem 1rem',
          lg: '2rem 0',
          xl: '2rem 0',
          '2xl': '2rem 0',
        }}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Link href="#" _hover={{ textDecoration: 'none' }}>
            <Image
              src="/assets/techtime.svg"
              alt="tech time logo"
              width={{
                base: '3.313rem',
                sm: '3.313rem',
                md: '3.313rem',
                lg: '8.125rem',
                xl: '8.125rem',
                '2xl': '8.125rem',
              }}
            />
          </Link>
        </Box>

        <HStack gap={5}>
          <Link
            href="#"
            _hover={{ textDecoration: 'none' }}
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
              '2xl': 'flex',
            }}
          >
            <Text fontFamily="Satoshi Bold" fontSize="1rem" fontWeight="bold" color="white">
              Home
            </Text>
          </Link>

          <Link
            href="#"
            _hover={{ textDecoration: 'none' }}
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
              '2xl': 'flex',
            }}
          >
            <Text
              fontFamily="Satoshi"
              fontSize="1rem"
              fontWeight="bold"
              color="#AAC4E6"
              _hover={{ color: 'white' }}
            >
              About Us
            </Text>
          </Link>

          <Link
            href="#"
            _hover={{ textDecoration: 'none' }}
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
              '2xl': 'flex',
            }}
          >
            <Text
              fontFamily="Satoshi"
              fontSize="1rem"
              fontWeight="bold"
              color="#AAC4E6"
              _hover={{ color: 'white' }}
            >
              Courses
            </Text>
          </Link>

          <Link
            href="#"
            _hover={{ textDecoration: 'none' }}
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
              '2xl': 'flex',
            }}
          >
            <Text
              fontFamily="Satoshi"
              fontSize="1rem"
              fontWeight="bold"
              color="#AAC4E6"
              _hover={{ color: 'white' }}
            >
              Testimonial
            </Text>
          </Link>

          <Link
            href="#"
            _hover={{ textDecoration: 'none' }}
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
              '2xl': 'flex',
            }}
          >
            <Text
              fontFamily="Satoshi"
              fontSize="1rem"
              fontWeight="bold"
              color="#AAC4E6"
              _hover={{ color: 'white' }}
            >
              Community
            </Text>
          </Link>

          <Box
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
              '2xl': 'flex',
            }}
          >
            <PrimaryButton {...primaryButtonProps} />
          </Box>

          <Box
            ref={navRef}
            onClick={onOpen}
            display={{
              base: 'flex',
              sm: 'flex',
              md: 'flex',
              lg: 'none',
              xl: 'none',
              '2xl': 'none',
            }}
          >
            <HamburgerIcon boxSize={8} color="white" width="1.125rem" />
          </Box>
        </HStack>
      </HStack>

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="left"
        initialFocusRef={navRef}
        size="full"
      >
        <DrawerOverlay />

        <DrawerContent background="#004DB3">
          <Box>
            <DrawerHeader>
              <Image
                src="/assets/techtime.svg"
                alt="tech time logo"
                width={{
                  base: '4.688rem',
                  sm: '4.688rem',
                  md: '4.688rem',
                  lg: '8.125rem',
                  xl: '8.125rem',
                  '2xl': '8.125rem',
                }}
                marginTop="0.313rem"
              />
            </DrawerHeader>

            <DrawerCloseButton
              fontSize="1.2rem"
              marginTop={2.5}
              color="#FFFFFF"
              fontWeight="bold"
            />
          </Box>

          <DrawerBody display="flex" justifyContent="center" alignItems="center">
            <VStack spacing="1.5rem">
              <Link href="#" _hover={{ textDecoration: 'none' }}>
                <Text fontFamily="Satoshi Bold" fontSize="1rem" fontWeight="bold" color="white">
                  Home
                </Text>
              </Link>

              <Link href="#" _hover={{ textDecoration: 'none' }}>
                <Text
                  fontFamily="Satoshi"
                  fontSize="1rem"
                  fontWeight="bold"
                  color="#AAC4E6"
                  _hover={{ color: 'white' }}
                >
                  About Us
                </Text>
              </Link>

              <Link href="#" _hover={{ textDecoration: 'none' }}>
                <Text
                  fontFamily="Satoshi"
                  fontSize="1rem"
                  fontWeight="bold"
                  color="#AAC4E6"
                  _hover={{ color: 'white' }}
                >
                  Courses
                </Text>
              </Link>

              <Link href="#" _hover={{ textDecoration: 'underline' }}>
                <Text
                  fontFamily="Satoshi"
                  fontSize="1rem"
                  fontWeight="bold"
                  color="#AAC4E6"
                  _hover={{ color: 'white' }}
                >
                  Testimonial
                </Text>
              </Link>

              <Link href="#" _hover={{ textDecoration: 'none' }}>
                <Text
                  fontFamily="Satoshi"
                  fontSize="1rem"
                  fontWeight="bold"
                  color="#AAC4E6"
                  _hover={{ color: 'white' }}
                >
                  Community
                </Text>
              </Link>

              <PrimaryButton {...primaryButtonProps} />
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default NavBar;
