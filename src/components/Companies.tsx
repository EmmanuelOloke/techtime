import { Flex, HStack, Image } from '@chakra-ui/react';
import React from 'react';

const Companies = () => {
  return (
    <Flex background="#CCDBF0" height="60px" justifyContent="center" alignItems="center">
      <HStack height="16.1px" gap="12.66px">
        <Image src="/assets/company-icons/zoom.png" alt="zoom logo" />
        <Image src="/assets/company-icons/stripe.png" alt="stripe logo" />
        <Image src="/assets/company-icons/monday.png" alt="monday logo" />
        <Image src="/assets/company-icons/slack.png" alt="slack logo" />
        <Image src="/assets/company-icons/dropbox.png" alt="dropbox logo" />
      </HStack>
    </Flex>
  );
};

export default Companies;
