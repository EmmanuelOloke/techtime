import React from 'react';
import { Button, Link } from '@chakra-ui/react';
import { PrimaryButtonType } from '@/types/primary-button';

const PrimaryButton: React.FC<PrimaryButtonType> = ({
  text,
  link,
  color,
  bgColor,
  width,
  height,
  fontSize,
}) => {
  return (
    <Link href={link} textDecoration="none" _hover={{ textDecoration: 'none' }}>
      <Button
        color={color}
        backgroundColor={bgColor}
        borderRadius={{
          base: '2.2px',
          sm: '2.2px',
          md: '2.2px',
          lg: '4px',
          xl: '4px',
          '2xl': '4px',
        }}
        padding="8px 16px"
        width={width}
        height={height}
        fontSize={fontSize}
        _hover={{ opacity: '0.9' }}
      >
        {text}
      </Button>
    </Link>
  );
};

export default PrimaryButton;
