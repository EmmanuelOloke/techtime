import React from 'react';
import { Avatar, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import Carousel from './Carousel';

const ClientsFeedback = () => {
  return (
    <VStack
      background="#F8F9FC"
      height={{
        base: '25.125rem',
        sm: '25.125rem',
        md: '25.125rem',
        lg: '35.438rem',
        xl: '35.438rem',
        '2xl': '35.438rem',
      }}
      gap={{
        base: '1.5rem',
        sm: '1.5rem',
        md: '1.5rem',
        lg: '2.5rem',
        xl: '2.5rem',
        '2xl': '2.5rem',
      }}
    >
      <VStack
        gap={{ base: '0rem', sm: '0rem', md: '0rem', lg: '1rem', xl: '1rem', '2xl': '1rem' }}
        marginTop="32px"
      >
        <Text
          textTransform="capitalize"
          fontFamily="Clash Display"
          fontSize={{
            base: '1.5rem',
            sm: '1.5rem',
            md: '1.5rem',
            lg: '3.5rem',
            xl: '3.5rem',
            '2xl': '3.5rem',
          }}
          lineHeight="29.52px"
        >
          what our clients are saying
        </Text>

        <Text
          color="#A1A1A1"
          fontFamily="Satoshi"
          fontSize={{
            base: '0.5rem',
            sm: '0.5rem',
            md: '0.5rem',
            lg: '1rem',
            xl: '1rem',
            '2xl': '1rem',
          }}
          lineHeight={{
            base: '1rem',
            sm: '1rem',
            md: '1rem',
            lg: '1.75rem',
            xl: '1.75rem',
            '2xl': '1.75rem',
          }}
          textAlign="center"
          width={{
            base: '19.008rem',
            sm: '19.008rem',
            md: '19.008rem',
            lg: '43.438rem',
            xl: '43.438rem',
            '2xl': '43.438rem',
          }}
          textTransform="capitalize"
        >
          high-defination video is video of higher resolution and quality than standard definition.
          while there’s no standard meaning for high definition, generally any standard video image
        </Text>
      </VStack>

      <Carousel />
    </VStack>
  );
};

export default ClientsFeedback;
