import React from 'react';
import { Box, Flex, VStack, Text, HStack, Image } from '@chakra-ui/react';
import Avatars from './Avatars';
import GetStartedButton from './GetStartedButton';
import PrimaryButton from './PrimaryButton';
import { PrimaryButtonType } from '@/types/primary-button';
import { AvatarWidth } from '@/types/avatar-width';

const Hero = () => {
  const primaryButtonPropsMobile: PrimaryButtonType = {
    text: 'Enroll Now',
    link: '#',
    color: '#004DB3',
    bgColor: 'white',
    width: '4.563rem',
    height: '1.688rem',
    fontSize: '0.5rem',
  };

  const primaryButtonPropsDesktop: PrimaryButtonType = {
    text: 'Enroll Now',
    link: '#',
    color: '#004DB3',
    bgColor: 'white',
    width: '9.063rem',
    height: '3.375rem',
    fontSize: '1rem',
  };

  const avatarPropsMobile: AvatarWidth = {
    width: '2rem',
    height: '2rem',
  };

  const avatarPropsDesktop: AvatarWidth = {
    width: '3.5rem',
    height: '3.5rem',
  };
  return (
    <Flex
      height="51.625rem"
      width="100vw"
      background="#004DB3"
      backgroundImage={{
        base: '/assets/patterns/hero-patterns/Minimal-Pattern-1-D-mobile.svg',
        sm: '/assets/patterns/hero-patterns/Minimal-Pattern-1-D-mobile.svg',
        md: '/assets/patterns/hero-patterns/Minimal-Pattern-1-D-mobile.svg',
        lg: '/assets/patterns/hero-patterns/Minimal-Pattern-1-D-desktop.svg',
        xl: '/assets/patterns/hero-patterns/Minimal-Pattern-1-D-desktop.svg',
        '2xl': '/assets/patterns/hero-patterns/Minimal-Pattern-1-D-desktop.svg',
      }}
      backgroundSize="cover"
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
        alignItems="center"
        position="absolute"
        top={{
          base: '5rem',
          sm: '5rem',
          md: '5rem',
          lg: '9.375rem',
          xl: '9.375rem',
          '2xl': '9.375rem',
        }}
        w={{
          base: '100%',
          sm: '100%',
          md: '100%',
          lg: '83%',
          xl: '83%',
          '2xl': '60%',
        }}
      >
        <VStack
          alignItems={{
            base: 'center',
            sm: 'center',
            md: 'center',
            lg: 'flex-start',
            xl: 'flex-start',
            '2xl': 'flex-start',
          }}
          gap={{
            base: '0.5rem',
            sm: '0.5rem',
            md: '0.5rem',
            lg: '1.5rem',
            xl: '1.5rem',
            '2xl': '1.5rem',
          }}
          marginTop="1.625rem"
        >
          <Text
            fontFamily="Clash Display"
            color="#FFFFFF"
            fontSize={{
              base: '2rem',
              sm: '2rem',
              md: '2rem',
              lg: '3.375rem',
              xl: '3.375rem',
              '2xl': '3.125rem',
            }}
            textAlign={{
              base: 'center',
              sm: 'center',
              md: 'center',
              lg: 'left',
              xl: 'left',
              '2xl': 'left',
            }}
            lineHeight={{
              base: '2.861rem',
              sm: '2.861rem',
              md: '2.861rem',
              lg: '3.75rem',
              xl: '3.75rem',
              '2xl': '3.75rem',
            }}
          >
            Grow your skills to advance your career path
          </Text>

          <Text
            fontFamily="Satoshi"
            color="#FFFFFF"
            fontSize={{
              base: '0.625rem',
              sm: '0.625rem',
              md: '0.625rem',
              lg: '1rem',
              xl: '1rem',
              '2xl': '1rem',
            }}
            textAlign={{
              base: 'center',
              sm: 'center',
              md: 'center',
              lg: 'left',
              xl: 'left',
              '2xl': 'left',
            }}
            lineHeight={{
              base: '0.938rem',
              sm: '0.938rem',
              md: '0.938rem',
              lg: '1.625rem',
              xl: '1.625rem',
              '2xl': '1.625rem',
            }}
            textTransform="capitalize"
            width={{
              base: '22.5rem',
              sm: '22.5rem',
              md: '22.5rem',
              lg: '31.438rem',
              xl: '31.438rem',
              '2xl': '31.438rem',
            }}
          >
            build your future with our quality education. the best and largest all-in-one online
            tutoring platform in the world
          </Text>

          <HStack gap="0.838rem">
            <GetStartedButton />

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
          </HStack>

          <Flex gap="0.279rem">
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
              <Avatars {...avatarPropsMobile} />
            </Box>

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
              <Avatars {...avatarPropsDesktop} />
            </Box>

            <Flex flexDirection="column" textAlign="center">
              <Text
                fontFamily="Clash Display"
                fontSize={{
                  base: '0.838rem',
                  sm: '0.838rem',
                  md: '0.838rem',
                  lg: '1.5rem',
                  xl: '1.5rem',
                  '2xl': '1.5rem',
                }}
                color="#FFFFFF"
              >
                255k+
              </Text>
              <Text
                fontFamily="Satoshi"
                color="#FFFFFF"
                fontSize={{
                  base: '0.5rem',
                  sm: '0.5rem',
                  md: '0.5rem',
                  lg: '1rem',
                  xl: '1rem',
                  '2xl': '1rem',
                }}
              >
                Previews
              </Text>
            </Flex>
          </Flex>
        </VStack>

        <Flex
          position={{
            base: 'absolute',
            sm: 'absolute',
            md: 'absolute',
            lg: 'relative',
            xl: 'relative',
            '2xl': 'relative',
          }}
          top={{
            base: '21.5rem',
            sm: '21.5rem',
            md: '21.5rem',
            lg: '0',
            xl: '0',
            '2xl': '0',
          }}
          width={{
            base: '24.688rem',
            sm: '24.688rem',
            md: '24.688rem',
            lg: '74.063rem',
            xl: '62.688rem',
            '2xl': '62.063rem',
          }}
        >
          <Image
            src="/assets/images/hero-image.png"
            alt="hero image"
            width={{
              base: '20rem',
              sm: '20rem',
              md: '20rem',
              lg: '44.083rem',
              xl: '44.083rem',
              '2xl': '44.083rem',
            }}
            position={{
              base: 'absolute',
              sm: 'absolute',
              md: 'absolute',
              lg: 'static',
              xl: 'static',
              '2xl': 'static',
            }}
            left={{
              base: '2.043rem',
              sm: '2.043rem',
              md: '2.043rem',
              lg: '0',
              xl: '0',
              '2xl': '0',
            }}
          />

          <Image
            src="/assets/lightbulb.png"
            alt="lightbulb image"
            width={{
              base: '5.625rem',
              sm: '5.625rem',
              md: '5.625rem',
              lg: '10.045rem',
              xl: '10.045rem',
              '2xl': '10.045rem',
            }}
            height={{
              lg: '9.375rem',
              xl: '9.375rem',
              '2xl': '9.375rem',
            }}
            transform="rotate(-33.25deg)"
            position={{
              base: 'absolute',
              sm: 'absolute',
              md: 'absolute',
              lg: 'absolute',
              xl: 'absolute',
              '2xl': 'absolute',
            }}
            top={{
              base: '2rem',
              sm: '2rem',
              md: '2rem',
              lg: '3.438rem',
              xl: '3.438rem',
              '2xl': '3.438rem',
            }}
            left={{
              base: '1.25rem',
              sm: '1.25rem',
              md: '1.25rem',
              lg: '-1.563rem',
              xl: '-1.563rem',
              '2xl': '-1.563rem',
            }}
          />

          <Image
            src="/assets/vscode.jpeg"
            alt="vscode image"
            borderRadius="4px"
            width={{
              base: '3rem',
              sm: '3rem',
              md: '3rem',
              lg: '3.438rem',
              xl: '3.438rem',
              '2xl': '3.438rem',
            }}
            height={{
              base: '3rem',
              sm: '3rem',
              md: '3rem',
              lg: '3.438rem',
              xl: '3.438rem',
              '2xl': '3.438rem',
            }}
            position={{
              base: 'absolute',
              sm: 'absolute',
              md: 'absolute',
              lg: 'absolute',
              xl: 'absolute',
              '2xl': 'absolute',
            }}
            top={{
              base: '2.5rem',
              sm: '2.5rem',
              md: '2.5rem',
              lg: '4.917rem',
              xl: '4.917rem',
              '2xl': '4.917rem',
            }}
            left={{
              base: '19.375rem',
              sm: '19.375rem',
              md: '19.375rem',
              lg: '26.206rem',
              xl: '26.206rem',
              '2xl': '26.206rem',
            }}
          />

          <Image
            src="/assets/vectors/green-circle.svg"
            alt="green circle"
            width={{
              lg: '1.25rem',
              xl: '1.25rem',
              '2xl': '1.25rem',
            }}
            position={{
              base: 'absolute',
              sm: 'absolute',
              md: 'absolute',
              lg: 'absolute',
              xl: 'absolute',
              '2xl': 'absolute',
            }}
            top={{
              base: '8.313rem',
              sm: '8.313rem',
              md: '8.313rem',
              lg: '14.842rem',
              xl: '14.842rem',
              '2xl': '14.842rem',
            }}
            left={{
              base: '3.625rem',
              sm: '3.625rem',
              md: '3.625rem',
              lg: '3.544rem',
              xl: '3.544rem',
              '2xl': '3.544rem',
            }}
          />

          <Image
            src="/assets/vectors/gold-triangle.svg"
            alt="gold triangle"
            width={{
              lg: '2.188rem',
              xl: '2.188rem',
              '2xl': '2.188rem',
            }}
            position={{
              base: 'absolute',
              sm: 'absolute',
              md: 'absolute',
              lg: 'absolute',
              xl: 'absolute',
              '2xl': 'absolute',
            }}
            top={{
              base: '9.375rem',
              sm: '9.375rem',
              md: '9.375rem',
              lg: '15.644rem',
              xl: '15.644rem',
              '2xl': '15.644rem',
            }}
            left={{
              base: '20.625rem',
              sm: '20.625rem',
              md: '20.625rem',
              lg: '29.509rem',
              xl: '29.509rem',
              '2xl': '29.509rem',
            }}
          />

          <Image
            src="/assets/figma.svg"
            alt="figma image"
            width={{
              base: '3rem',
              sm: '3rem',
              md: '3rem',
              lg: '3.438rem',
              xl: '3.438rem',
              '2xl': '3.438rem',
            }}
            height={{
              base: '3rem',
              sm: '3rem',
              md: '3rem',
              lg: '3.438rem',
              xl: '3.438rem',
              '2xl': '3.438rem',
            }}
            position={{
              base: 'absolute',
              sm: 'absolute',
              md: 'absolute',
              lg: 'absolute',
              xl: 'absolute',
              '2xl': 'absolute',
            }}
            top={{
              base: '14.375rem',
              sm: '14.375rem',
              md: '14.375rem',
              lg: '23.786rem',
              xl: '23.786rem',
              '2xl': '23.786rem',
            }}
            left={{
              base: '1.125rem',
              sm: '1.125rem',
              md: '1.125rem',
              lg: '-2.813rem',
              xl: '-2.813rem',
              '2xl': '-2.813rem',
            }}
          />

          <Image
            src="/assets/vectors/yellow-dot.svg"
            alt="yellow dot"
            width={{
              base: '0.25rem',
              sm: '0.25rem',
              md: '0.25rem',
              lg: '0.585rem',
              xl: '0.585rem',
              '2xl': '0.585rem',
            }}
            position={{
              base: 'absolute',
              sm: 'absolute',
              md: 'absolute',
              lg: 'absolute',
              xl: 'absolute',
              '2xl': 'absolute',
            }}
            top={{
              base: '22.125rem',
              sm: '22.125rem',
              md: '22.125rem',
              lg: '36.281rem',
              xl: '36.281rem',
              '2xl': '36.281rem',
            }}
            left={{
              base: '3.938rem',
              sm: '3.938rem',
              md: '3.938rem',
              lg: '3.125rem',
              xl: '3.125rem',
              '2xl': '3.125rem',
            }}
          />

          <Image
            src="/assets/wordpress.svg"
            alt="wordpress logo"
            width={{
              base: '3rem',
              sm: '3rem',
              md: '3rem',
              lg: '3.438rem',
              xl: '3.438rem',
              '2xl': '3.438rem',
            }}
            height={{
              base: '3rem',
              sm: '3rem',
              md: '3rem',
              lg: '3.438rem',
              xl: '3.438rem',
              '2xl': '3.438rem',
            }}
            position={{
              base: 'absolute',
              sm: 'absolute',
              md: 'absolute',
              lg: 'absolute',
              xl: 'absolute',
              '2xl': 'absolute',
            }}
            top={{
              base: '21.563rem',
              sm: '21.563rem',
              md: '21.563rem',
              lg: '36.958rem',
              xl: '36.958rem',
              '2xl': '36.958rem',
            }}
            left={{
              base: '18.75rem',
              sm: '18.75rem',
              md: '18.75rem',
              lg: '28.867rem',
              xl: '28.867rem',
              '2xl': '28.867rem',
            }}
          />
        </Flex>

        <Flex>
          <Image
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
              '2xl': 'flex',
            }}
            src="/assets/vectors/green-circle.svg"
            alt="green circle"
            position="absolute"
            left="1.875rem"
            top="2.5rem"
            width="0.75rem"
          />

          <Image
            display={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'flex',
              xl: 'flex',
              '2xl': 'flex',
            }}
            src="/assets/vectors/yellow-dot.svg"
            alt="yellow dot"
            position="absolute"
            left={{ lg: '29.375rem', xl: '29.375rem', '2xl': '27.813rem' }}
            top="2.5rem"
          />
          <Image
            display={{
              base: 'flex',
              sm: 'flex',
              md: 'flex',
              lg: 'none',
              xl: 'none',
              '2xl': 'none',
            }}
            src="/assets/vectors/zigzag.svg"
            alt="zigzag vector"
            position="absolute"
            left="0"
            top="19.438rem"
          />

          <Image
            src="/assets/vectors/loopy-line.svg"
            alt="loopyline vector"
            position="absolute"
            width={{ lg: '4.375rem', xl: '4.375rem', '2xl': '4.375rem' }}
            left={{
              base: '19.375rem',
              sm: '19.375rem',
              md: '19.375rem',
              lg: '33.438rem',
              xl: '33.438rem',
              '2xl': '30.625rem',
            }}
            top={{
              base: '15rem',
              sm: '15rem',
              md: '15rem',
              lg: '23.75rem',
              xl: '23.75rem',
              '2xl': '23.75rem',
            }}
            transform={{
              base: 'none',
              sm: 'none',
              md: 'none',
              lg: 'matrix(0.46, -0.89, 0.82, 0.57, 0, 0)',
              xl: 'matrix(0.46, -0.89, 0.82, 0.57, 0, 0)',
              '2xl': 'matrix(0.46, -0.89, 0.82, 0.57, 0, 0)',
            }}
          />
        </Flex>
      </Flex>

      <Image
        display={{
          base: 'none',
          sm: 'none',
          md: 'none',
          lg: 'flex',
          xl: 'flex',
          '2xl': 'flex',
        }}
        src="/assets/vectors/zigzag-desktop.svg"
        alt="zigzag vector"
        position="absolute"
        left="0"
        top="27.063rem"
      />
    </Flex>
  );
};

export default Hero;
