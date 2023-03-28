import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import { MdArrowOutward } from 'react-icons/md';

const GetStartedButton = () => {
  return (
    <Link
      href="https://github.com/emmanueloloke"
      textDecoration="none"
      _hover={{ textDecoration: 'none' }}
    >
      <Button
        rightIcon={<MdArrowOutward />}
        color="white"
        backgroundColor="transparent"
        border="0.56px solid #FFFFFF"
        borderRadius="4px"
        padding={{
          base: '8px 40px',
          sm: '8px 40px',
          md: '8px 40px',
          lg: '16px 32px',
          xl: '16px 32px',
          '2xl': '16px 32px',
        }}
        width={{
          base: '110px',
          sm: '110px',
          md: '110px',
          lg: '216px',
          xl: '216px',
          '2xl': '216px',
        }}
        height={{
          base: '28px',
          sm: '28px',
          md: '28px',
          lg: '54px',
          xl: '54px',
          '2xl': '54px',
        }}
        fontSize={{
          base: '8px',
          sm: '8px',
          md: '8px',
          lg: '16px',
          xl: '16px',
          '2xl': '16px',
        }}
        _hover={{ opacity: '0.9' }}
      >
        Get Started Now
      </Button>
    </Link>
  );
};

export default GetStartedButton;
