import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import { PrimaryButtonType } from '@/types/primary-button';

const PrimaryButton: React.FC<PrimaryButtonType> = ({ text, link, color, bgColor }) => {
  return (
    <Link href={link} textDecoration="none" _hover={{ textDecoration: 'none' }}>
      <Button
        color={color}
        backgroundColor={bgColor}
        borderRadius="2.2px"
        padding="8px 16px"
        width="83px"
        height="27px"
        fontSize="8px"
        _hover={{ opacity: '0.9' }}
      >
        {text}
      </Button>
    </Link>
  );
};

export default PrimaryButton;
