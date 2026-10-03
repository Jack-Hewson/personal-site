import type { Metadata } from 'next'
import { Container } from '@mui/material'
import MUIProvider from './providers'
import Navbar from './components/Navbar'
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
        <MUIProvider>
          <Navbar />
          <Container maxWidth="lg" sx={{ py: 6 }}>
            {children}
          </Container>
        </MUIProvider>
      </body>
    </html>
  )
}
