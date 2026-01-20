import { useState } from 'react'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-white hover:text-amber-400 transition-colors">
              KushHookah
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <a
                href="#home"
                className="text-gray-200 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
               Contact US 
              </a>
              <a
                href="#menu"
                className="text-gray-200 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Menu
              </a>
              <a
                href="#gallery"
                className="text-gray-200 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Gallery
              </a>
              <a
                href="#pricing"
                className="text-gray-200 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Pricing
              </a>
              <a
                href="#about"
                className="text-gray-200 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </a>
              <a
                href="Reservation"
                className="text-gray-200 hover:text-amber-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Reservation
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-amber-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-400"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 border-t border-gray-700">
            <a
              href="#home"
              className="text-gray-200 hover:text-amber-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#menu"
              className="text-gray-200 hover:text-amber-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu3456
            </a>
            <a
              href="#gallery"
              className="text-gray-200 hover:text-amber-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              href="#pricing"
              className="text-gray-200 hover:text-amber-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-gray-200 hover:text-amber-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="text-gray-200 hover:text-amber-400 block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Reservation
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
