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
    width: '10.375rem',
    height: '3.375rem',
    fontSize: '1rem',
  };

  const primaryButtonPropsMobile: PrimaryButtonType = {
    text: 'View Courses',
    link: '#',
    color: 'white',
    bgColor: '#004DB3',
    width: '5.188rem',
    height: '1.688rem',
    fontSize: '0.5rem',
  };

  const avatarPropsMobile: AvatarWidth = {
    width: '1.438rem',
    height: '1.438rem',
  };

  const avatarPropsDesktop: AvatarWidth = {
    width: '2.25rem',
    height: '2.25rem',
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
      height="41.625rem"
      position="relative"
      gap={{ base: '1.5rem', sm: '1.5rem', md: '1.5rem', lg: '0', xl: '0', '2xl': '0' }}
      paddingTop={{ lg: '3.75rem', xl: '3.75rem', '2xl': '3.75rem' }}
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
        gap={{ base: '1.5rem', sm: '1.5rem', md: '1.5rem' }}
      >
        <Flex
          flexDirection="column"
          marginTop={{ lg: '1.875rem', xl: '1.875rem', '2xl': '1.875rem' }}
          alignItems={{
            base: 'center',
            sm: 'center',
            md: 'center',
            lg: 'flex-start',
            xl: 'flex-start',
            '2xl': 'flex-start',
          }}
          gap="1rem"
        >
          <Box>
            <Image
              src="/assets/text-crown.svg"
              alt="text crown"
              position="absolute"
              top={{
                base: '2.2rem',
                sm: '2.2rem',
                md: '2.2rem',
                lg: '5rem',
                xl: '5rem',
                '2xl': '5rem',
              }}
              left={{
                base: '0.375rem',
                sm: '0.375rem',
                md: '0.375rem',
                lg: '6.25rem',
                xl: '6.375rem',
                '2xl': '22.75rem',
              }}
            />
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
              width={{ lg: '43.375rem', xl: '43.375rem', '2xl': '43.375rem' }}
              textAlign={{ base: 'center', sm: 'center', md: 'center', lg: 'left', '2xl': 'left' }}
              color="#000F24"
              lineHeight={{ xl: '4.375rem' }}
            >
              High quality video, audio & live classes
            </Text>
          </Box>

          <Text
            fontFamily="Satoshi"
            color="#A1A1A1"
            fontSize={{
              base: '0.5rem',
              sm: '0.5rem',
              md: '0.5rem',
              lg: '1rem',
              xl: '1rem',
              '2xl': '1rem',
            }}
            lineHeight={{
              base: '0.962rem',
              sm: '0.962rem',
              md: '0.962rem',
              lg: '1.75rem',
              xl: '1.75rem',
              '2xl': '1.75rem',
            }}
            width={{
              base: '20.753rem',
              sm: '20.753rem',
              md: '20.753rem',
              lg: '37.75rem',
              xl: '37.75rem',
              '2xl': '37.75rem',
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
              base: '17.336rem',
              sm: '17.336rem',
              md: '17.336rem',
              lg: '30.75rem',
              xl: '30.75rem',
              '2xl': '30.75rem',
            }}
            flexDirection="column"
            gap={{
              base: '0.824rem',
              sm: '0.824rem',
              md: '0.824rem',
              lg: '1.5rem',
              xl: '1.5rem',
              '2xl': '1.5rem',
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
                base: '0.824rem',
                sm: '0.824rem',
                md: '0.824rem',
                lg: '1.5rem',
                xl: '1.5rem',
                '2xl': '1.5rem',
              }}
            >
              <Flex
                background="#FFFFFF"
                borderRadius={{
                  base: '0.25rem',
                  sm: '0.25rem',
                  md: '0.25rem',
                  lg: '0.5rem',
                  xl: '0.5rem',
                  '2xl': '0.5rem',
                }}
                width={{
                  base: '8.099rem',
                  sm: '8.099rem',
                  md: '8.099rem',
                  lg: '14.5rem',
                  xl: '14.5rem',
                  '2xl': '14.5rem',
                }}
                padding={{
                  base: '0.5rem 2rem 0.5rem 1rem',
                  sm: '0.5rem 2rem 0.5rem 1rem',
                  md: '0.5rem 2rem 0.5rem 1rem',
                  lg: '1.25rem 3.5rem 1.25rem 1.5rem',
                  xl: '1.25rem 3.5rem 1.25rem 1.5rem',
                  '2xl': '1.25rem 3.5rem 1.25rem 1.5rem',
                }}
                gap={{
                  base: '0.5rem',
                  sm: '0.5rem',
                  md: '0.5rem',
                  lg: '1rem',
                  xl: '1rem',
                  '2xl': '1rem',
                }}
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
                    base: '1.099rem',
                    sm: '1.099rem',
                    md: '1.099rem',
                    lg: '2rem',
                    xl: '2rem',
                    '2xl': '2rem',
                  }}
                />
                <Text
                  fontFamily="Satoshi Bold"
                  fontWeight="bold"
                  fontSize={{
                    base: '0.5rem',
                    sm: '0.5rem',
                    md: '0.5rem',
                    lg: '1rem',
                    xl: '1rem',
                    '2xl': '1rem',
                  }}
                >
                  Live Classes
                </Text>
              </Flex>
            </Flex>

            <Flex
              gap={{
                base: '0.824rem',
                sm: '0.824rem',
                md: '0.824rem',
                lg: '1.5rem',
                xl: '1.5rem',
                '2xl': '1.5rem',
              }}
            >
              <Flex
                background="#FFFFFF"
                borderRadius={{
                  base: '0.25rem',
                  sm: '0.25rem',
                  md: '0.25rem',
                  lg: '0.5rem',
                  xl: '0.5rem',
                  '2xl': '0.5rem',
                }}
                width={{
                  base: '9.162rem',
                  sm: '9.162rem',
                  md: '9.162rem',
                  lg: '16.313rem',
                  xl: '16.313rem',
                  '2xl': '16.313rem',
                }}
                padding={{
                  base: '0.5rem 2rem 0.5rem 1rem',
                  sm: '0.5rem 2rem 0.5rem 1rem',
                  md: '0.5rem 2rem 0.5rem 1rem',
                  lg: '1.25rem 3.5rem 1.25rem 1.5rem',
                  xl: '1.25rem 3.5rem 1.25rem 1.5rem',
                  '2xl': '1.25rem 3.5rem 1.25rem 1.5rem',
                }}
                gap={{
                  base: '0.5rem',
                  sm: '0.5rem',
                  md: '0.5rem',
                  lg: '1rem',
                  xl: '1rem',
                  '2xl': '1rem',
                }}
                alignItems="center"
              >
                <Image
                  src="/assets/icons/recorded-classes-icon.svg"
                  alt="recorded classes icon"
                  width={{
                    base: '1.099rem',
                    sm: '1.099rem',
                    md: '1.099rem',
                    lg: '2rem',
                    xl: '2rem',
                    '2xl': '2rem',
                  }}
                />
                <Text
                  fontFamily="Satoshi Bold"
                  fontWeight="bold"
                  fontSize={{
                    base: '0.5rem',
                    sm: '0.5rem',
                    md: '0.5rem',
                    lg: '1rem',
                    xl: '1rem',
                    '2xl': '1rem',
                  }}
                >
                  Recorded Classes
                </Text>
              </Flex>

              <Flex
                background="#FFFFFF"
                borderRadius={{
                  base: '0.25rem',
                  sm: '0.25rem',
                  md: '0.25rem',
                  lg: '0.5rem',
                  xl: '0.5rem',
                  '2xl': '0.5rem',
                }}
                width={{
                  base: '7.349rem',
                  sm: '7.349rem',
                  md: '7.349rem',
                  lg: '13.563rem',
                  xl: '13.563rem',
                  '2xl': '13.563rem',
                }}
                padding={{
                  base: '0.5rem 2rem 0.5rem 1rem',
                  sm: '0.5rem 2rem 0.5rem 1rem',
                  md: '0.5rem 2rem 0.5rem 1rem',
                  lg: '1.25rem 3.5rem 1.25rem 1.5rem',
                  xl: '1.25rem 3.5rem 1.25rem 1.5rem',
                  '2xl': '1.25rem 3.5rem 1.25rem 1.5rem',
                }}
                gap={{
                  base: '0.5rem',
                  sm: '0.5rem',
                  md: '0.5rem',
                  lg: '1rem',
                  xl: '1rem',
                  '2xl': '1rem',
                }}
                alignItems="center"
              >
                <Image
                  src="/assets/icons/notes-icon.svg"
                  alt="notes icon"
                  width={{
                    base: '1.099rem',
                    sm: '1.099rem',
                    md: '1.099rem',
                    lg: '2rem',
                    xl: '2rem',
                    '2xl': '2rem',
                  }}
                />
                <Text
                  fontFamily="Satoshi Bold"
                  fontWeight="bold"
                  fontSize={{
                    base: '0.5rem',
                    sm: '0.5rem',
                    md: '0.5rem',
                    lg: '1rem',
                    xl: '1rem',
                    '2xl': '1rem',
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
            base: '22.055rem',
            sm: '22.055rem',
            md: '22.055rem',
            lg: '50.313rem',
            xl: '50.313rem',
            '2xl': '50.313rem',
          }}
          height={{
            base: '15.854rem',
            sm: '15.854rem',
            md: '15.854rem',
            lg: '38.875rem',
            xl: '38.875rem',
            '2xl': '38.875rem',
          }}
          position="relative"
          left={{
            base: '1.25rem',
            sm: '1.25rem',
            md: '1.25rem',
            lg: '-6.25rem',
            xl: '-6.25rem',
            '2xl': '-6.25rem',
          }}
        >
          <Image
            src="/assets/images/headset-macbook.jpeg"
            alt="man with headset and macbook"
            width={{
              base: '16.563rem',
              sm: '16.563rem',
              md: '16.563rem',
              lg: '30rem',
              xl: '30rem',
              '2xl': '30rem',
            }}
            objectFit="cover"
            height={{
              base: '12.125rem',
              sm: '12.125rem',
              md: '12.125rem',
              lg: '25.75rem',
              xl: '25.75rem',
              '2xl': '25.75rem',
            }}
            position="absolute"
            left={{
              base: '5.452rem',
              sm: '5.452rem',
              md: '5.452rem',
              lg: '12.438rem',
              xl: '12.438rem',
              '2xl': '12.438rem',
            }}
            border={{
              base: '0.247rem solid #5588CC',
              sm: '0.247rem solid #5588CC',
              md: '0.247rem solid #5588CC',
              lg: '0.313rem solid #5588CC',
              xl: '0.313rem solid #5588CC',
              '2xl': '0.313rem solid #5588CC',
            }}
            borderRadius="0.5rem"
            zIndex={2}
          />

          <Flex
            flexDirection="column"
            position="absolute"
            left={{
              base: '2.188rem',
              sm: '2.188rem',
              md: '2.188rem',
              lg: '5.625rem',
              xl: '5.625rem',
              '2xl': '5rem',
            }}
            top={{
              base: '2.813rem',
              sm: '2.813rem',
              md: '2.813rem',
              lg: '7.188rem',
              xl: '7.188rem',
              '2xl': '7.188rem',
            }}
            background="#FFFFFF"
            borderRadius={{
              base: '0.219rem',
              sm: '0.219rem',
              md: '0.219rem',
              lg: '0.5rem',
              xl: '0.5rem',
              '2xl': '0.5rem',
            }}
            alignItems="center"
            padding={{
              base: '0.188rem 0.5rem',
              sm: '0.188rem 0.5rem',
              md: '0.188rem 0.5rem',
              lg: '0.375rem 1rem',
              xl: '0.375rem 1rem',
              '2xl': '0.375rem 1rem',
            }}
            zIndex={3}
          >
            <Text
              fontSize={{
                base: '6px',
                sm: '6px',
                md: '6px',
                lg: '0.75rem',
                xl: '0.75rem',
                '2xl': '0.75rem',
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
              base: '10.875rem',
              sm: '10.875rem',
              md: '10.875rem',
              lg: '22.5rem',
              xl: '22.5rem',
              '2xl': '22.5rem',
            }}
            height={{
              base: '7.25rem',
              sm: '7.25rem',
              md: '7.25rem',
              lg: '15.625rem',
              xl: '15.625rem',
              '2xl': '15.625rem',
            }}
            position="absolute"
            left="0"
            top={{
              base: '8.531rem',
              sm: '8.531rem',
              md: '8.531rem',
              lg: '18.563rem',
              xl: '18.563rem',
              '2xl': '18.563rem',
            }}
            border={{
              base: '0.137rem solid #5588CC',
              sm: '0.137rem solid #5588CC',
              md: '0.137rem solid #5588CC',
              lg: '0.25rem solid #5588CC',
              xl: '0.25rem solid #5588CC',
              '2xl': '0.25rem solid #5588CC',
            }}
            borderRadius="0.5rem"
            zIndex={4}
          />

          <Image
            src="/assets/vectors/blue-splash.svg"
            alt="blue splash image"
            position="absolute"
            top={{
              base: '6.912rem',
              sm: '6.912rem',
              md: '6.912rem',
              lg: '18.438rem',
              xl: '18.438rem',
              '2xl': '18.438rem',
            }}
            left={{
              base: '17.979rem',
              sm: '17.979rem',
              md: '17.979rem',
              lg: '37.688rem',
              xl: '37.688rem',
              '2xl': '35rem',
            }}
            zIndex={1}
          />

          <Image
            src="/assets/vectors/purple-circle.svg"
            alt="purple circle"
            position="absolute"
            top={{
              base: '15.938rem',
              sm: '15.938rem',
              md: '15.938rem',
              lg: '33.75rem',
              xl: '33.75rem',
              '2xl': '33.75rem',
            }}
            left={{
              base: '16.25rem',
              sm: '16.25rem',
              md: '16.25rem',
              lg: '32.5rem',
              xl: '32.5rem',
              '2xl': '32.5rem',
            }}
          />
        </Box>
      </Flex>

      <Image
        display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none', '2xl': 'none' }}
        src="/assets/vectors/green-zigzag.svg"
        alt="green zigzag"
        position="absolute"
        top={{
          base: '12.5rem',
          sm: '12.5rem',
          md: '12.5rem',
          lg: '1.875rem',
          xl: '1.875rem',
          '2xl': '1.875rem',
        }}
        right="0"
      />

      <Image
        display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
        src="/assets/vectors/green-zigzag-desktop.svg"
        alt="green zigzag"
        position="absolute"
        top={{
          base: '14.063rem',
          sm: '14.063rem',
          md: '14.063rem',
          lg: '1.875rem',
          xl: '1.875rem',
          '2xl': '1.875rem',
        }}
        right="0"
      />

      <Image
        display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none', xl: 'none', '2xl': 'none' }}
        src="/assets/vectors/light-purple-half-circle.svg"
        alt="purple half circle"
        position="absolute"
        top="21.875rem"
        right="0"
      />

      <Image
        display={{ base: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex', '2xl': 'flex' }}
        src="/assets/vectors/light-purple-half-circle-desktop.svg"
        alt="purple half circle"
        position="absolute"
        top="21.875rem"
        right="0"
      />
    </Flex>
  );
};

export default HighQualitySection;
