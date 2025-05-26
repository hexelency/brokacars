import { type Metadata } from 'next'
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Geist, Geist_Mono, Outfit } from 'next/font/google'
import './globals.css'
import NavBar from '@/app/(landingpage)/_components/NavBar'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const outfit = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "brokacars",
  description: 'comfortable drives',
}

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