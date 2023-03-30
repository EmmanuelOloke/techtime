import React from 'react';
import { Button, Flex, Image, Input, Link, Text, VStack } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      flexDirection={{
        base: 'column',
        sm: 'column',
        md: 'column',
        lg: 'row',
        xl: 'row',
        '2xl': 'row',
      }}
      background="#000F24"
      height={{
        base: '66.563rem',
        sm: '66.563rem',
        md: '66.563rem',
        lg: '45.5rem',
        xl: '45.5rem',
        '2xl': '45.5rem',
      }}
      padding={{
        base: '2.5rem 0 0 1.25rem',
        sm: '2.5rem 0 0 1.25rem',
        md: '2.5rem 0 0 1.25rem',
        lg: '10.375rem 0 0 7.5rem',
        xl: '10.375rem 0 0 7.5rem',
        '2xl': '10.375rem 0 0 7.5rem',
      }}
    >
      <Flex
        flexDirection={{
          base: 'column',
          sm: 'column',
          md: 'column',
          lg: 'row',
          xl: 'row',
          '2xl': 'row',
        }}
        gap={{
          base: '2rem',
          sm: '2rem',
          md: '2rem',
          lg: '5rem',
          xl: '5rem',
          '2xl': '5rem',
        }}
        margin="0 auto"
      >
        <VStack alignItems="flex-start" gap="24px" marginBottom="2rem">
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
            <Image
              src="/assets/socials/twitter.png"
              alt="twitter logo"
              width="32px"
              height="29px"
            />
            <Image
              src="/assets/socials/youtube.png"
              alt="youtube logo"
              width="32px"
              height="29px"
            />
            <Image
              src="/assets/socials/instagram.png"
              alt="instagram logo"
              width="32px"
              height="29px"
            />
            <Image
              src="/assets/socials/discord.png"
              alt="discord logo"
              width="32px"
              height="29px"
            />
          </Flex>
        </VStack>

        <VStack alignItems="flex-start" gap="24px">
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

        <VStack alignItems="flex-start" gap="24px">
          <Text fontFamily="Clash Display" fontSize="24px" color="#FFFFFF">
            Community
          </Text>

          <VStack alignItems="left" gap="16px">
            <Link fontFamily="Satoshi" fontSize="16px" color="#FFFFFF" href="#">
              Help Center
            </Link>
            <Link fontFamily="Satoshi" fontSize="16px" color="#FFFFFF" href="#">
              Partners
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

        <VStack alignItems="flex-start" gap="24px">
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
    </Flex>
  );
};

export default Footer;
