import React from 'react';
import { Image, Text, VStack } from '@chakra-ui/react';
import FAQAccordion from './FAQAccordion';

const FAQ = () => {
  return (
    <VStack height="572px" gap="8px" position="relative">
      <VStack marginTop="40px">
        <Text fontFamily="Clash Display" fontSize="24px" textTransform="capitalize">
          frequently asked questions
        </Text>

        <Text
          fontFamily="Satoshi"
          fontSize="8px"
          color="#A1A1A1"
          textAlign="center"
          lineHeight="16px"
          width="284px"
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
