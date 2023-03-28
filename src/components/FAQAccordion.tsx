import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

const FAQAccordion = () => {
  return (
    <Accordion allowMultiple width="394px" gap="24px">
      <AccordionItem pb={1} borderTop="none">
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton _expanded={{ color: '#004DB3' }}>
                <Box
                  fontFamily="Satoshi Bold"
                  fontWeight="bolder"
                  fontSize="14px"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  Is there a free trial available?
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
            >
              High-defination video is video of higher resolution and quality than standard
              definition. high-defination video is video of higher resolution and quality than
              standard definition. hbuild your future with our quality education. the best and
              largest all-in-one online tutoring platform in the worldd definition.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem pt={4} pb={1}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton _expanded={{ color: '#004DB3' }}>
                <Box
                  fontFamily="Satoshi Bold"
                  fontWeight="bold"
                  fontSize="14px"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  Can I change my plan later?
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
            >
              High-defination video is video of higher resolution and quality than standard
              definition. high-defination video is video of higher resolution and quality than
              standard definition. hbuild your future with our quality education. the best and
              largest all-in-one online tutoring platform in the worldd definition.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem pt={4} pb={1}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton _expanded={{ color: '#004DB3' }}>
                <Box
                  fontFamily="Satoshi Bold"
                  fontWeight="bold"
                  fontSize="14px"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  Are the courses lifetime?
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
            >
              High-defination video is video of higher resolution and quality than standard
              definition. high-defination video is video of higher resolution and quality than
              standard definition. hbuild your future with our quality education. the best and
              largest all-in-one online tutoring platform in the worldd definition.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem pt={4} pb={1}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton _expanded={{ color: '#004DB3' }}>
                <Box
                  fontFamily="Satoshi Bold"
                  fontWeight="bold"
                  fontSize="14px"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  Do I Get Certified After Taking Courses?
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
            >
              High-defination video is video of higher resolution and quality than standard
              definition. high-defination video is video of higher resolution and quality than
              standard definition. hbuild your future with our quality education. the best and
              largest all-in-one online tutoring platform in the worldd definition.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem pt={4} pb={1}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton _expanded={{ color: '#004DB3' }}>
                <Box
                  fontFamily="Satoshi Bold"
                  fontWeight="bold"
                  fontSize="14px"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  How do I reach out to mentors?
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
            >
              High-defination video is video of higher resolution and quality than standard
              definition. high-defination video is video of higher resolution and quality than
              standard definition. hbuild your future with our quality education. the best and
              largest all-in-one online tutoring platform in the worldd definition.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>

      <AccordionItem pt={4} pb={1}>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton _expanded={{ color: '#004DB3' }}>
                <Box
                  fontFamily="Satoshi Bold"
                  fontWeight="bold"
                  fontSize="14px"
                  as="span"
                  flex="1"
                  textAlign="left"
                >
                  Do we get job ready after taking courses?
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
            >
              High-defination video is video of higher resolution and quality than standard
              definition. high-defination video is video of higher resolution and quality than
              standard definition. hbuild your future with our quality education. the best and
              largest all-in-one online tutoring platform in the worldd definition.
            </AccordionPanel>
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default FAQAccordion;
