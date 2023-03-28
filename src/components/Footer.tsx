import React from 'react';
import { Button, Flex, Image, Input, Link, Text, VStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex flexDirection="column" background="#000F24" height="1065px" padding="40px 0 0 20px">
      <VStack alignItems="flex-start" gap="24px">
        <Image src="/assets/techtime.svg" alt="tech time logo" width="101px" />

        <Text
          fontFamily="Satoshi"
          fontSize="16px"
          lineHeight="21.6px"
          color="#FFFFFF"
          width="281px"
        >
          Reach out to us on any of our social media networks
        </Text>

        <Flex justifyContent="space-between" width="281px">
          <Image
            src="/assets/socials/facebook.png"
            alt="facebook logo"
            width="32px"
            height="29px"
          />
          <Image src="/assets/socials/twitter.png" alt="twitter logo" width="32px" height="29px" />
          <Image src="/assets/socials/youtube.png" alt="youtube logo" width="32px" height="29px" />
          <Image
            src="/assets/socials/instagram.png"
            alt="instagram logo"
            width="32px"
            height="29px"
          />
          <Image src="/assets/socials/discord.png" alt="discord logo" width="32px" height="29px" />
        </Flex>
      </VStack>

      <VStack alignItems="flex-start" gap="24px" marginTop="64px">
        <Text fontFamily="Clash Display" fontSize="24px" color="#FFFFFF">
          Useful Links
        </Text>

        <VStack alignItems="left" gap="16px">
          <Link fontFamily="Satoshi" fontSize="16px" color="#FFFFFF" href="#">
            Home
          </Link>
          <Link fontFamily="Satoshi" fontSize="16px" color="#FFFFFF" href="#">
            About Us
          </Link>
          <Link fontFamily="Satoshi" fontSize="16px" color="#FFFFFF" href="#">
            Our Courses
          </Link>
          <Link fontFamily="Satoshi" fontSize="16px" color="#FFFFFF" href="#">
            Testimonials
          </Link>
          <Link fontFamily="Satoshi" fontSize="16px" color="#FFFFFF" href="#">
            Our Community
          </Link>
        </VStack>
      </VStack>

      <VStack alignItems="flex-start" gap="24px" marginTop="32px">
        <Text fontFamily="Clash Display" fontSize="24px" color="#FFFFFF">
          Community
        </Text>

        <VStack alignItems="left" gap="16px">
          <Link fontFamily="Satoshi" fontSize="16px" color="#FFFFFF" href="#">
            Help Center
          </Link>
          <Link fontFamily="Satoshi" fontSize="16px" color="#FFFFFF" href="#">
            Connections
          </Link>
          <Link fontFamily="Satoshi" fontSize="16px" color="#FFFFFF" href="#">
            Suggestions
          </Link>
          <Link fontFamily="Satoshi" fontSize="16px" color="#FFFFFF" href="#">
            Blog
          </Link>
          <Link fontFamily="Satoshi" fontSize="16px" color="#FFFFFF" href="#">
            Newsletter
          </Link>
        </VStack>
      </VStack>

      <VStack alignItems="flex-start" gap="24px" marginTop="32px">
        <Text fontFamily="Clash Display" fontSize="24px" color="#FFFFFF">
          Subscribe Us
        </Text>

        <Flex
          width="376px"
          height="46px"
          background="#054FB3"
          alignItems="center"
          padding="0 3px"
          gap="4px"
        >
          <Input
            background="#2A2A2B"
            placeholder="Nft123@gmail.com"
            _placeholder={{ color: '#424141' }}
            color="#424141"
            border="#054FB3"
            width="263px"
            borderRadius="none"
          />
          <Button
            fontFamily="Satoshi"
            fontSize="14px"
            color="#FFFFFF"
            background="#054FB3"
            _hover={{ background: '#3F8AEE' }}
          >
            Send Message
          </Button>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default Footer;
