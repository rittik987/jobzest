'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-slate-400 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4 gap-8">
        {/* About Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">Jobzest</h2>
          <p className="text-sm">
            Empowering job seekers with the best opportunities and providing companies with top talent. 
            Your journey to the right job starts here.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-200">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-200">About Us</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-200">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-200">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <p>Email: <a href="mailto:support@jobzest.com" className="hover:text-blue-200">contact@jobzest.com</a></p>
            </li>
            <li>
              <p>Phone: <a href="tel:+1234567890" className="hover:text-blue-200">+91 8040 235 1274</a></p>
            </li>
            <li>
              <p>Address: Bangalore, Bagalur, India</p>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 border-t border-black pt-4 text-center">
        <p>© 2024 Jobzest. All rights reserved.&nbsp;Developed with &lt;3 by Jobzest.</p>
      </div>
    </footer>
  );
};

export default Footer;
