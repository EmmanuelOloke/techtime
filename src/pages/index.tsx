import Head from 'next/head';
import { Box, Flex, HStack, Image } from '@chakra-ui/react';
import Hero from '@/components/Hero';
import Companies from '@/components/Companies';
import HighQualitySection from '@/components/HighQualitySection';
import WhyWeAreBest from '@/components/WhyWeAreBest';
import BrowseCourses from '@/components/BrowseCourses';
import ClientsFeedback from '@/components/ClientsFeedback';
import ReadyToConnect from '@/components/ReadyToConnect';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tech Time</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <Companies />

      <HighQualitySection />

      <WhyWeAreBest />

      <BrowseCourses />

      <ClientsFeedback />

      <ReadyToConnect />

      <FAQ />

      <Footer />
    </>
  );
}
