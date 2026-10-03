'use client'

import { AppBar, Toolbar, Container, Button, Box } from '@mui/material'
import Link from 'next/link'

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Link href="/" style={{ textDecoration: 'none' }}>
            <Box sx={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'inherit' }}>
              Personal Site
            </Box>
          </Link>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="/" style={{ textDecoration: 'none' }}>
              <Button color="inherit" sx={{ '&:hover': { opacity: 0.8 } }}>
                Home
              </Button>
            </Link>
            <Link href="/about" style={{ textDecoration: 'none' }}>
              <Button color="inherit" sx={{ '&:hover': { opacity: 0.8 } }}>
                About
              </Button>
            </Link>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  )
}
