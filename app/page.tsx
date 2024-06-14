"use client";

import Link from 'next/link';
import React, { useState } from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Title from '../components/Title';
import About from '../components/About';
import Domains from '../components/Domains';
import Technologies from '../components/Technologies';
import Clients from '../components/Clients';
import Founders from '../components/Founders';
import Contactus from '../components/Contactus';
import Videoplayer from '../components/Videoplayer';
import BlogCarousel from '../components/Blog/BlogCarousel';

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <Link href="/services"> 
          <Title subTitle="Our Services" title="What We Offer" />
        </Link>
        <Services />
        <About setPlayState={setPlayState} />
        <Link href="/domains"> 
          <Title subTitle="Our Domains" title="Where We Work" />
        </Link>
        <Domains />
        <Link href="/technologies"> 
          <Title subTitle="Our Technologies" title="What We Know" />
        </Link>
        <Technologies />
        <Title subTitle="Our Clients" title="More Than Just Tech, We Engineer Business Breakthroughs" />
        <Clients />
        <Link href="/blog">      
          <Title subTitle="Blogs" title="Read about the trends" />
        </Link>
        <BlogCarousel/>
        <Link href="/founders"> 
          <Title subTitle="Founders" title="Who Are They" />
        </Link>
        <Founders />
        <Link href="/contact"> 
          <Title subTitle="Contact Us" title="Get In Touch" />
        </Link>
        <Contactus />
      </main>
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
