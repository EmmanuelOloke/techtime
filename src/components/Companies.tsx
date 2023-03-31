import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import React from 'react';

const Companies = () => {
  return (
    <Flex
      background="#CCDBF0"
      height={{
        base: '3.75rem',
        sm: '3.75rem',
        md: '3.75rem',
        lg: '9.875rem',
        xl: '9.875rem',
        '2xl': '9.875rem',
      }}
      justifyContent="center"
      alignItems="center"
    >
      <HStack
        height={{
          base: '1rem',
          sm: '1rem',
          md: '1rem',
          lg: '3.375rem',
          xl: '3.375rem',
          '2xl': '3.375rem',
        }}
        gap={{
          base: '0.791rem',
          sm: '0.791rem',
          md: '0.791rem',
          lg: '2.625rem',
          xl: '2.625rem',
          '2xl': '2.625rem',
        }}
      >
        <Image
          src="/assets/company-icons/zoom.svg"
          width={{
            base: '2.375rem',
            sm: '2.375rem',
            md: '2.375rem',
            lg: '8.063rem',
            xl: '8.063rem',
            '2xl': '8.063rem',
          }}
          alt="zoom logo"
        />
        <Image
          src="/assets/company-icons/stripe.svg"
          width={{
            base: '2.375rem',
            sm: '2.375rem',
            md: '2.375rem',
            lg: '8.063rem',
            xl: '8.063rem',
            '2xl': '8.063rem',
          }}
          alt="stripe logo"
        />
        <Image
          src="/assets/company-icons/monday.svg"
          width={{
            base: '3.688rem',
            sm: '3.688rem',
            md: '3.688rem',
            lg: '12.438rem',
            xl: '12.438rem',
            '2xl': '12.438rem',
          }}
          alt="monday logo"
        />
        <Image
          src="/assets/company-icons/slack.svg"
          width={{
            base: '2.938rem',
            sm: '2.938rem',
            md: '2.938rem',
            lg: '9.875rem',
            xl: '9.875rem',
            '2xl': '9.875rem',
          }}
          alt="slack logo"
        />
        <Image
          src="/assets/company-icons/dropbox.svg"
          width={{
            base: '3.688rem',
            sm: '3.688rem',
            md: '3.688rem',
            lg: '12.438rem',
            xl: '12.438rem',
            '2xl': '12.438rem',
          }}
          alt="dropbox logo"
        />
      </HStack>
    </Flex>
  );
};

export default Companies;
