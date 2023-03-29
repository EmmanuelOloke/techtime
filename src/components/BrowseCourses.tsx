import React from 'react';
import { Avatar, Box, Button, Flex, Image, Text, VStack } from '@chakra-ui/react';
import CourseCard from './CourseCard';
import { PrimaryButtonType } from '@/types/primary-button';
import PrimaryButton from './PrimaryButton';

import { courses } from '../../public/data/courseData';

const BrowseCourses = () => {
  const primaryButtonPropsMobile: PrimaryButtonType = {
    text: 'View Courses',
    link: '#',
    color: 'white',
    bgColor: '#004DB3',
    width: '83px',
    height: '27px',
    fontSize: '8px',
  };

  const primaryButtonPropsDesktop: PrimaryButtonType = {
    text: 'View Courses',
    link: '#',
    color: 'white',
    bgColor: '#004DB3',
    width: '166px',
    height: '54px',
    fontSize: '16px',
  };
  return (
    <VStack
      background="#F8F9FC"
      height={{
        base: '61rem',
        sm: '61rem',
        md: '61rem',
        lg: '90rem',
        xl: '90rem',
        '2xl': '90rem',
      }}
      position="relative"
      gap={{ base: '1rem', sm: '1rem', md: '1rem', lg: '2rem', xl: '2rem', '2xl': '2rem' }}
    >
      <Flex flexDirection="column" alignItems="center" gap="0px">
        <Text
          fontFamily="Clash Display"
          fontSize={{
            base: '1.5rem',
            sm: '1.5rem',
            md: '1.5rem',
            lg: '3.5rem',
            xl: '3.5rem',
            '2xl': '3.5rem',
          }}
          textTransform="capitalize"
          textAlign="center"
        >
          browse our popular courses
        </Text>

        <Text
          width={{
            base: '17rem',
            sm: '17rem',
            md: '17rem',
            lg: '45rem',
            xl: '45rem',
            '2xl': '45rem',
          }}
          lineHeight={{
            base: '1rem',
            sm: '1rem',
            md: '1rem',
            lg: '1.75rem',
            xl: '1.75rem',
            '2xl': '1.75rem',
          }}
          fontFamily="Satoshi"
          fontSize={{
            base: '0.5rem',
            sm: '0.5rem',
            md: '0.5rem',
            lg: '1rem',
            xl: '1rem',
            '2xl': '1rem',
          }}
          color="#A1A1A1"
          textAlign="center"
          textTransform={{ lg: 'capitalize', xl: 'capitalize', '2xl': 'capitalize' }}
        >
          High-defination video is video of higher resolution and quality than standard definition.
          while there’s no standard meaning for high definition, generally any standard video image
        </Text>

        <Flex
          gap={{
            base: '1rem',
            sm: '1rem',
            md: '1rem',
            lg: '3rem',
            xl: '3rem',
            '2xl': '3rem',
          }}
          alignItems="center"
          margin="2rem 0rem 1rem 0rem"
        >
          <Button
            height={{
              base: '1.5rem',
              sm: '1.5rem',
              md: '1.5rem',
              lg: '2.8rem',
              xl: '2.8rem',
              '2xl': '2.8rem',
            }}
            padding={{
              base: '0rem 0.5rem',
              sm: '0rem 0.5rem',
              md: '0rem 0.5rem',
              lg: '0.5rem 1rem',
              xl: '0.5rem 1rem',
              '2xl': '0.5rem 1rem',
            }}
            color="#004DB3"
            background="#FFFFFF"
            fontFamily="Satoshi Bold"
            fontSize={{
              base: '0.5rem',
              sm: '0.5rem',
              md: '0.5rem',
              lg: '1rem',
              xl: '1rem',
              '2xl': '1rem',
            }}
          >
            All Categories
          </Button>

          <Button
            height={{
              base: '1.5rem',
              sm: '1.5rem',
              md: '1.5rem',
              lg: '2.8rem',
              xl: '2.8rem',
              '2xl': '2.8rem',
            }}
            padding={{
              base: '0rem 0.5rem',
              sm: '0rem 0.5rem',
              md: '0rem 0.5rem',
              lg: '0.5rem 1rem',
              xl: '0.5rem 1rem',
              '2xl': '0.5rem 1rem',
            }}
            color="#A1A1A1"
            background="none"
            fontFamily="Satoshi Bold"
            fontSize={{
              base: '0.5rem',
              sm: '0.5rem',
              md: '0.5rem',
              lg: '1rem',
              xl: '1rem',
              '2xl': '1rem',
            }}
          >
            Design
          </Button>
          <Button
            height={{
              base: '1.5rem',
              sm: '1.5rem',
              md: '1.5rem',
              lg: '2.8rem',
              xl: '2.8rem',
              '2xl': '2.8rem',
            }}
            padding={{
              base: '0rem 0.5rem',
              sm: '0rem 0.5rem',
              md: '0rem 0.5rem',
              lg: '0.5rem 1rem',
              xl: '0.5rem 1rem',
              '2xl': '0.5rem 1rem',
            }}
            color="#A1A1A1"
            background="none"
            fontFamily="Satoshi Bold"
            fontSize={{
              base: '0.5rem',
              sm: '0.5rem',
              md: '0.5rem',
              lg: '1rem',
              xl: '1rem',
              '2xl': '1rem',
            }}
          >
            Development
          </Button>
          <Button
            height={{
              base: '1.5rem',
              sm: '1.5rem',
              md: '1.5rem',
              lg: '2.8rem',
              xl: '2.8rem',
              '2xl': '2.8rem',
            }}
            padding={{
              base: '0rem 0.5rem',
              sm: '0rem 0.5rem',
              md: '0rem 0.5rem',
              lg: '0.5rem 1rem',
              xl: '0.5rem 1rem',
              '2xl': '0.5rem 1rem',
            }}
            color="#A1A1A1"
            background="none"
            fontFamily="Satoshi Bold"
            fontSize={{
              base: '0.5rem',
              sm: '0.5rem',
              md: '0.5rem',
              lg: '1rem',
              xl: '1rem',
              '2xl': '1rem',
            }}
          >
            Marketing
          </Button>
        </Flex>
      </Flex>

      <Flex
        flexWrap="wrap"
        justifyContent="center"
        gap={{
          base: '0.5rem',
          sm: '0.5rem',
          md: '0.5rem',
          lg: '1.5rem',
          xl: '1.5rem',
          '2xl': '1.5rem',
        }}
        width={{ xl: '83%', '2xl': '60%' }}
      >
        <CourseCard courses={courses} />
      </Flex>

      <Box
        display={{
          base: 'none',
          sm: 'none',
          md: 'none',
          lg: 'flex',
          xl: 'flex',
          '2xl': 'flex',
        }}
      >
        <PrimaryButton {...primaryButtonPropsDesktop} />
      </Box>

      <Box
        display={{
          base: 'flex',
          sm: 'flex',
          md: 'flex',
          lg: 'none',
          xl: 'none',
          '2xl': 'none',
        }}
      >
        <PrimaryButton {...primaryButtonPropsMobile} />
      </Box>
    </VStack>
  );
};

export default BrowseCourses;
