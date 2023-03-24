import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { PrimaryButtonType } from '@/types/primary-button';
import PrimaryButton from './PrimaryButton';
import Avatars from './Avatars';
import { AvatarWidth } from '@/types/avatar-width';

const HighQualitySection = () => {
  const primaryButtonProps: PrimaryButtonType = {
    text: 'View Courses',
    link: '#',
    color: 'white',
    bgColor: '#004DB3',
  };

  const avatarProps: AvatarWidth = {
    width: '23px',
    height: '23px',
  };
  return (
    <Flex flexDirection="column" background="#F8F9FC" height="666px" position="relative" gap="24px">
      <Flex flexDirection="column" marginTop="40px" alignItems="center" gap="16px">
        <Box>
          <Image
            src="/assets/text-crown.svg"
            alt="text crown"
            position="absolute"
            top="23.48px"
            left="5px"
          />
          <Text fontFamily="Clash Display" fontSize="24px" textAlign="center" color="#000F24">
            High quality video, audio & live classes
          </Text>
        </Box>

        <Text
          fontFamily="Satoshi"
          color="#A1A1A1"
          fontSize="8px"
          lineHeight="15.39px"
          width="332.04px"
          textTransform="capitalize"
        >
          high-defination video is video of higher resolution and quality than standard definition.
          while there’s no standard meaning for high definition, generally any standard video image
        </Text>

        <Box>
          <PrimaryButton {...primaryButtonProps} />
        </Box>
      </Flex>

      <Flex
        width="277.38px"
        flexDirection="column"
        gap="13.19px"
        alignItems="center"
        margin="0 auto"
      >
        <Flex gap="13.19px">
          <Flex
            background="#FFFFFF"
            borderRadius="4px"
            width="125.59"
            padding="8px 32px 8px 16px"
            gap="8px"
            alignItems="center"
          >
            <Image
              src="/assets/icons/audio-icon.png"
              alt="audio icon"
              width="17.59px"
              height="17.59px"
            />
            <Text fontFamily="Satoshi Bold" fontWeight="bold" fontSize="8px">
              Audio Classes
            </Text>
          </Flex>

          <Flex
            background="#FFFFFF"
            borderRadius="4px"
            width="125.59"
            padding="8px 32px 8px 16px"
            gap="8px"
            alignItems="center"
          >
            <Image
              src="/assets/icons/live-class-icon.png"
              alt="audio icon"
              width="17.59px"
              height="17.59px"
            />
            <Text fontFamily="Satoshi Bold" fontWeight="bold" fontSize="8px">
              Live Classes
            </Text>
          </Flex>
        </Flex>

        <Flex gap="13.19px">
          <Flex
            background="#FFFFFF"
            borderRadius="4px"
            width="146.59"
            padding="8px 32px 8px 16px"
            gap="8px"
            alignItems="center"
          >
            <Image
              src="/assets/icons/recorded-classes-icon.png"
              alt="audio icon"
              width="17.59px"
              height="17.59px"
            />
            <Text fontFamily="Satoshi Bold" fontWeight="bold" fontSize="8px">
              Recorded Classes
            </Text>
          </Flex>

          <Flex
            background="#FFFFFF"
            borderRadius="4px"
            width="117.59"
            padding="8px 32px 8px 16px"
            gap="8px"
            alignItems="center"
          >
            <Image
              src="/assets/icons/notes-icon.png"
              alt="audio icon"
              width="17.59px"
              height="17.59px"
            />
            <Text fontFamily="Satoshi Bold" fontWeight="bold" fontSize="8px">
              50+ Notes
            </Text>
          </Flex>
        </Flex>

        <Image
          src="/assets/vectors/green-zigzag.svg"
          alt="green zigzag"
          position="absolute"
          top="205.55px"
          left="395px"
        />
      </Flex>

      <Box width="352.88px" height="253.66px" position="relative" left="20px">
        <Image
          src="/assets/images/headset-macbook.jpeg"
          alt="man with headset and macbook"
          width="265px"
          height="194px"
          position="absolute"
          left="87.23px"
          border="3.95px solid #5588CC"
          borderRadius="8px"
          zIndex={2}
        />

        <Flex
          flexDirection="column"
          position="absolute"
          left="35px"
          top="45px"
          background="#FFFFFF"
          borderRadius="3.5px"
          alignItems="center"
          padding="3px 8px"
          zIndex={3}
        >
          <Text fontSize="6px" fontFamily="Satoshi" fontWeight="bold">
            255k+ Enrolled Students
          </Text>

          <Avatars {...avatarProps} />
        </Flex>

        <Image
          src="/assets/images/lady-whiteboard.jpeg"
          alt="lady facing a whiteboard"
          width="174px"
          height="116px"
          position="absolute"
          left="0"
          top="136.49px"
          border="2.19178px solid #5588CC"
          borderRadius="8px"
          zIndex={4}
        />

        <Image
          src="/assets/vectors/blue-splash.svg"
          alt="blue splash image"
          position="absolute"
          top="110.59px"
          left="287.67px"
          zIndex={1}
        />
      </Box>

      <Image
        src="/assets/vectors/light-purple-half-circle.svg"
        alt="purple half circle"
        position="absolute"
        top="350px"
        right="0"
      />

      <Image
        src="/assets/vectors/purple-circle.svg"
        alt="purple circle"
        position="absolute"
        top="600px"
        left="280px"
      />
    </Flex>
  );
};

export default HighQualitySection;
