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
        borderRadius="2px"
        padding="8px 40px"
        width="110px"
        height="28px"
        fontSize="8px"
        _hover={{ opacity: '0.9' }}
      >
        Get Started Now
      </Button>
    </Link>
  );
};

export default GetStartedButton;
