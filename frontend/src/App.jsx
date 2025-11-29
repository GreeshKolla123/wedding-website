import React from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div>
      <Head>
        <title>WedMagic</title>
      </Head>
      <Header />
      <Hero />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}