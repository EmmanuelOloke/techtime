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
    width: '73px',
    height: '27px',
    fontSize: '8px',
  };

  const primaryButtonPropsDesktop: PrimaryButtonType = {
    text: 'Enroll Now',
    link: '#',
    color: '#004DB3',
    bgColor: 'white',
    width: '145px',
    height: '54px',
    fontSize: '16px',
  };

  const avatarPropsMobile: AvatarWidth = {
    width: '32px',
    height: '32px',
  };

  const avatarPropsDesktop: AvatarWidth = {
    width: '56px',
    height: '56px',
  };
  return (
    <Flex
      height="826px"
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
          base: '80px',
          sm: '80px',
          md: '80px',
          lg: '150px',
          xl: '150px',
          '2xl': '150px',
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
            base: '8px',
            sm: '8px',
            md: '8px',
            lg: '24px',
            xl: '24px',
            '2xl': '24px',
          }}
          marginTop="26px"
        >
          <Text
            fontFamily="Clash Display"
            color="#FFFFFF"
            fontSize={{
              base: '32px',
              sm: '32px',
              md: '32px',
              lg: '54px',
              xl: '54px',
              '2xl': '50px',
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
              base: '45.78px',
              sm: '45.78px',
              md: '45.78px',
              lg: '60px',
              xl: '60px',
              '2xl': '60px',
            }}
          >
            Grow your skills to advance your career path
          </Text>

          <Text
            fontFamily="Satoshi"
            color="#FFFFFF"
            fontSize={{
              base: '10px',
              sm: '10px',
              md: '10px',
              lg: '16px',
              xl: '16px',
              '2xl': '16px',
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
              base: '15px',
              sm: '15px',
              md: '15px',
              lg: '26px',
              xl: '26px',
              '2xl': '26px',
            }}
            textTransform="capitalize"
            width={{
              base: '360px',
              sm: '360px',
              md: '360px',
              lg: '503px',
              xl: '503px',
              '2xl': '503px',
            }}
          >
            build your future with our quality education. the best and largest all-in-one online
            tutoring platform in the world
          </Text>

          <HStack gap="13.4px">
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

          <Flex gap="4.47px">
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
                  base: '13.4px',
                  sm: '13.4px',
                  md: '13.4px',
                  lg: '24px',
                  xl: '24px',
                  '2xl': '24px',
                }}
                color="#FFFFFF"
              >
                255k+
              </Text>
              <Text
                fontFamily="Satoshi"
                color="#FFFFFF"
                fontSize={{
                  base: '8px',
                  sm: '8px',
                  md: '8px',
                  lg: '16px',
                  xl: '16px',
                  '2xl': '16px',
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
            base: '344px',
            sm: '344px',
            md: '344px',
            lg: '0',
            xl: '0',
            '2xl': '0',
          }}
          width={{
            base: '395px',
            sm: '395px',
            md: '395px',
            lg: '1185px',
            xl: '1003px',
            '2xl': '993px',
          }}
        >
          <Image
            src="/assets/images/hero-image.png"
            alt="hero image"
            width={{
              base: '320px',
              sm: '320px',
              md: '320px',
              lg: '705.33px',
              xl: '705.33px',
              '2xl': '705.33px',
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
              base: '32.69px',
              sm: '32.69px',
              md: '32.69px',
              lg: '0',
              xl: '0',
              '2xl': '0',
            }}
          />

          <Image
            src="/assets/lightbulb.png"
            alt="lightbulb image"
            width={{
              base: '90px',
              sm: '90px',
              md: '90px',
              lg: '160.72px',
              xl: '160.72px',
              '2xl': '160.72px',
            }}
            height={{
              lg: '150px',
              xl: '150px',
              '2xl': '150px',
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
              base: '32px',
              sm: '32px',
              md: '32px',
              lg: '55px',
              xl: '55px',
              '2xl': '55px',
            }}
            left={{
              base: '20px',
              sm: '20px',
              md: '20px',
              lg: '-25px',
              xl: '-25px',
              '2xl': '-25px',
            }}
          />

          <Image
            src="/assets/vscode.jpeg"
            alt="vscode image"
            borderRadius="4px"
            width={{
              base: '48px',
              sm: '48px',
              md: '48px',
              lg: '55px',
              xl: '55px',
              '2xl': '55px',
            }}
            height={{
              base: '48px',
              sm: '48px',
              md: '48px',
              lg: '55px',
              xl: '55px',
              '2xl': '55px',
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
              base: '40px',
              sm: '40px',
              md: '40px',
              lg: '78.67px',
              xl: '78.67px',
              '2xl': '78.67px',
            }}
            left={{
              base: '310px',
              sm: '310px',
              md: '310px',
              lg: '419.29px',
              xl: '419.29px',
              '2xl': '419.29px',
            }}
          />

          <Image
            src="/assets/vectors/green-circle.svg"
            alt="green circle"
            width={{
              lg: '20px',
              xl: '20px',
              '2xl': '20px',
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
              base: '133px',
              sm: '133px',
              md: '133px',
              lg: '237.47px',
              xl: '237.47px',
              '2xl': '237.47px',
            }}
            left={{
              base: '58px',
              sm: '58px',
              md: '58px',
              lg: '56.7px',
              xl: '56.7px',
              '2xl': '56.7px',
            }}
          />

          <Image
            src="/assets/vectors/gold-triangle.svg"
            alt="gold triangle"
            width={{
              lg: '35px',
              xl: '35px',
              '2xl': '35px',
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
              base: '150px',
              sm: '150px',
              md: '150px',
              lg: '250.3px',
              xl: '250.3px',
              '2xl': '250.3px',
            }}
            left={{
              base: '330px',
              sm: '330px',
              md: '330px',
              lg: '472.14px',
              xl: '472.14px',
              '2xl': '472.14px',
            }}
          />

          <Image
            src="/assets/figma.svg"
            alt="figma image"
            width={{
              base: '48px',
              sm: '48px',
              md: '48px',
              lg: '55px',
              xl: '55px',
              '2xl': '55px',
            }}
            height={{
              base: '48px',
              sm: '48px',
              md: '48px',
              lg: '55px',
              xl: '55px',
              '2xl': '55px',
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
              base: '230px',
              sm: '230px',
              md: '230px',
              lg: '380.57',
              xl: '380.57',
              '2xl': '380.57',
            }}
            left={{
              base: '18px',
              sm: '18px',
              md: '18px',
              lg: '-45px',
              xl: '-45px',
              '2xl': '-45px',
            }}
          />

          <Image
            src="/assets/vectors/yellow-dot.svg"
            alt="yellow dot"
            width={{
              base: '4px',
              sm: '4px',
              md: '4px',
              lg: '9.36px',
              xl: '9.36px',
              '2xl': '9.36px',
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
              base: '354px',
              sm: '354px',
              md: '354px',
              lg: '580.49px',
              xl: '580.49px',
              '2xl': '580.49px',
            }}
            left={{
              base: '63px',
              sm: '63px',
              md: '63px',
              lg: '50px',
              xl: '50px',
              '2xl': '50px',
            }}
          />

          <Image
            src="/assets/wordpress.svg"
            alt="wordpress logo"
            width={{
              base: '48px',
              sm: '48px',
              md: '48px',
              lg: '55px',
              xl: '55px',
              '2xl': '55px',
            }}
            height={{
              base: '48px',
              sm: '48px',
              md: '48px',
              lg: '55px',
              xl: '55px',
              '2xl': '55px',
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
              base: '345px',
              sm: '345px',
              md: '345px',
              lg: '591.33px',
              xl: '591.33px',
              '2xl': '591.33px',
            }}
            left={{
              base: '300px',
              sm: '300px',
              md: '300px',
              lg: '461.87px',
              xl: '461.87px',
              '2xl': '461.87px',
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
            left="30px"
            top="40px"
            width="12px"
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
            left={{ lg: '470px', xl: '470px', '2xl': '445px' }}
            top="40px"
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
            top="311px"
          />

          <Image
            src="/assets/vectors/loopy-line.svg"
            alt="loopyline vector"
            position="absolute"
            width={{ lg: '70px', xl: '70px', '2xl': '70px' }}
            left={{
              base: '310px',
              sm: '310px',
              md: '310px',
              lg: '535px',
              xl: '535px',
              '2xl': '490px',
            }}
            top={{
              base: '240px',
              sm: '240px',
              md: '240px',
              lg: '380px',
              xl: '380px',
              '2xl': '380px',
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
        top="433px"
      />
    </Flex>
  );
};

export default Hero;
