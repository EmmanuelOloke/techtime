import React from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { PrimaryButtonType } from '@/types/primary-button';
import PrimaryButton from './PrimaryButton';
import Avatars from './Avatars';
import { AvatarWidth } from '@/types/avatar-width';

const HighQualitySection = () => {
  const primaryButtonPropsDesktop: PrimaryButtonType = {
    text: 'View Courses',
    link: '#',
    color: 'white',
    bgColor: '#004DB3',
    width: '166px',
    height: '54px',
    fontSize: '16px',
  };

  const primaryButtonPropsMobile: PrimaryButtonType = {
    text: 'View Courses',
    link: '#',
    color: 'white',
    bgColor: '#004DB3',
    width: '83px',
    height: '27px',
    fontSize: '8px',
  };

  const avatarPropsMobile: AvatarWidth = {
    width: '23px',
    height: '23px',
  };

  const avatarPropsDesktop: AvatarWidth = {
    width: '36px',
    height: '36px',
  };
  return (
    <Flex
      flexDirection={{
        base: 'column',
        sm: 'column',
        md: 'column',
        lg: 'row',
        xl: 'row',
        '2xl': 'row',
      }}
      justifyContent="center"
      background="#F8F9FC"
      height="666px"
      position="relative"
      gap={{ base: '24px', sm: '24px', md: '24px', lg: '0', xl: '0', '2xl': '0' }}
      paddingTop={{ lg: '60px', xl: '60px', '2xl': '60px' }}
      width="100vw"
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
        width={{ xl: '83%', '2xl': '60%' }}
        justifyContent="center"
        gap={{ base: '24px', sm: '24px', md: '24px' }}
      >
        <Flex
          flexDirection="column"
          marginTop={{ lg: '30px', xl: '30px', '2xl': '30px' }}
          alignItems={{
            base: 'center',
            sm: 'center',
            md: 'center',
            lg: 'flex-start',
            xl: 'flex-start',
            '2xl': 'flex-start',
          }}
          gap="16px"
        >
          <Box>
            <Image
              src="/assets/text-crown.svg"
              alt="text crown"
              position="absolute"
              top={{ base: '32px', sm: '32px', md: '32px', lg: '80px', xl: '80px', '2xl': '80px' }}
              left={{
                base: '6px',
                sm: '6px',
                md: '6px',
                lg: '100px',
                xl: '102px',
                '2xl': '364px',
              }}
            />
            <Text
              fontFamily="Clash Display"
              fontSize={{
                base: '24px',
                sm: '24px',
                md: '24px',
                lg: '56px',
                xl: '56px',
                '2xl': '56px',
              }}
              width={{ lg: '694px', xl: '694px', '2xl': '694px' }}
              textAlign={{ base: 'center', sm: 'center', md: 'center', lg: 'left', '2xl': 'left' }}
              color="#000F24"
              lineHeight={{ xl: '70px' }}
            >
              High quality video, audio & live classes
            </Text>
          </Box>

          <Text
            fontFamily="Satoshi"
            color="#A1A1A1"
            fontSize={{
              base: '8px',
              sm: '8px',
              md: '8px',
              lg: '16px',
              xl: '16px',
              '2xl': '16px',
            }}
            lineHeight={{
              base: '15.39px',
              sm: '15.39px',
              md: '15.39px',
              lg: '28px',
              xl: '28px',
              '2xl': '28px',
            }}
            width={{
              base: '332.04px',
              sm: '332.04px',
              md: '332.04px',
              lg: '604px',
              xl: '604px',
              '2xl': '604px',
            }}
            textTransform="capitalize"
          >
            high-defination video is video of higher resolution and quality than standard
            definition. while there’s no standard meaning for high definition, generally any
            standard video image
          </Text>

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

          <Flex
            width={{
              base: '277.38px',
              sm: '277.38px',
              md: '277.38px',
              lg: '492px',
              xl: '492px',
              '2xl': '492px',
            }}
            flexDirection="column"
            gap={{
              base: '13.19px',
              sm: '13.19px',
              md: '13.19px',
              lg: '24px',
              xl: '24px',
              '2xl': '24px',
            }}
            alignItems={{
              base: 'center',
              sm: 'center',
              md: 'center',
              lg: 'flex-start',
              xl: 'flex-start',
              '2xl': 'flex-start',
            }}
          >
            <Flex
              gap={{
                base: '13.19px',
                sm: '13.19px',
                md: '13.19px',
                lg: '24px',
                xl: '24px',
                '2xl': '24px',
              }}
            >
              <Flex
                background="#FFFFFF"
                borderRadius={{
                  base: '4px',
                  sm: '4px',
                  md: '4px',
                  lg: '8px',
                  xl: '8px',
                  '2xl': '8px',
                }}
                width={{
                  base: '129.59px',
                  sm: '129.59px',
                  md: '129.59px',
                  lg: '232px',
                  xl: '232px',
                  '2xl': '232px',
                }}
                padding={{
                  base: '8px 32px 8px 16px',
                  sm: '8px 32px 8px 16px',
                  md: '8px 32px 8px 16px',
                  lg: '20px 56px 20px 24px',
                  xl: '20px 56px 20px 24px',
                  '2xl': '20px 56px 20px 24px',
                }}
                gap={{ base: '8px', sm: '8px', md: '8px', lg: '16px', xl: '16px', '2xl': '16px' }}
                alignItems="center"
              >
                <Image
                  src="/assets/icons/audio-icon.svg"
                  alt="audio icon"
                  width={{
                    base: '17.59px',
                    sm: '17.59px',
                    md: '17.59',
                    lg: '32px',
                    xl: '32px',
                    '2xl': '32px',
                  }}
                />
                <Text
                  fontFamily="Satoshi Bold"
                  fontWeight="bold"
                  fontSize={{
                    base: '8px',
                    sm: '8px',
                    md: '8px',
                    lg: '16px',
                    xl: '16px',
                    '2xl': '16px',
                  }}
                >
                  Audio Classes
                </Text>
              </Flex>

              <Flex
                background="#FFFFFF"
                borderRadius={{
                  base: '4px',
                  sm: '4px',
                  md: '4px',
                  lg: '8px',
                  xl: '8px',
                  '2xl': '8px',
                }}
                width={{
                  base: '123.59px',
                  sm: '123.59px',
                  md: '123.59px',
                  lg: '218px',
                  xl: '218px',
                  '2xl': '218px',
                }}
                padding={{
                  base: '8px 32px 8px 16px',
                  sm: '8px 32px 8px 16px',
                  md: '8px 32px 8px 16px',
                  lg: '20px 56px 20px 24px',
                  xl: '20px 56px 20px 24px',
                  '2xl': '20px 56px 20px 24px',
                }}
                gap={{ base: '8px', sm: '8px', md: '8px', lg: '16px', xl: '16px', '2xl': '16px' }}
                alignItems="center"
              >
                <Image
                  src="/assets/icons/live-class-icon.svg"
                  alt="live class icon"
                  width={{
                    base: '17.59px',
                    sm: '17.59px',
                    md: '17.59',
                    lg: '32px',
                    xl: '32px',
                    '2xl': '32px',
                  }}
                />
                <Text
                  fontFamily="Satoshi Bold"
                  fontWeight="bold"
                  fontSize={{
                    base: '8px',
                    sm: '8px',
                    md: '8px',
                    lg: '16px',
                    xl: '16px',
                    '2xl': '16px',
                  }}
                >
                  Live Classes
                </Text>
              </Flex>
            </Flex>

            <Flex
              gap={{
                base: '13.19px',
                sm: '13.19px',
                md: '13.19px',
                lg: '24px',
                xl: '24px',
                '2xl': '24px',
              }}
            >
              <Flex
                background="#FFFFFF"
                borderRadius={{
                  base: '4px',
                  sm: '4px',
                  md: '4px',
                  lg: '8px',
                  xl: '8px',
                  '2xl': '8px',
                }}
                width={{
                  base: '146.59px',
                  sm: '146.59px',
                  md: '146.59px',
                  lg: '261px',
                  xl: '261px',
                  '2xl': '261px',
                }}
                padding={{
                  base: '8px 32px 8px 16px',
                  sm: '8px 32px 8px 16px',
                  md: '8px 32px 8px 16px',
                  lg: '20px 56px 20px 24px',
                  xl: '20px 56px 20px 24px',
                  '2xl': '20px 56px 20px 24px',
                }}
                gap={{ base: '8px', sm: '8px', md: '8px', lg: '16px', xl: '16px', '2xl': '16px' }}
                alignItems="center"
              >
                <Image
                  src="/assets/icons/recorded-classes-icon.svg"
                  alt="recorded classes icon"
                  width={{
                    base: '17.59px',
                    sm: '17.59px',
                    md: '17.59',
                    lg: '32px',
                    xl: '32px',
                    '2xl': '32px',
                  }}
                />
                <Text
                  fontFamily="Satoshi Bold"
                  fontWeight="bold"
                  fontSize={{
                    base: '8px',
                    sm: '8px',
                    md: '8px',
                    lg: '16px',
                    xl: '16px',
                    '2xl': '16px',
                  }}
                >
                  Recorded Classes
                </Text>
              </Flex>

              <Flex
                background="#FFFFFF"
                borderRadius={{
                  base: '4px',
                  sm: '4px',
                  md: '4px',
                  lg: '8px',
                  xl: '8px',
                  '2xl': '8px',
                }}
                width={{
                  base: '117.59px',
                  sm: '117.59px',
                  md: '117.59px',
                  lg: '217px',
                  xl: '217px',
                  '2xl': '217px',
                }}
                padding={{
                  base: '8px 32px 8px 16px',
                  sm: '8px 32px 8px 16px',
                  md: '8px 32px 8px 16px',
                  lg: '20px 56px 20px 24px',
                  xl: '20px 56px 20px 24px',
                  '2xl': '20px 56px 20px 24px',
                }}
                gap={{ base: '8px', sm: '8px', md: '8px', lg: '16px', xl: '16px', '2xl': '16px' }}
                alignItems="center"
              >
                <Image
                  src="/assets/icons/notes-icon.svg"
                  alt="notes icon"
                  width={{
                    base: '17.59px',
                    sm: '17.59px',
                    md: '17.59',
                    lg: '32px',
                    xl: '32px',
                    '2xl': '32px',
                  }}
                />
                <Text
                  fontFamily="Satoshi Bold"
                  fontWeight="bold"
                  fontSize={{
                    base: '8px',
                    sm: '8px',
                    md: '8px',
                    lg: '16px',
                    xl: '16px',
                    '2xl': '16px',
                  }}
                >
                  50+ Notes
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Box
          width={{
            base: '352.88px',
            sm: '352.88px',
            md: '352.88px',
            lg: '805px',
            xl: '805px',
            '2xl': '805px',
          }}
          height={{
            base: '253.66px',
            sm: '253.66px',
            md: '253.66px',
            lg: '622px',
            xl: '622px',
            '2xl': '622px',
          }}
          position="relative"
          left={{
            base: '20px',
            sm: '20px',
            md: '20px',
            lg: '-100px',
            xl: '-100px',
            '2xl': '-100px',
          }}
        >
          <Image
            src="/assets/images/headset-macbook.jpeg"
            alt="man with headset and macbook"
            width={{
              base: '265px',
              sm: '265px',
              md: '265px',
              lg: '480px',
              xl: '480px',
              '2xl': '480px',
            }}
            objectFit="cover"
            height={{
              base: '194px',
              sm: '194px',
              md: '194px',
              lg: '412px',
              xl: '412px',
              '2xl': '412px',
            }}
            position="absolute"
            left={{
              base: '87.23px',
              sm: '87.23px',
              md: '87.23px',
              lg: '199px',
              xl: '199px',
              '2xl': '199px',
            }}
            border={{
              base: '3.95px solid #5588CC',
              sm: '3.95px solid #5588CC',
              md: '3.95px solid #5588CC',
              lg: '5px solid #5588CC',
              xl: '5px solid #5588CC',
              '2xl': '5px solid #5588CC',
            }}
            borderRadius="8px"
            zIndex={2}
          />

          <Flex
            flexDirection="column"
            position="absolute"
            left={{ base: '35px', sm: '35px', md: '35px', lg: '90px', xl: '90px', '2xl': '80px' }}
            top={{ base: '45px', sm: '45px', md: '45px', lg: '115px', xl: '115px', '2xl': '115px' }}
            background="#FFFFFF"
            borderRadius={{
              base: '3.5px',
              sm: '3.5px',
              md: '3.5px',
              lg: '8px',
              xl: '8px',
              '2xl': '8px',
            }}
            alignItems="center"
            padding={{
              base: '3px 8px',
              sm: '3px 8px',
              md: '3px 8px',
              lg: '6px 16px',
              xl: '6px 16px',
              '2xl': '6px 16px',
            }}
            zIndex={3}
          >
            <Text
              fontSize={{
                base: '6px',
                sm: '6px',
                md: '6px',
                lg: '12px',
                xl: '12px',
                '2xl': '12px',
              }}
              fontFamily="Satoshi"
              fontWeight="bold"
            >
              255k+ Enrolled Students
            </Text>

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
          </Flex>

          <Image
            src="/assets/images/lady-whiteboard.jpeg"
            alt="lady facing a whiteboard"
            width={{
              base: '174px',
              sm: '174px',
              md: '174px',
              lg: '360px',
              xl: '360px',
              '2xl': '360px',
            }}
            height={{
              base: '116px',
              sm: '116px',
              md: '116px',
              lg: '250px',
              xl: '250px',
              '2xl': '250px',
            }}
            position="absolute"
            left="0"
            top={{
              base: '136.49px',
              sm: '136.49px',
              md: '136.49px',
              lg: '297px',
              xl: '297px',
              '2xl': '297px',
            }}
            border={{
              base: '2.19178px solid #5588CC',
              sm: '2.19178px solid #5588CC',
              md: '2.19178px solid #5588CC',
              lg: '4px solid #5588CC',
              xl: '4px solid #5588CC',
              '2xl': '4px solid #5588CC',
            }}
            borderRadius="8px"
            zIndex={4}
          />

          <Image
            src="/assets/vectors/blue-splash.svg"
            alt="blue splash image"
            position="absolute"
            top={{
              base: '110.59px',
              sm: '110.59px',
              md: '110.59px',
              lg: '295px',
              xl: '295px',
              '2xl': '295px',
            }}
            left={{
              base: '287.67px',
              sm: '287.67px',
              md: '287.67',
              lg: '603px',
              xl: '603px',
              '2xl': '580px',
            }}
            zIndex={1}
          />

          <Image
            src="/assets/vectors/purple-circle.svg"
            alt="purple circle"
            position="absolute"
            top={{
              base: '255px',
              sm: '255px',
              md: '255px',
              lg: '540px',
              xl: '540px',
              '2xl': '540px',
            }}
            left={{
              base: '260px',
              sm: '260px',
              md: '260px',
              lg: '520px',
              xl: '520px',
              '2xl': '520px',
            }}
          />
        </Box>
      </Flex>

      <Box
        display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none', '2xl': 'none' }}
      >
        <Image
          src="/assets/vectors/green-zigzag.svg"
          alt="green zigzag"
          position="absolute"
          top={{ base: '200px', sm: '200px', md: '200px', lg: '30px', xl: '30px', '2xl': '30px' }}
          right="0"
        />
      </Box>

      <Box
        display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
      >
        <Image
          src="/assets/vectors/green-zigzag-desktop.svg"
          alt="green zigzag"
          position="absolute"
          top={{ base: '225px', sm: '225px', md: '225px', lg: '30px', xl: '30px', '2xl': '30px' }}
          right="0"
        />
      </Box>

      <Box
        display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none', '2xl': 'none' }}
      >
        <Image
          src="/assets/vectors/light-purple-half-circle.svg"
          alt="purple half circle"
          position="absolute"
          top="350px"
          right="0"
        />
      </Box>

      <Box
        display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
      >
        <Image
          src="/assets/vectors/light-purple-half-circle-desktop.svg"
          alt="purple half circle"
          position="absolute"
          top="350px"
          right="0"
        />
      </Box>
    </Flex>
  );
};

export default HighQualitySection;
