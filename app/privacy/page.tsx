import Link from 'next/link';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div
        className="relative bg-cover bg-center bg-no-repeat h-96"
        style={{ backgroundImage: 'url(/assets/privacy_policy_bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          </div>
        </div>
      </div>

      <div className="py-12 px-4">
        <h2 className="text-3xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg mb-8">
          Digicraft ("we," "us," or "our") is committed to protecting the privacy and 
          security of your personal information. This privacy policy explains how we 
          collect, use, and protect your personal information when you visit our 
          website or use our services.
        </p>

        <h2 className="text-3xl font-semibold mb-4">What Information We Collect</h2>
        <p className="text-lg mb-8">
          We collect the following types of information:
        </p>
        <ul className="list-disc pl-4 mb-4">
          <li>Personal information, such as your name, email address, and phone number</li>
          <li>Device information, such as your IP address, browser type, and operating system</li>
          <li>Usage information, such as the pages you visit and the actions you take on our website</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4">How We Use Your Information</h2>
        <p className="text-lg mb-8">
          We use your information to:
        </p>
        <ul className="list-disc pl-4 mb-4">
          <li>Provide and improve our services</li>
          <li>Communicate with you about our services and respond to your inquiries</li>
          <li>Analyze website usage and improve our marketing efforts</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4">How We Share Your Information</h2>
        <p className="text-lg mb-8">
          We may share your information with:
        </p>
        <ul className="list-disc pl-4 mb-4">
          <li>Our service providers, such as hosting and analytics companies</li>
          <li>Law enforcement agencies, in response to a subpoena or court order</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4">How We Protect Your Information</h2>
        <p className="text-lg mb-8">
          We take the security of your information seriously and use appropriate measures to protect it, including:
        </p>
        <ul className="list-disc pl-4 mb-4">
          <li>Encryption</li>
          <li>Firewalls</li>
          <li>Secure servers</li>
          <li>Access controls</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4">Your Rights</h2>
        <p className="text-lg mb-8">
          You have the right to:
        </p>
        <ul className="list-disc pl-4 mb-4">
          <li>Access your information</li>
          <li>Correct your information</li>
          <li>Delete your information</li>
          <li>Object to our use of your information</li>
        </ul>

        <h2 className="text-3xl font-semibold mb-4">Changes to This Policy</h2>
        <p className="text-lg mb-8">
          We may update this policy from time to time. We will notify you of any changes by posting the updated policy on this page.
        </p>

        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="text-lg mb-8">
          If you have any questions or concerns about this policy, please contact us through our <Link href="/contact"> Contact page</Link>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;