import React from 'react'
import { Link } from 'react-router-dom'

function NotFound(): React.ReactNode {
  return (
    <div className="py-12 text-center">
      <h1 className="text-4xl font-bold mb-4 text-blue-400">404 - Page Not Found</h1>
      <p className="text-lg text-gray-300 mb-6">Sorry, the page you&apos;re looking for doesn&apos;t exist.</p>
      <Link to="/" className="inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">
        Go back to home
      </Link>
    </div>
  )
}

export default NotFound