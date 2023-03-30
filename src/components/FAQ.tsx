import React from 'react';
import { Image, Text, VStack } from '@chakra-ui/react';
import FAQAccordion from './FAQAccordion';

const FAQ = () => {
  return (
    <VStack
      height={{
        base: '35.75rem',
        sm: '35.75rem',
        md: '35.75rem',
        lg: '45.938rem',
        xl: '45.938rem',
        '2xl': '45.938rem',
      }}
      gap="8px"
      position="relative"
    >
      <VStack marginTop="40px">
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
          textTransform="capitalize"
        >
          frequently asked questions
        </Text>

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
          color="#A1A1A1"
          textAlign="center"
          lineHeight={{
            base: '1rem',
            sm: '1rem',
            md: '1rem',
            lg: '1.75rem',
            xl: '1.75rem',
            '2xl': '1.75rem',
          }}
          width={{
            base: '17.75rem',
            sm: '17.75rem',
            md: '17.75rem',
            lg: '44.438rem',
            xl: '44.438rem',
            '2xl': '44.438rem',
          }}
          textTransform="capitalize"
        >
          high-defination video is video of higher resolution and quality than standard definition.
          while there’s no standard meaning for high definition, generally any standard video image
        </Text>
      </VStack>

      <FAQAccordion />

      <Image
        src="/assets/vectors/faq-oval.svg"
        alt="blue oval"
        position="absolute"
        top="27.92px"
        left="396px"
      />
      <Image
        src="/assets/vectors/faq-zigzag.svg"
        alt="yellow zigzag"
        position="absolute"
        top="122.69px"
        left="0"
      />
    </VStack>
  );
};

export default FAQ;
