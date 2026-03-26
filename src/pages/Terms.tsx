import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { BlurText } from '../components/BlurText';

export const Terms = () => {
  return (
    <PageTransition>
      <div className="pt-40 pb-24 px-6 md:px-16 lg:px-24 max-w-4xl mx-auto min-h-screen">
        <div className="mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">Legal</div>
          <BlurText text="Terms of Service" className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-8" />
          <p className="text-white/60 font-body font-light text-lg">Last updated: March 2026</p>
        </div>

        <div className="prose prose-invert prose-lg font-body font-light text-white/80 max-w-none">
          <p className="mb-6">
            These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Studio ("we," "us" or "our"), concerning your access to and use of our website and services.
          </p>
          
          <h2 className="text-2xl font-heading italic text-white mt-12 mb-4">1. Agreement to Terms</h2>
          <p className="mb-6">
            By accessing the website, you agree that you have read, understood, and agree to be bound by all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are expressly prohibited from using the site and you must discontinue use immediately.
          </p>

          <h2 className="text-2xl font-heading italic text-white mt-12 mb-4">2. Intellectual Property Rights</h2>
          <p className="mb-6">
            Unless otherwise indicated, the website is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us.
          </p>

          <h2 className="text-2xl font-heading italic text-white mt-12 mb-4">3. User Representations</h2>
          <p className="mb-6">
            By using the site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};
