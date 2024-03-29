import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NextAuthProvider from "@/lib/Provider/NextAuthProvider";
import {ReactNode} from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Todo App',
}

export default function RootLayout({children}: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextAuthProvider>
        {children}
      </NextAuthProvider>
      </body>
    </html>
  )
}
