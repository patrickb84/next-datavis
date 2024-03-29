import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import { ThemeProvider } from './components/theme-provider';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Data Vis',
  description: 'Application for data visualization project.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <Navbar />
          <main className="w-full mx-auto px-4 pb-16 pt-6 dark:bg-black">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
