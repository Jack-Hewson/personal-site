# personal-site

A modern Next.js project for building your personal website with full TypeScript support.

## Project Setup

This project uses:
- **Next.js 14** — React framework with built-in routing and optimizations
- **React 18** — UI library
- **TypeScript** — Type safety across the entire codebase
- **Material-UI (MUI)** — Component library for styling and UI
- **Tailwind CSS** — Utility-first CSS framework (works alongside MUI)
- **ESLint** — Code quality and linting
- **Prettier** — Code formatting

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will open automatically at http://localhost:3000 with hot module replacement (HMR).

3. **Build for production:**
   ```bash
   npm run build
   npm start
   ```
   Creates an optimized build in the `.next/` folder.

## Development Tools

- **Linting:** `npm run lint` — Check code quality
- **Formatting:** `npm run format` — Auto-format code with Prettier

## Routing

Next.js uses the App Router with file-based routing. The project structure:

- `app/layout.tsx` — Root layout (navbar, metadata)
- `app/page.tsx` — Home page (`/`)
- `app/about/page.tsx` — About page (`/about`)

### Adding New Routes

1. Create a new directory under `app/`:
   ```bash
   mkdir app/contact
   ```

2. Create a `page.tsx` file:
   ```tsx
   // app/contact/page.tsx
   export default function Contact() {
     return (
       <div>
         <h1>Contact Me</h1>
       </div>
     )
   }
   ```

3. Add a navigation link in `app/layout.tsx`:
   ```tsx
   <Link href="/contact" className="text-white hover:text-blue-400 transition-colors">
     Contact
   </Link>
   ```

For more on routing, see the [Next.js documentation](https://nextjs.org/docs/app/building-your-application/routing).

## Components with Material-UI

Material-UI is set up with a dark theme and ready to use. Components are wrapped with the MUI theme provider automatically. Use MUI components for consistent styling:

```tsx
'use client'

import { Box, Button, Card, Typography } from '@mui/material'

export default function MyComponent() {
  return (
    <Card sx={{ p: 2, mb: 2 }}>
      <Typography variant="h5" sx={{ mb: 1 }}>
        Card Title
      </Typography>
      <Button variant="contained" color="primary">
        Click me
      </Button>
    </Card>
  )
}
```

Key MUI components:
- `Box` — Low-level layout component
- `Button` — Interactive buttons
- `Card`, `Paper` — Containers with elevation
- `Typography` — Text styling
- `TextField` — Input fields
- `AppBar`, `Toolbar` — Navigation
- `Container` — Max-width wrapper

For more components and examples, see the [MUI documentation](https://mui.com/material-ui/getting-started/).

## Styling

You can style components using **Material-UI components** or **Tailwind CSS utilities**:

### Material-UI (Recommended for Components)

```tsx
'use client'

import { Box, Button } from '@mui/material'

export default function Component() {
  return (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button variant="contained">Primary</Button>
      <Button variant="outlined">Secondary</Button>
    </Box>
  )
}
```

### Tailwind CSS (Recommended for Utilities)

```tsx
export default function Component() {
  return (
    <div className="flex gap-2">
      <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Button
      </button>
    </div>
  )
}
```

Both can be used together seamlessly. MUI provides components with theming, while Tailwind is great for quick layout adjustments.