import { PrimaryButtonType } from '@/types/primary-button';
import { Box, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import PrimaryButton from './PrimaryButton';

const ReadyToConnect = () => {
  const primaryButtonPropsMobile: PrimaryButtonType = {
    text: 'Join Our Community',
    link: '#',
    color: '#004DB3',
    bgColor: 'white',
    width: '6.875rem',
    height: '1.688rem',
    fontSize: '0.5rem',
  };

  const primaryButtonPropsDesktop: PrimaryButtonType = {
    text: 'Join Our Community',
    link: '#',
    color: '#004DB3',
    bgColor: 'white',
    width: '13.75rem',
    height: '3.375rem',
    fontSize: '1rem',
  };
  return (
    <VStack
      height={{
        base: '28.688rem',
        sm: '28.688rem',
        md: '28.688rem',
        lg: '51.688rem',
        xl: '51.688rem',
        '2xl': '51.688rem',
      }}
      background="#004DB3"
      backgroundImage={{
        lg: '/assets/patterns/ready-to-connect-desktop-pattern.svg',
        xl: '/assets/patterns/ready-to-connect-desktop-pattern.svg',
        '2xl': '/assets/patterns/ready-to-connect-desktop-pattern.svg',
      }}
      gap="8px"
    >
      <VStack gap="4px">
        <Text
          fontFamily="Satoshi"
          fontSize={{
            base: '0.5rem',
            sm: '0.5rem',
            md: '0.5rem',
            lg: '1rem',
            xl: '1rem',
            '2xl': '1rem',
          }}
          color="#FFFFFF"
          textTransform="uppercase"
          marginTop={{
            base: '2.5rem',
            sm: '2.5rem',
            md: '2.5rem',
            lg: '5rem',
            xl: '5rem',
            '2xl': '5rem',
          }}
        >
          join our community
        </Text>

        <Text
          fontFamily="Clash Display"
          fontSize={{
            base: '1.5rem',
            sm: '1.5rem',
            md: '1.5rem',
            lg: '3.5rem',
            xl: '3.5rem',
            '2xl': '3.5rem',
          }}
          color="#FFFFFF"
          lineHeight={{
            base: '1.875rem',
            sm: '1.875rem',
            md: '1.875rem',
            lg: '4.305rem',
            xl: '4.305rem',
            '2xl': '4.305rem',
          }}
          textAlign="center"
          width={{
            base: '21rem',
            sm: '21rem',
            md: '21rem',
            lg: '75.188rem',
            xl: '75.188rem',
            '2xl': '75.188rem',
          }}
        >
          Are you ready to connect with the future talent of the tech world
        </Text>

        <Text
          textTransform="capitalize"
          color="#FFFFFF"
          fontSize={{
            base: '0.5rem',
            sm: '0.5rem',
            md: '0.5rem',
            lg: '1rem',
            xl: '1rem',
            '2xl': '1rem',
          }}
          fontFamily="Satoshi"
        >
          meet up with other techstars and grow together
        </Text>
      </VStack>

      <Box
        display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none', '2xl': 'none' }}
      >
        <Image src="/assets/patterns/community-patterns/mobile.png" alt="community pattern" />
      </Box>

      <Box
        display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
      >
        <Image
          src="/assets/patterns/community-patterns/desktop.png"
          alt="community pattern desktop"
        />
      </Box>

      <Box
        display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none', '2xl': 'none' }}
      >
        <PrimaryButton {...primaryButtonPropsMobile} />
      </Box>

      <Box
        display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
      >
        <PrimaryButton {...primaryButtonPropsDesktop} />
      </Box>
    </VStack>
  );
};

export default ReadyToConnect;
