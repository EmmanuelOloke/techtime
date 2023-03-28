import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import React from 'react';

const Companies = () => {
  return (
    <Flex
      background="#CCDBF0"
      height={{ base: '60px', sm: '60px', md: '60px', lg: '158px', xl: '158px', '2xl': '158px' }}
      justifyContent="center"
      alignItems="center"
    >
      <HStack
        height={{ base: '16px', sm: '16px', md: '16px', lg: '54px', xl: '54px', '2xl': '54px' }}
        gap={{
          base: '12.66px',
          sm: '12.66px',
          md: '12.66px',
          lg: '42px',
          xl: '42px',
          '2xl': '42px',
        }}
      >
        <Image
          src="/assets/company-icons/zoom.svg"
          width={{ base: '38px', sm: '38px', md: '38px', lg: '129px', xl: '129px', '2xl': '129px' }}
          alt="zoom logo"
        />
        <Image
          src="/assets/company-icons/stripe.svg"
          width={{ base: '38px', sm: '38px', md: '38px', lg: '129px', xl: '129px', '2xl': '129px' }}
          alt="stripe logo"
        />
        <Image
          src="/assets/company-icons/monday.svg"
          width={{ base: '59px', sm: '59px', md: '59px', lg: '199px', xl: '199px', '2xl': '199px' }}
          alt="monday logo"
        />
        <Image
          src="/assets/company-icons/slack.svg"
          width={{ base: '47px', sm: '47px', md: '47px', lg: '158px', xl: '158px', '2xl': '158px' }}
          alt="slack logo"
        />
        <Image
          src="/assets/company-icons/dropbox.svg"
          width={{ base: '59px', sm: '59px', md: '59px', lg: '199px', xl: '199px', '2xl': '199px' }}
          alt="dropbox logo"
        />
      </HStack>
    </Flex>
  );
};

export default Companies;
