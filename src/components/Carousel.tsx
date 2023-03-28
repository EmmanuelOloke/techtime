import React from 'react';
import { Avatar, Flex, HStack, Text, VStack } from '@chakra-ui/react';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { feedbacks } from '../../public/data/carouselData';

const Carousel = () => {
  return (
    <HStack width="full" spacing={4} overflowX="auto" flexShrink={0}>
      <Splide aria-label="My Favorite Images">
        {feedbacks.map((feedback) => (
          <SplideSlide>
            <VStack
              background="#FFFFFF"
              borderRadius="16px"
              padding="24px 16px"
              alignItems="flex-start"
              gap="10px"
              width="332px"
              key={feedback.id}
            >
              <Text color="#A1A1A1" fontSize="10px" fontFamily="Satoshi">
                {feedback.clientStatement}
              </Text>

              <Flex gap="2px">
                <Avatar src={feedback.clientAvatar} name={feedback.clientName} size="xs" />

                <Flex flexDirection="column" alignItems="flex-start">
                  <Text fontFamily="Satoshi Bold" fontWeight="bold" fontSize="10px">
                    {feedback.clientName}
                  </Text>
                  <Text fontFamily="Satoshi" color="#A1A1A1" fontSize="8px" marginTop="0">
                    {feedback.clientPosition}
                  </Text>
                </Flex>
              </Flex>
            </VStack>
          </SplideSlide>
        ))}
      </Splide>
    </HStack>

    // <HStack width="full" spacing={4} overflowX="auto" flexShrink={0}>
    //   {feedbacks.map((feedback) => (
    //     <VStack
    //       background="#FFFFFF"
    //       borderRadius="16px"
    //       padding="24px 16px"
    //       alignItems="flex-start"
    //       gap="10px"
    //       width="332px"
    //       key={feedback.id}
    //     >
    //       <Text color="#A1A1A1" fontSize="10px" fontFamily="Satoshi">
    //         {feedback.clientStatement}
    //       </Text>

    //       <Flex gap="2px">
    //         <Avatar src={feedback.clientAvatar} name={feedback.clientName} size="xs" />

    //         <Flex flexDirection="column" alignItems="flex-start">
    //           <Text fontFamily="Satoshi Bold" fontWeight="bold" fontSize="10px">
    //             {feedback.clientName}
    //           </Text>
    //           <Text fontFamily="Satoshi" color="#A1A1A1" fontSize="8px" marginTop="0">
    //             {feedback.clientPosition}
    //           </Text>
    //         </Flex>
    //       </Flex>
    //     </VStack>
    //   ))}
    // </HStack>
  );
};

export default Carousel;
