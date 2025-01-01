import React from 'react';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css'; // Import global styles
import { Inter } from 'next/font/google'; // Import the Inter font

// Load the Inter font with desired weights and subsets
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap', // Ensures fast font swapping
});

export const metadata = {
  title: 'Jobzest',
  icons: {
    icon: '/jobzestlogo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}> {/* Apply the Inter font globally */}
      <body className="flex bg-white flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
