import { type Metadata } from 'next'
import {
  ClerkProvider,
  // SignInButton,
  // SignUpButton,
  // SignedIn,
  // SignedOut,
  // UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono, Outfit } from 'next/font/google'
import './globals.css'
import Head from 'next/head';
// import NavBar from '@/app/(landingpage)/_components/NavBar'

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// })

// const outfit = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// })

export const metadata = {
  title: "Brokacars Dashboard",
  description: "Comfortable rides with Brokacars.",
  openGraph: {
    title: "Brokacars Dashboard",
    description: "Best Prices and Comfortable rides with Brokacars.",
    url: "https://brokacars.vercel.app/dashboard",
    siteName: "Brokacars",
    images: [
      {
        url: "https://brokacars.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brokacars dashboard preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brokacars Dashboard",
    description: "Comfortable rides with Brokacars.",
    images: ["https://brokacars.vercel.app/og-image.png"],
  },
};

<Head>
  <title>Brokacars Dashboard</title>
  <meta property="og:title" content="Brokacars Dashboard" />
  <meta property="og:description" content="Comfortable drives with Brokacars." />
  <meta property="og:image" content="https://brokacars.vercel.app/og-image.jpg" />
  <meta property="og:url" content="https://brokacars.vercel.app/dashboard" />
  <meta name="twitter:card" content="summary_large_image" />
</Head>

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body >
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}