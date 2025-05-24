import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBed, FaBath, FaRulerCombined, FaMapMarkerAlt, FaRegCalendarAlt, FaPhone, FaEnvelope, FaCheck, FaArrowLeft, FaArrowRight, FaWhatsapp, FaShareAlt } from 'react-icons/fa'
import { getPropertyById, getRelatedProperties } from '../data/properties'
import PropertyCard from '../components/properties/PropertyCard'

const PropertyDetailPage = () => {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [relatedProperties, setRelatedProperties] = useState([])
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)
    
    // Simulate loading data from an API
    setLoading(true)
    setTimeout(() => {
      const fetchedProperty = getPropertyById(parseInt(id))
      setProperty(fetchedProperty)
      
      if (fetchedProperty) {
        const related = getRelatedProperties(parseInt(id))
        setRelatedProperties(related)
      }
      
      setLoading(false)
    }, 500)
  }, [id])
  
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === property.images.length - 1 ? 0 : prevIndex + 1
    )
  }
  
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? property.images.length - 1 : prevIndex - 1
    )
  }
  
  if (loading) {
    return (
      <div className="container-custom py-16 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-neutral-600">Loading property details...</p>
        </div>
      </div>
    )
  }
  
  if (!property) {
    return (
      <div className="container-custom py-16 min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
          <p className="text-neutral-600 mb-8">The property you're looking for doesn't exist or has been removed.</p>
          <Link to="/properties" className="btn-primary">
            View All Properties
          </Link>
        </div>
      </div>
    )
  }
  
  return (
    <>
      {/* Property Header */}
      <section className="bg-primary-800 py-16">
        <div className="container-custom">
          <Link to="/properties" className="inline-flex items-center text-primary-200 hover:text-white mb-6 transition-colors">
            <FaArrowLeft className="mr-2" /> Back to Properties
          </Link>
          
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                {property.title}
              </h1>
              <div className="flex items-center text-primary-200">
                <FaMapMarkerAlt className="mr-2" />
                <span>{property.location}</span>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-lg">
              <div className="text-sm">Price</div>
              <div className="text-2xl font-bold">₹{property.price.toLocaleString()}</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Property Images */}
      <section className="py-8 bg-white">
        <div className="container-custom">
          <div className="relative rounded-xl overflow-hidden h-[50vh] md:h-[70vh]">
            {/* Main Image */}
            <motion.img 
              key={currentImageIndex}
              src={property.images[currentImageIndex]} 
              alt={`${property.title} - Image ${currentImageIndex + 1}`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
            
            {/* Navigation Arrows */}
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button 
                onClick={prevImage}
                className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                aria-label="Previous image"
              >
                <FaArrowLeft />
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button 
                onClick={nextImage}
                className="bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300"
                aria-label="Next image"
              >
                <FaArrowRight />
              </button>
            </div>
            
            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-lg text-sm">
              {currentImageIndex + 1} / {property.images.length}
            </div>
          </div>
          
          {/* Thumbnail Gallery */}
          <div className="grid grid-cols-4 gap-2 mt-2">
            {property.images.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`${property.title} - Thumbnail ${index + 1}`}
                className={`h-20 w-full object-cover rounded-lg cursor-pointer transition-all duration-300 ${index === currentImageIndex ? 'border-2 border-primary-600' : 'opacity-70 hover:opacity-100'}`}
                onClick={() => setCurrentImageIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Property Details */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
                <h2 className="text-2xl font-semibold mb-6">Property Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="p-4 border border-neutral-200 rounded-lg text-center">
                    <FaBed className="text-primary-600 text-2xl mx-auto mb-2" />
                    <span className="block text-sm text-neutral-500">Bedrooms</span>
                    <span className="text-lg font-semibold">{property.bedrooms}</span>
                  </div>
                  <div className="p-4 border border-neutral-200 rounded-lg text-center">
                    <FaBath className="text-primary-600 text-2xl mx-auto mb-2" />
                    <span className="block text-sm text-neutral-500">Bathrooms</span>
                    <span className="text-lg font-semibold">{property.bathrooms}</span>
                  </div>
                  <div className="p-4 border border-neutral-200 rounded-lg text-center">
                    <FaRulerCombined className="text-primary-600 text-2xl mx-auto mb-2" />
                    <span className="block text-sm text-neutral-500">Area</span>
                    <span className="text-lg font-semibold">{property.area} sq.ft</span>
                  </div>
                  <div className="p-4 border border-neutral-200 rounded-lg text-center">
                    <FaRegCalendarAlt className="text-primary-600 text-2xl mx-auto mb-2" />
                    <span className="block text-sm text-neutral-500">Status</span>
                    <span className="text-lg font-semibold capitalize">
                      {property.status === 'for-sale' ? 'For Sale' : 'For Rent'}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <p className="text-neutral-700 leading-relaxed mb-6">
                  {property.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  <button className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors">
                    <FaWhatsapp className="mr-2" /> WhatsApp
                  </button>
                  <button className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
                    <FaShareAlt className="mr-2" /> Share
                  </button>
                </div>
              </div>
              
              {/* Amenities */}
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Amenities</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center">
                      <FaCheck className="text-primary-600 mr-3" />
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              {/* Agent Info */}
              <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <div className="flex items-center mb-6">
                  <img 
                    src={property.agent.image} 
                    alt={property.agent.name}
                    className="w-16 h-16 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h3 className="font-bold text-lg">{property.agent.name}</h3>
                    <p className="text-neutral-500">Property Agent</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-6">
                  <a 
                    href={`tel:${property.agent.phone}`} 
                    className="flex items-center text-neutral-700 hover:text-primary-700 transition-colors"
                  >
                    <FaPhone className="mr-3 text-primary-600" />
                    {property.agent.phone}
                  </a>
                  <a 
                    href={`mailto:${property.agent.email}`} 
                    className="flex items-center text-neutral-700 hover:text-primary-700 transition-colors"
                  >
                    <FaEnvelope className="mr-3 text-primary-600" />
                    {property.agent.email}
                  </a>
                </div>
                
                <a 
                  href="#contact-form" 
                  className="btn-primary w-full text-center block"
                >
                  Contact Agent
                </a>
              </div>
              
              {/* Contact Form */}
              <div id="contact-form" className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Interested in this property?</h3>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="John Doe"
                      className="input-field"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="john@example.com"
                      className="input-field"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+91 XXXXX XXXXX"
                      className="input-field"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="I'm interested in this property and would like to schedule a viewing..."
                      className="input-field"
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Properties */}
      {relatedProperties.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Similar Properties</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}

export default PropertyDetailPage