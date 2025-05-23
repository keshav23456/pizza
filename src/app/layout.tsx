import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import ToastProvider from '@/components/ToastProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pizza Dashboard - Modern Order Management',
  description: 'Professional dashboard for pizza order management with Google authentication',
  keywords: 'pizza, dashboard, orders, management, nextjs, react',
  authors: [{ name: 'Pizza Dashboard Team' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
          :root {
            --toast-bg: #ffffff;
            --toast-color: #374151;
          }
          
          .dark {
            --toast-bg: #1f2937;
            --toast-color: #f9fafb;
          }
        `}</style>
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <ToastProvider />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}