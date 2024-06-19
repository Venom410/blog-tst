import Link from 'next/link';
import React from 'react';

const TermsAndConditions = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
          <p className="text-lg">Effective Date: 10th May 2024</p>
        </div>
      </section>

      {/* Content Section */}
      <div className="py-12 px-4 md:px-8 lg:px-16">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Welcome to Digicraft Technovision Pvt. Ltd.</h2>
          <p className="text-lg mb-8">
            These Terms of Service ("Terms") govern your use of our software as a service ("Service") provided by us. By accessing or using our Service, you agree to be bound by these Terms.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="text-lg mb-8">
            By accessing or using our Service, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. You also consent to the collection, use, and disclosure of your personal data as described in this Privacy Policy. If you do not agree with these Terms, you may not use the Service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">2. Eligibility</h2>
          <p className="text-lg mb-8">
            You must be at least 18 years old to use our Service. By using the Service, you represent and warrant that you meet this age requirement.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">3. Account Registration</h2>
          <p className="text-lg mb-4"><strong>a. Account Creation:</strong> To access certain features of our Service, you may need to register for an account. You must provide accurate and complete information during registration and keep your account information up-to-date.</p>
          <p className="text-lg mb-8"><strong>b. Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account login information and are fully responsible for all activities that occur under your account.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">4. Use of Service</h2>
          <p className="text-lg mb-4">You agree to use the Service only for lawful purposes and in accordance with these Terms. You must not:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Use the Service in any way that violates any applicable federal, state, local, or international law or regulation.</li>
            <li>Engage in any conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm us or users of the Service or expose them to liability.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">5. Intellectual Property Rights</h2>
          <p className="text-lg mb-8">
            The Service and its original content, features, and functionality are and will remain the exclusive property of Digicraft Technovision Pvt. Ltd. and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Digicraft Technovision Pvt. Ltd.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">6. Termination</h2>
          <p className="text-lg mb-8">
            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms. If you wish to terminate your account, you may simply discontinue using the Service.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">7. Limitation of Liability</h2>
          <p className="text-lg mb-4">In no event shall Digicraft Technovision Pvt. Ltd., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:</p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>Your use or inability to use the Service;</li>
            <li>Any unauthorized access to or use of our servers and/or any personal information stored therein;</li>
            <li>Any interruption or cessation of transmission to or from the Service;</li>
            <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through our Service by any third party;</li>
            <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, emailed, transmitted, or otherwise made available through the Service.</li>
          </ul>
          <p className="text-lg mb-8">
            By using the Services, you may encounter content or information that might be inaccurate, incomplete, delayed, misleading, illegal, offensive or otherwise harmful. Despite our best efforts, we cannot always prevent misuse of our Services, and you agree that we are not responsible for any such misuse.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">8. Governing Law</h2>
          <p className="text-lg mb-8">
            These Terms shall be governed and construed in accordance with the laws of India, without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">9. Changes to Terms</h2>
          <p className="text-lg mb-4"><strong>a.</strong> We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 10 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.</p>
          <p className="text-lg mb-8"><strong>b.</strong> We may modify the Terms, our Privacy Policy and our Cookies Policy from time to time. If we make material changes to it, we will provide you notice through our Services, or by other means, to provide you the opportunity to review the changes before they become effective. If you object to any changes, you may discontinue using our Services. Your continued use of our Services after we publish or send a notice about our changes to these terms means that you are consenting to the updated terms as of their effective date. What constitutes a material change will be determined at our sole discretion.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">10. Contact Us</h2>
          <p className="text-lg mb-8">
            If you have any questions about this Cookie Policy, please contact us:
          </p>
          <ul className="list-disc pl-6 mb-8 space-y-2">
            <li>By email: <Link href="mailto:hi@digicraft.ai" className="text-blue-500 hover:underline">hi@digicraft.ai</Link></li>
            <li>By visiting this page on our website: <Link href="https://www.digicraft.ai" className="text-blue-500 hover:underline">www.digicraft.ai</Link></li>
            <li>By phone number: +91 92679 40958</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditions;
