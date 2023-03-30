import React from 'react';
import { Avatar, Flex, HStack, Text, VStack } from '@chakra-ui/react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { feedbacks } from '../../public/data/carouselData';

const Carousel = () => {
  const splideOptions = {
    type: 'loop',
    autoWidth: true,
    autoHeight: true,
    gap: '2rem',
    arrows: false,
  };

  return (
    <HStack spacing={4} overflowX="auto" flexShrink={0} justifyContent="center">
      <Splide aria-label="Client Feedbacks" options={splideOptions}>
        {feedbacks.map((feedback) => (
          <SplideSlide>
            <VStack
              background="#FFFFFF"
              borderRadius={{
                base: '1rem',
                sm: '1rem',
                md: '1rem',
                lg: '1.5rem',
                xl: '1.5rem',
                '2xl': '1.5rem',
              }}
              padding="24px 16px"
              alignItems="flex-start"
              gap="10px"
              width={{
                base: '20.75rem',
                sm: '20.75rem',
                md: '20.75rem',
                lg: '37.688rem',
                xl: '37.688rem',
                '2xl': '37.688rem',
              }}
              height={{
                base: '12.563rem',
                sm: '12.563rem',
                md: '12.563rem',
                lg: '17.5rem',
                xl: '17.5rem',
                '2xl': '17.5rem',
              }}
              key={feedback.id}
            >
              <Text
                color="#A1A1A1"
                fontSize={{
                  base: '0.625rem',
                  sm: '0.625rem',
                  md: '0.625rem',
                  lg: '0.875rem',
                  xl: '0.875rem',
                  '2xl': '0.875rem',
                }}
                lineHeight={{
                  base: '0.844rem',
                  sm: '0.844rem',
                  md: '0.844rem',
                  lg: '1.625rem',
                  xl: '1.625rem',
                  '2xl': '1.625rem',
                }}
                fontFamily="Satoshi"
              >
                {feedback.clientStatement}
              </Text>

              <Flex
                gap={{
                  base: '0.125rem',
                  sm: '0.125rem',
                  md: '0.125rem',
                  lg: '0.5rem',
                  xl: '0.5rem',
                  '2xl': '0.5rem',
                }}
              >
                <Avatar
                  src={feedback.clientAvatar}
                  name={feedback.clientName}
                  size={{
                    base: 'xs',
                    sm: 'xs',
                    md: 'xs',
                    lg: 'md',
                    xl: 'md',
                    '2xl': 'md',
                  }}
                />

                <Flex flexDirection="column" alignItems="flex-start">
                  <Text
                    fontFamily="Satoshi Bold"
                    fontWeight="bold"
                    fontSize={{
                      base: '0.625rem',
                      sm: '0.625rem',
                      md: '0.625rem',
                      lg: '0.875rem',
                      xl: '0.875rem',
                      '2xl': '0.875rem',
                    }}
                  >
                    {feedback.clientName}
                  </Text>
                  <Text
                    fontFamily="Satoshi"
                    color="#A1A1A1"
                    fontSize={{
                      base: '0.5rem',
                      sm: '0.5rem',
                      md: '0.5rem',
                      lg: '0.75rem',
                      xl: '0.75rem',
                      '2xl': '0.75rem',
                    }}
                    marginTop="0"
                  >
                    {feedback.clientPosition}
                  </Text>
                </Flex>
              </Flex>
            </VStack>
          </SplideSlide>
        ))}
      </Splide>
    </HStack>
  );
};

export default Carousel;
