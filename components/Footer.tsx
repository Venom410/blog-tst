import Link from 'next/link';
import { FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <p className="mb-4 md:mb-0">© 2024 DigiCraft. All rights reserved</p>
        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          <li>
            <Link href="/terms" className="hover:underline">Terms of Service</Link>
          </li>
          <li>
            <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/careers" className="hover:underline">Careers</Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/company/digicraft-ai/mycompany/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline flex items-center">
              <FaLinkedin className="mr-1" />
              LinkedIn
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
