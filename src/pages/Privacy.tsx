import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { BlurText } from '../components/BlurText';

export const Privacy = () => {
  return (
    <PageTransition>
      <div className="pt-40 pb-24 px-6 md:px-16 lg:px-24 max-w-4xl mx-auto min-h-screen">
        <div className="mb-16">
          <div className="liquid-glass rounded-full px-3.5 py-1 text-xs font-medium text-white font-body inline-block mb-6">Legal</div>
          <BlurText text="Privacy Policy" className="text-5xl md:text-6xl lg:text-7xl font-heading italic text-white tracking-tight leading-[0.9] mb-8" />
          <p className="text-white/60 font-body font-light text-lg">Last updated: March 2026</p>
        </div>

        <div className="prose prose-invert prose-lg font-body font-light text-white/80 max-w-none">
          <p className="mb-6">
            At Studio, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          
          <h2 className="text-2xl font-heading italic text-white mt-12 mb-4">1. Information We Collect</h2>
          <p className="mb-6">
            We may collect personal information that you voluntarily provide to us when expressing an interest in obtaining information about us or our products and services, when participating in activities on the website, or otherwise contacting us.
          </p>

          <h2 className="text-2xl font-heading italic text-white mt-12 mb-4">2. How We Use Your Information</h2>
          <p className="mb-6">
            We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
          </p>

          <h2 className="text-2xl font-heading italic text-white mt-12 mb-4">3. Contact Us</h2>
          <p className="mb-6">
            If you have questions or comments about this notice, you may email us at hello@studio.ai.
          </p>
        </div>
      </div>
    </PageTransition>
  );
};
