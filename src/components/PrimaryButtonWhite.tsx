import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import { PrimaryButton } from '@/types/primary-button';

const WhitePrimaryButton: React.FC<PrimaryButton> = ({ text, link }) => {
  return (
    <Link href={link} textDecoration="none" _hover={{ textDecoration: 'none' }}>
      <Button
        color="#004DB3"
        backgroundColor="white"
        borderRadius="2.2px"
        padding="8px 16px"
        width="73px"
        height="27px"
        fontSize="8px"
        _hover={{ opacity: '0.9' }}
      >
        {text}
      </Button>
    </Link>
  );
};

export default WhitePrimaryButton;
