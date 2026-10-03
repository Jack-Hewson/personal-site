import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './views/Home'
import About from './views/About'
import NotFound from './views/NotFound'
import './App.css'

function AppContent(): React.ReactNode {
  return (
    <>
      <nav className="bg-slate-900 border-b border-blue-500 mb-8">
        <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300">
            Personal Site
          </Link>
          <ul className="flex gap-8 list-none m-0 p-0">
            <li>
              <Link to="/" className="text-white hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-blue-400 transition-colors">
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

function App(): React.ReactNode {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

export default App
