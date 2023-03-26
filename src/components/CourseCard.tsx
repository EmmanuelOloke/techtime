import React from 'react';
import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react';

const CourseCard = () => {
  return (
    <Flex
      flexDirection="column"
      gap="16px"
      background="#FFFFFF"
      width="194px"
      height="234px"
      borderRadius="4px"
      padding="16px 8px"
    >
      <Flex flexDirection="column" gap="8px">
        <Flex flexDirection="column" gap="4px">
          <Image
            src="/assets/images/woman-stickynotes.jpeg"
            alt="woman pointing to sticky notes on a white board"
            width="176.82px"
            borderRadius="2px"
          />

          <Flex justifyContent="space-between">
            <Box
              background="rgba(30, 93, 206, 0.2)"
              padding="2px 8px"
              borderRadius="6.4px"
              color="#1E5DCE"
              fontFamily="Satoshi Bold"
              fontWeight="bold"
              fontSize="4px"
            >
              Design
            </Box>

            <Flex gap="3.22px" alignItems="center">
              <Flex justifyContent="center" alignItems="center">
                <Text fontFamily="Satoshi Bold" fontWeight="bold" fontSize="4px" color="#A1A1A1">
                  4.7k
                </Text>
                <Image src="/assets/vectors/star.svg" alt="star icon" />
              </Flex>

              <Text fontFamily="Satoshi Bold" fontWeight="bold" fontSize="4px" color="#A1A1A1">
                (32.7k+)
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex flexDirection="column" gap="4px">
          <Text width="155.47px" fontFamily="Clash Display" fontSize="8px" lineHeight="10.8px">
            Introduction to user research in UX Design
          </Text>

          <Flex justifyContent="space-between">
            <Flex gap="4px" alignItems="center">
              <Image src="/assets/vectors/schedule.svg" alt="schedule icon" />
              <Text fontFamily="Satoshi" color="#A1A1A1" fontSize="4px">
                23hrs 50mins
              </Text>
            </Flex>

            <Flex gap="4px" alignItems="center">
              <Image src="/assets/vectors/menu-book.svg" alt="menu book icon" />
              <Text fontFamily="Satoshi" color="#A1A1A1" fontSize="4px">
                15 Lessons
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex alignItems="center" justifyContent="space-between">
        <Flex gap="3.22px" alignItems="center">
          <Avatar src="assets/images/leonard-victor.png" name="Leonard Victor" size="2xs" />
          <Text fontFamily="Satoshi Bold" fontWeight="bold" fontSize="6px">
            Leonard Victor
          </Text>
        </Flex>

        <Text fontFamily="Clash Display" fontSize="8px" color="#004DB3">
          $15.00
        </Text>
      </Flex>
    </Flex>
  );
};

export default CourseCard;
