'use client'

import { Typography, Paper } from '@mui/material'

export default function Home() {
  return (
    <Paper sx={{ p: 4, backgroundColor: 'background.paper' }}>
      <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 'bold' }}>
        Welcome Home
      </Typography>
      <Typography variant="body1" sx={{ fontSize: '1.125rem' }}>
        This is the home page of your personal site. Built with Next.js, TypeScript, Material-UI, and Tailwind CSS.
      </Typography>
    </Paper>
  )
}
