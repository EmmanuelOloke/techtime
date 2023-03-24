import React from 'react';
import { Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';

const WhyWeAreBest = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      background="#F8F9FC"
      height="910px"
      position="relative"
    >
      <VStack width="390px" position="absolute" top="40px" gap="8px">
        <Text
          fontFamily="Clash Display"
          fontSize="24px"
          textTransform="capitalize"
          textAlign="center"
        >
          this is why we are best from others
        </Text>

        <Text
          fontFamily="Satoshi"
          fontSize="8px"
          color="#A1A1A1"
          textTransform="capitalize"
          textAlign="center"
          width="320px"
        >
          high-defination video is video of higher resolution and quality than standard definition.
          while there’s no standard meaning for high definition, generally any standard video image
        </Text>

        <Image
          src="/assets/images/boy-on-laptop.jpeg"
          alt="boy on laptop"
          width="390px"
          borderRadius="8px"
        />
      </VStack>

      <VStack position="absolute" top="484px">
        <HStack>
          <VStack
            background="#FFFFFF"
            width="194px"
            borderRadius="4px"
            alignItems="left"
            padding="24px 16px"
          >
            <Image src="/assets/why-icons/mentors.svg" alt="mentor icon" width="32px" />
            <Text fontSize="12px" fontFamily="Satoshi Bold" fontWeight="bold">
              Experienced Mentors
            </Text>
            <Text fontSize="8px" textTransform="capitalize" color="#A1A1A1" width="162px">
              high-defination video is video of higher resolution and quality than standard
              definition. high-defination video is video of higher resolution and quality than
              standard definition.
            </Text>
          </VStack>

          <VStack
            background="#FFFFFF"
            width="194px"
            borderRadius="4px"
            alignItems="left"
            padding="24px 16px"
          >
            <Image src="/assets/why-icons/people.svg" alt="mentor icon" width="32px" />
            <Text fontSize="12px" fontFamily="Satoshi Bold" fontWeight="bold">
              Experienced Mentors
            </Text>
            <Text fontSize="8px" textTransform="capitalize" color="#A1A1A1">
              high-defination video is video of higher resolution and quality than standard
              definition. high-defination video is video of higher resolution and quality than
              standard definition.
            </Text>
          </VStack>
        </HStack>

        <HStack>
          <VStack
            background="#FFFFFF"
            width="194px"
            borderRadius="4px"
            alignItems="left"
            padding="24px 16px"
          >
            <Image src="/assets/why-icons/money.svg" alt="mentor icon" width="32px" />
            <Text fontSize="12px" fontFamily="Satoshi Bold" fontWeight="bold">
              Experienced Mentors
            </Text>
            <Text fontSize="8px" textTransform="capitalize" color="#A1A1A1">
              high-defination video is video of higher resolution and quality than standard
              definition. high-defination video is video of higher resolution and quality than
              standard definition.
            </Text>
          </VStack>

          <VStack
            background="#FFFFFF"
            width="194px"
            borderRadius="4px"
            alignItems="left"
            padding="24px 16px"
          >
            <Image src="/assets/why-icons/time.svg" alt="mentor icon" width="32px" />
            <Text fontSize="12px" fontFamily="Satoshi Bold" fontWeight="bold">
              Experienced Mentors
            </Text>
            <Text fontSize="8px" textTransform="capitalize" color="#A1A1A1">
              high-defination video is video of higher resolution and quality than standard
              definition. high-defination video is video of higher resolution and quality than
              standard definition.
            </Text>
          </VStack>
        </HStack>
      </VStack>

      <Image
        src="/assets/vectors/why-purple-circle.svg"
        alt="purpl circle"
        position="absolute"
        top="639px"
        right="0px"
      />
      <Image
        src="/assets/vectors/why-green-triangle.svg"
        alt="green triangle"
        position="absolute"
        top="810px"
        left="0"
      />
    </Flex>
  );
};

export default WhyWeAreBest;
