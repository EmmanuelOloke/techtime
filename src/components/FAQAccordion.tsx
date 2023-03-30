import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

import { accordions } from '../../public/data/accordionData';

const FAQAccordion = () => {
  return (
    <Accordion
      allowMultiple
      width={{
        base: '24.625rem',
        sm: '24.625rem',
        md: '24.625rem',
        lg: '64.813rem',
        xl: '64.813rem',
        '2xl': '64.813rem',
      }}
      gap="24px"
    >
      {accordions.map((accordion) => (
        <AccordionItem
          pt={4}
          pb={1}
          borderTop="none"
          borderBottom="0.3px solid #EAEAEA"
          key={accordion.id}
        >
          {({ isExpanded }) => (
            <>
              <h2>
                <AccordionButton _expanded={{ color: '#004DB3' }} px={1}>
                  <Box
                    fontFamily="Satoshi Bold"
                    fontWeight="bolder"
                    fontSize={{
                      base: '0.875rem',
                      sm: '0.875rem',
                      md: '0.875rem',
                      lg: '1.5rem',
                      xl: '1.5rem',
                      '2xl': '1.5rem',
                    }}
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    {accordion.accordionTitle}
                  </Box>
                  {isExpanded ? (
                    <MinusIcon
                      fontSize={{
                        base: '0.5rem',
                        sm: '0.5rem',
                        md: '0.5rem',
                        lg: '1rem',
                        xl: '1rem',
                        '2xl': '1rem',
                      }}
                    />
                  ) : (
                    <AddIcon
                      fontSize={{
                        base: '0.5rem',
                        sm: '0.5rem',
                        md: '0.5rem',
                        lg: '1rem',
                        xl: '1rem',
                        '2xl': '1rem',
                      }}
                    />
                  )}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
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
                  base: '1rem',
                  sm: '1rem',
                  md: '1rem',
                  lg: '1.625rem',
                  xl: '1.625rem',
                  '2xl': '1.625rem',
                }}
                px={0}
              >
                {accordion.accordionText}
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default FAQAccordion;
