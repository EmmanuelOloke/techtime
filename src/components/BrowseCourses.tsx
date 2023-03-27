import React from 'react';
import { Avatar, Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import CourseCard from './CourseCard';
import { PrimaryButtonType } from '@/types/primary-button';
import PrimaryButton from './PrimaryButton';

import { courses } from '../../public/data/courseData';

const BrowseCourses = () => {
  const primaryButtonProps: PrimaryButtonType = {
    text: 'View Courses',
    link: '#',
    color: 'white',
    bgColor: '#004DB3',
  };
  return (
    <VStack background="#F8F9FC" height="980px" position="relative">
      <Flex flexDirection="column" alignItems="center" gap="6px" position="absolute" top="33.27px">
        <Text
          fontFamily="Clash Display"
          fontSize="24px"
          textTransform="capitalize"
          textAlign="center"
        >
          browse our popular courses
        </Text>

        <Text
          width="282.11px"
          lineHeight="16px"
          fontFamily="Satoshi"
          fontSize="8px"
          color="#A1A1A1"
          textAlign="center"
        >
          High-defination video is video of higher resolution and quality than standard definition.
          while there’s no standard meaning for high definition, generally any standard video image
        </Text>

        <Flex gap="16px" alignItems="center">
          <Button
            height="25px"
            padding="0px 8px"
            color="#004DB3"
            background="#FFFFFF"
            fontFamily="Satoshi"
            fontSize="8px"
          >
            All Categories
          </Button>

          <Button
            fontFamily="Satoshi Bold"
            color="#A1A1A1"
            background="none"
            height="25px"
            padding="0px 8px"
            fontSize="8px"
          >
            Design
          </Button>
          <Button
            fontFamily="Satoshi Bold"
            color="#A1A1A1"
            background="none"
            height="25px"
            padding="0px 8px"
            fontSize="8px"
          >
            Development
          </Button>
          <Button
            fontFamily="Satoshi Bold"
            color="#A1A1A1"
            background="none"
            height="25px"
            padding="0px 8px"
            fontSize="8px"
          >
            Marketing
          </Button>
        </Flex>
      </Flex>

      <Flex flexWrap="wrap" justifyContent="center" gap="8px" position="absolute" top="179px">
        <CourseCard courses={courses} />
      </Flex>

      <Box position="absolute" top="921px">
        <PrimaryButton {...primaryButtonProps} />
      </Box>
    </VStack>
  );
};

export default BrowseCourses;
