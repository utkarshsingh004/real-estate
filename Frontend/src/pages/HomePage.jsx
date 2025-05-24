import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaSearch, FaBuilding, FaHome, FaMapMarkedAlt, FaRegCalendarAlt, FaCheck } from 'react-icons/fa'
import PropertyCard from '../components/properties/PropertyCard'
import { featuredProperties } from '../data/properties'
import HeroSearchForm from '../components/home/HeroSearchForm'
import TestimonialSlider from '../components/home/TestimonialSlider'

const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section 
        className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'
        }}
      >
        <div className="container-custom text-center text-white z-10">
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Find Your Dream Home with <span className="text-secondary-400">Apna Ghar</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-neutral-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Discover the perfect property that fits all your needs with our extensive listings and personalized search tools.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 max-w-5xl mx-auto"
          >
            <HeroSearchForm />
          </motion.div>
        </div>
      </section>
      
      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Featured Properties
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Explore our handpicked selection of premier properties, each offering exceptional value and unique features to match your lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.slice(0, 6).map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/properties" className="btn-primary">
              View All Properties
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-20 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              We offer comprehensive real estate services tailored to meet your unique needs, ensuring a smooth experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FaBuilding className="text-primary-600 text-4xl mb-4" />,
                title: 'Property Management',
                description: 'Complete property management solutions for landlords and property investors.'
              },
              {
                icon: <FaHome className="text-primary-600 text-4xl mb-4" />,
                title: 'Buying & Selling',
                description: 'Expert guidance throughout the buying and selling process for a seamless experience.'
              },
              {
                icon: <FaMapMarkedAlt className="text-primary-600 text-4xl mb-4" />,
                title: 'Property Consultation',
                description: 'Professional advice on property investments, valuations, and market trends.'
              },
              {
                icon: <FaRegCalendarAlt className="text-primary-600 text-4xl mb-4" />,
                title: 'Property Tours',
                description: 'Virtual and in-person property viewings scheduled at your convenience.'
              },
              {
                icon: <FaSearch className="text-primary-600 text-4xl mb-4" />,
                title: 'Custom Property Search',
                description: 'Personalized property searches based on your specific requirements and preferences.'
              },
              {
                icon: <FaCheck className="text-primary-600 text-4xl mb-4" />,
                title: 'Legal Assistance',
                description: 'Comprehensive legal support for all property-related documentation and processes.'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {service.icon}
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-neutral-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section 
        className="py-20 bg-cover bg-center text-white"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(30, 64, 175, 0.9), rgba(30, 64, 175, 0.9)), url(https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'
        }}
      >
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Dream Home?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Let us help you navigate the real estate market and find the perfect property that meets all your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/properties" className="btn-secondary">
              Browse Properties
            </Link>
            <Link to="/contact" className="bg-white text-primary-800 hover:bg-neutral-100 font-medium py-3 px-6 rounded-lg transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Hear from our satisfied customers about their experiences working with Apna Ghar.
            </p>
          </div>
          
          <TestimonialSlider />
        </div>
      </section>
      
      {/* Stats */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '1200+', label: 'Properties Sold' },
              { value: '950+', label: 'Happy Clients' },
              { value: '25+', label: 'Years Experience' },
              { value: '40+', label: 'Expert Agents' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-800 mb-2">{stat.value}</div>
                <div className="text-neutral-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage