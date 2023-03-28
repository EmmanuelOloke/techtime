import React from 'react';
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Box } from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

import { accordions } from '../../public/data/accordionData';

const FAQAccordion = () => {
  return (
    <Accordion allowMultiple width="394px" gap="24px">
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
                <AccordionButton _expanded={{ color: '#004DB3' }} px={0}>
                  <Box
                    fontFamily="Satoshi Bold"
                    fontWeight="bolder"
                    fontSize="14px"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    {accordion.accordionTitle}
                  </Box>
                  {isExpanded ? <MinusIcon fontSize="8px" /> : <AddIcon fontSize="8px" />}
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                fontFamily="Satoshi"
                color="#A1A1A1"
                fontSize="8px"
                lineHeight="16px"
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
