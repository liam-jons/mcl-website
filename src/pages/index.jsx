import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Neurodiversity from '../components/sections/Neurodiversity';
import Contact from '../components/sections/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mason Consulting Limited - IT Services with a Neurodiversity Focus</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Mason Consulting Limited delivers exceptional IT services with a commitment that at least 50% of our technical staff are neurodivergent." />
      </Head>
      
      <Layout>
        <Hero />
        <About />
        <Services />
        <Neurodiversity />
        <Contact />
      </Layout>
    </>
  );
}
