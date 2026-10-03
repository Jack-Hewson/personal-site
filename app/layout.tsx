import type { Metadata } from 'next'
import MUIProvider from './providers'
import './globals.css'

export const metadata: Metadata = {
  title: 'Personal Site',
  description: 'Welcome to my personal site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <MUIProvider>{children}</MUIProvider>
      </body>
    </html>
  )
}
