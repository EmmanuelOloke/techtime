import React from 'react';
import { Avatar, Box, Flex, Image, Text } from '@chakra-ui/react';

import { Course } from '@/types/course';

interface Props {
  courses: Array<Course>;
}

const CourseCard: React.FC<Props> = ({ courses }) => {
  const eachCourse = courses.map((course) => (
    <Flex
      flexDirection="column"
      gap="16px"
      background="#FFFFFF"
      width={{
        base: '12.125rem',
        sm: '12.125rem',
        md: '12.125rem',
        lg: '23rem',
        xl: '23rem',
        '2xl': '23rem',
      }}
      height={{
        base: '14.625rem',
        sm: '14.625rem',
        md: '14.625rem',
        lg: '29.5rem',
        xl: '29.5rem',
        '2xl': '29.5rem',
      }}
      borderRadius={{
        base: '0.25rem',
        sm: '0.25rem',
        md: '0.25rem',
        lg: '1rem',
        xl: '1rem',
        '2xl': '1rem',
      }}
      padding={{
        base: '1rem 0.5rem',
        sm: '1rem 0.5rem',
        md: '1rem 0.5rem',
        lg: '1rem 1rem',
        xl: '1rem 1rem',
        '2xl': '1rem 1rem',
      }}
      key={course.id}
    >
      <Flex
        flexDirection="column"
        gap={{
          base: '0.5rem',
          sm: '0.5rem',
          md: '0.5rem',
          lg: '1rem',
          xl: '1rem',
          '2xl': '1rem',
        }}
      >
        <Flex
          flexDirection="column"
          gap={{
            base: '0.25rem',
            sm: '0.25rem',
            md: '0.25rem',
            lg: '1rem',
            xl: '1rem',
            '2xl': '1rem',
          }}
        >
          <Image
            src={course.courseImageUrl}
            alt={course.title}
            width={{
              base: '11rem',
              sm: '11rem',
              md: '11rem',
              lg: '27.438rem',
              xl: '27.438rem',
              '2xl': '27.438rem',
            }}
            borderRadius={{
              base: '0.125rem',
              sm: '0.125rem',
              md: '0.125rem',
              lg: '0.25rem',
              xl: '0.25rem',
              '2xl': '0.25rem',
            }}
          />

          <Flex justifyContent="space-between">
            <Box
              background="rgba(30, 93, 206, 0.2)"
              padding={{
                base: '0.125rem 0.5rem',
                sm: '0.125rem 0.5rem',
                md: '0.125rem 0.5rem',
                lg: '0.25rem 1.25rem',
                xl: '0.25rem 1.25rem',
                '2xl': '0.25rem 1.25rem',
              }}
              borderRadius={{
                base: '0.4rem',
                sm: '0.4rem',
                md: '0.4rem',
                lg: '1rem',
                xl: '1rem',
                '2xl': '1rem',
              }}
              color="#1E5DCE"
              fontFamily="Satoshi Bold"
              fontWeight="bold"
              fontSize={{
                base: '0.25rem',
                sm: '0.25rem',
                md: '0.25rem',
                lg: '0.75rem',
                xl: '0.75rem',
                '2xl': '0.75rem',
              }}
            >
              {course.category}
            </Box>

            <Flex gap="3.22px" alignItems="center">
              <Flex justifyContent="center" alignItems="center">
                <Text
                  fontFamily="Satoshi Bold"
                  fontWeight="bold"
                  fontSize={{
                    base: '0.25rem',
                    sm: '0.25rem',
                    md: '0.25rem',
                    lg: '0.75rem',
                    xl: '0.75rem',
                    '2xl': '0.75rem',
                  }}
                  color="#A1A1A1"
                >
                  {course.rating}k
                </Text>
                <Image
                  src="/assets/vectors/star.svg"
                  alt="star icon"
                  width={{ lg: '0.833rem', xl: '0.833rem', '2xl': '0.833rem' }}
                />
              </Flex>

              <Text
                fontFamily="Satoshi Bold"
                fontWeight="bold"
                fontSize={{
                  base: '0.25rem',
                  sm: '0.25rem',
                  md: '0.25rem',
                  lg: '0.75rem',
                  xl: '0.75rem',
                  '2xl': '0.75rem',
                }}
                color="#A1A1A1"
              >
                ({course.numberOfStudents}k+)
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          flexDirection="column"
          gap={{
            base: '0.25rem',
            sm: '0.25rem',
            md: '0.25rem',
            lg: '1rem',
            xl: '1rem',
            '2xl': '1rem',
          }}
        >
          <Text
            width={{
              base: '9.7rem',
              sm: '9.7rem',
              md: '9.7rem',
              lg: '20rem',
              xl: '20rem',
              '2xl': '20rem',
            }}
            fontFamily="Clash Display"
            fontSize={{
              base: '0.5rem',
              sm: '0.5rem',
              md: '0.5rem',
              lg: '1.2rem',
              xl: '1.2rem',
              '2xl': '1.2rem',
            }}
            lineHeight={{
              base: '0.675rem',
              sm: '0.675rem',
              md: '0.675rem',
              lg: '1.3rem',
              xl: '1.3rem',
              '2xl': '1.3rem',
            }}
          >
            {course.title}
          </Text>

          <Flex justifyContent="space-between">
            <Flex gap="4px" alignItems="center">
              <Image
                src="/assets/vectors/schedule.svg"
                alt="schedule icon"
                width={{ lg: '1rem', xl: '1rem', '2xl': '1rem' }}
              />
              <Text
                fontFamily="Satoshi"
                color="#A1A1A1"
                fontSize={{
                  base: '0.25rem',
                  sm: '0.25rem',
                  md: '0.25rem',
                  lg: '0.75rem',
                  xl: '0.75rem',
                  '2xl': '0.75rem',
                }}
              >
                {course.duration}
              </Text>
            </Flex>

            <Flex gap="4px" alignItems="center">
              <Image
                src="/assets/vectors/menu-book.svg"
                alt="menu book icon"
                width={{ lg: '1.25rem', xl: '1.25rem', '2xl': '1.25rem' }}
              />
              <Text
                fontFamily="Satoshi"
                color="#A1A1A1"
                fontSize={{
                  base: '0.25rem',
                  sm: '0.25rem',
                  md: '0.25rem',
                  lg: '0.75rem',
                  xl: '0.75rem',
                  '2xl': '0.75rem',
                }}
              >
                {course.numberOfLessons} Lessons
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex alignItems="center" justifyContent="space-between">
        <Flex gap="3.22px" alignItems="center">
          <Avatar
            src={course.tutorAvatarUrl}
            name={course.tutorName}
            size={{
              base: '2xs',
              sm: '2xs',
              md: '2xs',
              lg: 'md',
              xl: 'md',
              '2xl': 'md',
            }}
          />
          <Text
            fontFamily="Satoshi Bold"
            fontWeight="bold"
            fontSize={{
              base: '0.375rem',
              sm: '0.375rem',
              md: '0.375rem',
              lg: '1rem',
              xl: '1rem',
              '2xl': '1rem',
            }}
          >
            {course.tutorName}
          </Text>
        </Flex>

        <Text
          fontFamily="Clash Display"
          fontSize={{
            base: '0.5rem',
            sm: '0.5rem',
            md: '0.5rem',
            lg: '1.25rem',
            xl: '1.25rem',
            '2xl': '1.25rem',
          }}
          color="#004DB3"
        >
          ${course.price.toFixed(2)}
        </Text>
      </Flex>
    </Flex>
  ));

  return <>{eachCourse}</>;
};

export default CourseCard;
