import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const Footer = () => {
  const year = new Date().getFullYear()
  
  return (
    <footer className="bg-neutral-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/src/assets/logo.svg" 
                alt="Apna Ghar Logo" 
                className="h-10" 
              />
            </Link>
            <p className="text-neutral-300 mb-6">
              Apna Ghar is your trusted partner in finding the perfect home. With years of experience and a dedication to client satisfaction, we make real estate simple.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-neutral-300 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-neutral-300 hover:text-white transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-neutral-300 hover:text-white transition-colors">
                  Featured Properties
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Property Types */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Property Types</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/properties" className="text-neutral-300 hover:text-white transition-colors">
                  Apartments
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-neutral-300 hover:text-white transition-colors">
                  Villas
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-neutral-300 hover:text-white transition-colors">
                  Penthouses
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-neutral-300 hover:text-white transition-colors">
                  Commercial
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-neutral-300 hover:text-white transition-colors">
                  Office Spaces
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-secondary-500 mt-1 mr-3 flex-shrink-0" />
                <p className="text-neutral-300">123 Real Estate Avenue, Mumbai, Maharashtra, 400001</p>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-secondary-500 mr-3 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-neutral-300 hover:text-white transition-colors">
                  +91 987 654 3210
                </a>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-secondary-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@apnaghar.com" className="text-neutral-300 hover:text-white transition-colors">
                  info@apnaghar.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom */}
        <div className="pt-8 border-t border-neutral-700 text-center md:flex md:justify-between md:items-center">
          <p className="text-neutral-400 mb-4 md:mb-0">
            &copy; {year} Apna Ghar. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-neutral-400">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer