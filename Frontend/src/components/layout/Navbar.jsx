import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 80) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    // Close mobile menu when navigating
    setIsOpen(false)
    // Prevent scrolling when mobile menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [location.pathname, isOpen])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  const headerClass = isHomePage 
    ? `fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`
    : 'sticky top-0 w-full z-50 bg-white shadow-md py-4'

  const linkClass = isHomePage && !scrolled 
    ? 'text-white hover:text-secondary-300' 
    : 'text-neutral-800 hover:text-primary-700'

  return (
    <header className={headerClass}>
      <div className="container-custom flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/src/assets/logo.svg" 
            alt="Apna Ghar Logo" 
            className="h-10" 
          />
        </Link>
        
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`${linkClass} font-medium transition-colors`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/properties" 
            className="btn-primary"
          >
            Find a Home
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FaTimes className={isHomePage && !scrolled ? "text-white" : "text-neutral-800"} />
          ) : (
            <FaBars className={isHomePage && !scrolled ? "text-white" : "text-neutral-800"} />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white w-full shadow-lg"
          >
            <div className="container-custom py-6 flex flex-col space-y-4">
              {navLinks.map(link => (
                <Link 
                  key={link.name}
                  to={link.path} 
                  className="text-neutral-800 font-medium py-2 hover:text-primary-700 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                to="/properties" 
                className="btn-primary text-center mt-4"
              >
                Find a Home
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Navbar