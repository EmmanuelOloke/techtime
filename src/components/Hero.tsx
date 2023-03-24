import React from 'react';
import { Box, Flex, VStack, Text, HStack, Image } from '@chakra-ui/react';
import Avatars from './Avatars';
import GetStartedButton from './GetStartedButton';
import PrimaryButton from './PrimaryButton';
import { PrimaryButtonType } from '@/types/primary-button';
import { AvatarWidth } from '@/types/avatar-width';

const Hero = () => {
  const primaryButtonProps: PrimaryButtonType = {
    text: 'Enroll Now',
    link: '#',
    color: '#004DB3',
    bgColor: 'white',
  };

  const avatarProps: AvatarWidth = {
    width: '32px',
    height: '32px',
  };
  return (
    <Box
      height="826px"
      width="100vw"
      background="#004DB3"
      backgroundImage={{
        base: '/assets/hero-patterns/Minimal-Pattern-1-D-mobile.svg',
        sm: '/assets/hero-patterns/Minimal-Pattern-1-D-mobile.svg',
        md: '/assets/hero-patterns/Minimal-Pattern-1-D-mobile.svg',
        lg: '/assets/hero-patterns/Minimal-Pattern-1-D-desktop.svg',
        xl: '/assets/hero-patterns/Minimal-Pattern-1-D-desktop.svg',
        '2xl': '/assets/hero-patterns/Minimal-Pattern-1-D-desktop.svg',
      }}
      backgroundSize="cover"
    >
      <Flex flexDirection="column" alignItems="center" position="absolute" top="80px">
        <VStack alignItems="center" gap="8px" marginTop="26px">
          <Text
            fontFamily="Clash Display"
            color="#FFFFFF"
            fontSize="32px"
            textAlign="center"
            lineHeight="45.78px"
          >
            Grow your skills to advance your career path
          </Text>

          <Text
            fontFamily="Satoshi"
            color="#FFFFFF"
            fontSize="10px"
            textAlign="center"
            lineHeight="15px"
            textTransform="capitalize"
            width="360px"
          >
            build your future with our quality education. the best and largest all-in-one online
            tutoring platform in the world
          </Text>

          <HStack gap="13.4px">
            <GetStartedButton />

            <PrimaryButton {...primaryButtonProps} />
          </HStack>

          <Flex gap="4.47px">
            <Avatars {...avatarProps} />

            <Flex flexDirection="column" textAlign="center">
              <Text fontFamily="Clash Display" fontSize="13.4px" color="#FFFFFF">
                255k+
              </Text>
              <Text fontFamily="Satoshi" color="#FFFFFF" fontSize="8px">
                Previews
              </Text>
            </Flex>
          </Flex>
        </VStack>

        <Flex>
          <Image
            src="/assets/vectors/zigzag.svg"
            alt="zigzag vector"
            position="absolute"
            left="0"
            top="311px"
          />
          <Image
            src="/assets/vectors/loopy-line.svg"
            alt="loopyline vector"
            position="absolute"
            left="310px"
            top="240px"
          />
        </Flex>

        <Flex position="absolute" top="344px" width="395px">
          <Image
            src="/assets/images/hero-image.png"
            alt="hero image"
            width="320px"
            position="absolute"
            left="32.69px"
          />

          <Image
            src="/assets/lightbulb.png"
            alt="lightbulb image"
            width="90px"
            transform="rotate(-33.25deg)"
            position="absolute"
            top="32px"
            left="20px"
          />

          <Image
            src="/assets/vscode.jpeg"
            alt="vscode image"
            borderRadius="4px"
            width="48px"
            position="absolute"
            top="40px"
            left="310px"
          />

          <Image
            src="/assets/vectors/green-circle.svg"
            alt="green circle"
            position="absolute"
            top="133px"
            left="58px"
          />

          <Image
            src="/assets/vectors/gold-triangle.svg"
            alt="gold triangle"
            position="absolute"
            top="150px"
            left="330px"
          />

          <Image
            src="/assets/figma.png"
            alt="figma image"
            width="48px"
            position="absolute"
            top="230px"
            left="18px"
          />

          <Image
            src="/assets/vectors/yellow-dot.svg"
            alt="yellow dot"
            width="4px"
            position="absolute"
            top="354px"
            left="63px"
          />

          <Image
            src="/assets/wordpress.png"
            alt="wordpress logo"
            width="48px"
            position="absolute"
            top="345px"
            left="300px"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Hero;
