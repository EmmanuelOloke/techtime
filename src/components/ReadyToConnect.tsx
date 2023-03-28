import { PrimaryButtonType } from '@/types/primary-button';
import { Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';
import PrimaryButton from './PrimaryButton';

const ReadyToConnect = () => {
  const primaryButtonProps: PrimaryButtonType = {
    text: 'Join Our Community',
    link: '#',
    color: '#004DB3',
    bgColor: 'white',
    width: '110px',
  };
  return (
    <VStack height="459px" background="#004DB3" gap="8px">
      <VStack gap="4px">
        <Text
          fontFamily="Satoshi"
          fontSize="8px"
          color="#FFFFFF"
          textTransform="uppercase"
          marginTop="40px"
        >
          join our community
        </Text>

        <Text
          fontFamily="Clash Display"
          fontSize="24px"
          color="#FFFFFF"
          lineHeight="30px"
          textAlign="center"
          width="336px"
        >
          Are you ready to connect with the future talent of the tech world
        </Text>

        <Text textTransform="capitalize" color="#FFFFFF" fontSize="8px" fontFamily="Satoshi">
          meet up with other techstars and grow together
        </Text>
      </VStack>

      <Image src="/assets/patterns/community-patterns/mobile.png" alt="community pattern" />

      <PrimaryButton {...primaryButtonProps} />
    </VStack>
  );
};

export default ReadyToConnect;
