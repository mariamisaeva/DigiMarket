import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './_Components/Header';
import Footer from './_Components/Footer';
import './globals.css';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ClerkProvider>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton /> */}
        <Header />
        {children}
        <Footer />
        {/* </SignedIn>
        </ClerkProvider> */}
      </body>
    </html>
  );
}
