import React from 'react';
import { Flex, HStack, Image, Text, VStack } from '@chakra-ui/react';

const WhyWeAreBest = () => {
  return (
    <Flex
      flexDirection="column"
      alignItems="center"
      background="#F8F9FC"
      height={{ base: '56rem', sm: '56rem', md: '56rem', lg: '55rem', xl: '55rem', '2xl': '55rem' }}
      position="relative"
      justifyContent="center"
    >
      <Flex
        flexDirection={{
          base: 'column',
          sm: 'column',
          md: 'column',
          lg: 'row',
          xl: 'row',
          '2xl': 'row',
        }}
        alignItems={{ xl: 'center' }}
        gap={{ base: '1.5rem', sm: '1.5rem', md: '1.5rem', lg: '5rem', xl: '5rem', '2xl': '5rem' }}
        width={{ xl: '83%', '2xl': '60%' }}
      >
        <VStack
          width={{
            base: '24rem',
            sm: '24rem',
            md: '24rem',
            lg: '44rem',
            xl: '44rem',
            '2xl': '44rem',
          }}
          gap="8px"
          alignItems={{
            base: 'center',
            sm: 'center',
            md: 'center',
            lg: 'flex-start',
            xl: 'flex-start',
            '2xl': 'flex-start',
          }}
        >
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
            textAlign={{
              base: 'center',
              sm: 'center',
              md: 'center',
              lg: 'left',
              xl: 'left',
              '2xl': 'left',
            }}
            width={{ lg: '43rem', xl: '43rem', '2xl': '43rem' }}
            lineHeight={{ lg: '4rem', xl: '4rem', '2xl': '4rem' }}
          >
            this is why we are best from others
          </Text>

          <Text
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
            textTransform="capitalize"
            textAlign={{
              base: 'center',
              sm: 'center',
              md: 'center',
              lg: 'left',
              xl: 'left',
              '2xl': 'left',
            }}
            width={{
              base: '20rem',
              sm: '20rem',
              md: '20rem',
              lg: '37rem',
              xl: '37rem',
              '2xl': '37rem',
            }}
          >
            high-defination video is video of higher resolution and quality than standard
            definition. while there’s no standard meaning for high definition, generally any
            standard video image
          </Text>

          <Image
            src="/assets/images/boy-on-laptop.jpeg"
            alt="boy on laptop"
            borderRadius={{
              base: '0.5rem',
              sm: '0.5rem',
              md: '0.5rem',
              lg: '1.25rem',
              xl: '1.25rem',
              '2xl': '1.25rem',
            }}
          />
        </VStack>

        <VStack gap={{ lg: '0.5rem', xl: '0.5rem', '2xl': '0.5rem' }}>
          <HStack gap={{ lg: '0.5rem', xl: '0.5rem', '2xl': '0.5rem' }}>
            <VStack
              background="#FFFFFF"
              width={{
                base: '12em',
                sm: '12em',
                md: '12em',
                lg: '15em',
                xl: '15em',
                '2xl': '15em',
              }}
              borderRadius={{
                base: '0.25em',
                sm: '0.25em',
                md: '0.25em',
                lg: '0.5em',
                xl: '0.5em',
                '2xl': '0.5em',
              }}
              alignItems="left"
              padding="24px 16px"
            >
              <Image
                src="/assets/why-icons/mentors.svg"
                alt="mentor icon"
                width={{
                  base: '2em',
                  sm: '2em',
                  md: '2em',
                  lg: '3em',
                  xl: '3em',
                  '2xl': '3em',
                }}
              />
              <Text
                fontSize={{
                  base: '0.75em',
                  sm: '0.75em',
                  md: '0.75em',
                  lg: '1em',
                  xl: '1em',
                  '2xl': '1em',
                }}
                fontFamily="Satoshi Bold"
                fontWeight="bold"
              >
                Experienced Mentors
              </Text>
              <Text
                fontSize={{
                  base: '0.5em',
                  sm: '0.5em',
                  md: '0.5em',
                  lg: '0.75em',
                  xl: '0.75em',
                  '2xl': '0.75em',
                }}
                textTransform="capitalize"
                color="#A1A1A1"
                width={{
                  base: '10rem',
                  sm: '10rem',
                  md: '10rem',
                  lg: '18em',
                  xl: '18em',
                  '2xl': '18em',
                }}
              >
                high-defination video is video of higher resolution and quality than standard
                definition. high-defination video is video of higher resolution and quality than
                standard definition.
              </Text>
            </VStack>

            <VStack
              background="#FFFFFF"
              width={{
                base: '12em',
                sm: '12em',
                md: '12em',
                lg: '15em',
                xl: '15em',
                '2xl': '15em',
              }}
              borderRadius={{
                base: '0.25em',
                sm: '0.25em',
                md: '0.25em',
                lg: '0.5em',
                xl: '0.5em',
                '2xl': '0.5em',
              }}
              alignItems="left"
              padding="24px 16px"
            >
              <Image
                src="/assets/why-icons/people.svg"
                alt="people icon"
                width={{
                  base: '2em',
                  sm: '2em',
                  md: '2em',
                  lg: '3em',
                  xl: '3em',
                  '2xl': '3em',
                }}
              />
              <Text
                fontSize={{
                  base: '0.75em',
                  sm: '0.75em',
                  md: '0.75em',
                  lg: '1em',
                  xl: '1em',
                  '2xl': '1em',
                }}
                fontFamily="Satoshi Bold"
                fontWeight="bold"
              >
                One-On-One Meetings
              </Text>
              <Text
                fontSize={{
                  base: '0.5em',
                  sm: '0.5em',
                  md: '0.5em',
                  lg: '0.75em',
                  xl: '0.75em',
                  '2xl': '0.75em',
                }}
                textTransform="capitalize"
                color="#A1A1A1"
                width={{
                  base: '10rem',
                  sm: '10rem',
                  md: '10rem',
                  lg: '18em',
                  xl: '18em',
                  '2xl': '18em',
                }}
              >
                high-defination video is video of higher resolution and quality than standard
                definition. high-defination video is video of higher resolution and quality than
                standard definition.
              </Text>
            </VStack>
          </HStack>

          <HStack gap={{ lg: '0.5rem', xl: '0.5rem', '2xl': '0.5rem' }}>
            <VStack
              background="#FFFFFF"
              width={{
                base: '12em',
                sm: '12em',
                md: '12em',
                lg: '15em',
                xl: '15em',
                '2xl': '15em',
              }}
              borderRadius={{
                base: '0.25em',
                sm: '0.25em',
                md: '0.25em',
                lg: '0.5em',
                xl: '0.5em',
                '2xl': '0.5em',
              }}
              alignItems="left"
              padding="24px 16px"
            >
              <Image
                src="/assets/why-icons/money.svg"
                alt="money icon"
                width={{
                  base: '2em',
                  sm: '2em',
                  md: '2em',
                  lg: '3em',
                  xl: '3em',
                  '2xl': '3em',
                }}
              />
              <Text
                fontSize={{
                  base: '0.75em',
                  sm: '0.75em',
                  md: '0.75em',
                  lg: '1em',
                  xl: '1em',
                  '2xl': '1em',
                }}
                fontFamily="Satoshi Bold"
                fontWeight="bold"
              >
                Affordable Prices
              </Text>
              <Text
                fontSize={{
                  base: '0.5em',
                  sm: '0.5em',
                  md: '0.5em',
                  lg: '0.75em',
                  xl: '0.75em',
                  '2xl': '0.75em',
                }}
                textTransform="capitalize"
                color="#A1A1A1"
                width={{
                  base: '10rem',
                  sm: '10rem',
                  md: '10rem',
                  lg: '18em',
                  xl: '18em',
                  '2xl': '18em',
                }}
              >
                high-defination video is video of higher resolution and quality than standard
                definition. high-defination video is video of higher resolution and quality than
                standard definition.
              </Text>
            </VStack>

            <VStack
              background="#FFFFFF"
              width={{
                base: '12em',
                sm: '12em',
                md: '12em',
                lg: '15em',
                xl: '15em',
                '2xl': '15em',
              }}
              borderRadius={{
                base: '0.25em',
                sm: '0.25em',
                md: '0.25em',
                lg: '0.5em',
                xl: '0.5em',
                '2xl': '0.5em',
              }}
              alignItems="left"
              padding="24px 16px"
            >
              <Image
                src="/assets/why-icons/time.svg"
                alt="time icon"
                width={{
                  base: '2em',
                  sm: '2em',
                  md: '2em',
                  lg: '3em',
                  xl: '3em',
                  '2xl': '3em',
                }}
              />
              <Text
                fontSize={{
                  base: '0.75em',
                  sm: '0.75em',
                  md: '0.75em',
                  lg: '1em',
                  xl: '1em',
                  '2xl': '1em',
                }}
                fontFamily="Satoshi Bold"
                fontWeight="bold"
              >
                Flexible Learning
              </Text>
              <Text
                fontSize={{
                  base: '0.5em',
                  sm: '0.5em',
                  md: '0.5em',
                  lg: '0.75em',
                  xl: '0.75em',
                  '2xl': '0.75em',
                }}
                textTransform="capitalize"
                color="#A1A1A1"
                width={{
                  base: '10rem',
                  sm: '10rem',
                  md: '10rem',
                  lg: '18em',
                  xl: '18em',
                  '2xl': '18em',
                }}
              >
                high-defination video is video of higher resolution and quality than standard
                definition. high-defination video is video of higher resolution and quality than
                standard definition.
              </Text>
            </VStack>
          </HStack>
        </VStack>
      </Flex>

      <Image
        src="/assets/vectors/why-purple-circle.svg"
        alt="purple circle"
        position="absolute"
        width={{ lg: '1.6rem', xl: '1.6rem', '2xl': '1.6rem' }}
        top={{ base: '39rem', sm: '39rem', md: '39rem', lg: '48rem', xl: '48rem', '2xl': '48rem' }}
        right={{ base: '0', sm: '0', md: '0', lg: '2rem', xl: '2rem', '2xl': '2rem' }}
      />
      <Image
        src="/assets/vectors/why-green-triangle.svg"
        alt="green triangle"
        position="absolute"
        width={{ lg: '1.8rem', xl: '1.8rem', '2xl': '1.8rem' }}
        top={{ base: '50rem', sm: '50rem', md: '50rem', lg: '42rem', xl: '42rem', '2xl': '42rem' }}
        left={{ base: '0', sm: '0', md: '0', lg: '2rem', xl: '2rem', '2xl': '2rem' }}
      />

      <Image
        display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
        src="/assets/vectors/yellow-zigzag.svg"
        alt="yellow zigzag"
        position="absolute"
        width={{ lg: '4.6rem', xl: '4.6rem', '2xl': '4.6rem' }}
        top={{ lg: '2.5rem', xl: '2.5rem', '2xl': '2.5rem' }}
        right={{ lg: '18rem', xl: '18rem', '2xl': '18rem' }}
      />

      <Image
        display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
        src="/assets/vectors/yellow-dot.svg"
        alt="yellow dot"
        position="absolute"
        width={{ lg: '0.5rem', xl: '0.5rem', '2xl': '0.5rem' }}
        top={{ lg: '2.5rem', xl: '2.5rem', '2xl': '2.5rem' }}
        left={{ lg: '22rem', xl: '22rem', '2xl': '22rem' }}
      />
    </Flex>
  );
};

export default WhyWeAreBest;
