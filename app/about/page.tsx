'use client'

import { Container, Typography, Paper } from '@mui/material'
import Navbar from '../components/Navbar'

export default function About() {
  return (
    <>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Paper sx={{ p: 4, backgroundColor: 'background.paper' }}>
          <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
            About
          </Typography>
          <Typography variant="body1" sx={{ fontSize: '1.125rem' }}>
            Tell your story here. This page is located at app/about/page.tsx.
          </Typography>
        </Paper>
      </Container>
    </>
  )
}
