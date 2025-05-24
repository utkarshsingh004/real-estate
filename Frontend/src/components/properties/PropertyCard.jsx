import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaBed, FaBath, FaRulerCombined, FaRegHeart, FaHeart, FaMapMarkerAlt } from 'react-icons/fa'

const PropertyCard = ({ property }) => {
  const [isFavorite, setIsFavorite] = useState(false)
  
  const handleFavoriteClick = (e) => {
    e.preventDefault()
    setIsFavorite(!isFavorite)
  }
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
    >
      <Link to={`/properties/${property.id}`} className="block">
        <div className="relative">
          <img 
            src={property.images[0]} 
            alt={property.title}
            className="w-full h-60 object-cover" 
          />
          <button
            onClick={handleFavoriteClick}
            className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full text-lg transition-all duration-300"
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? 
              <FaHeart className="text-secondary-700" /> : 
              <FaRegHeart className="text-neutral-600" />
            }
          </button>
          {property.featured && (
            <span className="absolute top-4 left-4 bg-secondary-700 text-white px-3 py-1 rounded-lg text-sm font-medium">
              Featured
            </span>
          )}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <div className="font-semibold text-2xl">₹{property.price.toLocaleString()}</div>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="font-semibold text-xl mb-2 text-neutral-800 line-clamp-1">
            {property.title}
          </h3>
          
          <div className="flex items-center text-neutral-600 mb-3">
            <FaMapMarkerAlt className="text-primary-600 mr-2" />
            <span className="line-clamp-1">{property.location}</span>
          </div>
          
          <div className="border-t border-neutral-200 pt-4 mt-4">
            <div className="flex justify-between">
              <div className="flex items-center text-neutral-600">
                <FaBed className="mr-2" />
                <span>{property.bedrooms} Beds</span>
              </div>
              
              <div className="flex items-center text-neutral-600">
                <FaBath className="mr-2" />
                <span>{property.bathrooms} Baths</span>
              </div>
              
              <div className="flex items-center text-neutral-600">
                <FaRulerCombined className="mr-2" />
                <span>{property.area} sq.ft</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default PropertyCard