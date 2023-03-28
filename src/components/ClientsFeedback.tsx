import React from 'react';
import { Avatar, Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';
import Carousel from './Carousel';

const ClientsFeedback = () => {
  return (
    <VStack background="#F8F9FC" height="full" width="full" overflow="hidden">
      <VStack gap="3.1px" marginTop="32px">
        <Text
          textTransform="capitalize"
          fontFamily="Clash Display"
          fontSize="24px"
          lineHeight="29.52px"
        >
          what our clients are saying
        </Text>

        <Text
          color="#A1A1A1"
          fontFamily="Satoshi"
          fontSize="8px"
          lineHeight="16px"
          textAlign="center"
          width="288.12px"
          textTransform="capitalize"
        >
          high-defination video is video of higher resolution and quality than standard definition.
          while there’s no standard meaning for high definition, generally any standard video image
        </Text>
      </VStack>

      {/* <Carousel /> */}
    </VStack>
  );
};

export default ClientsFeedback;
