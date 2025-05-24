import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSearch, FaMapMarkerAlt, FaRupeeSign, FaBuilding } from 'react-icons/fa'

const HeroSearchForm = () => {
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useState({
    location: '',
    propertyType: '',
    priceRange: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setSearchParams(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Build query string from form data
    const queryParams = new URLSearchParams()
    
    if (searchParams.location) {
      queryParams.append('location', searchParams.location)
    }
    
    if (searchParams.propertyType) {
      queryParams.append('type', searchParams.propertyType)
    }
    
    if (searchParams.priceRange) {
      queryParams.append('price', searchParams.priceRange)
    }
    
    // Navigate to properties page with search params
    navigate({
      pathname: '/properties',
      search: queryParams.toString()
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaMapMarkerAlt className="text-neutral-400" />
          </div>
          <select
            name="location"
            value={searchParams.location}
            onChange={handleChange}
            className="input-field pl-10 bg-white"
          >
            <option value="">All Locations</option>
            <option value="mumbai">Mumbai</option>
            <option value="delhi">Delhi</option>
            <option value="bangalore">Bangalore</option>
            <option value="hyderabad">Hyderabad</option>
            <option value="pune">Pune</option>
          </select>
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaBuilding className="text-neutral-400" />
          </div>
          <select
            name="propertyType"
            value={searchParams.propertyType}
            onChange={handleChange}
            className="input-field pl-10 bg-white"
          >
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
            <option value="commercial">Commercial</option>
            <option value="land">Land</option>
          </select>
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FaRupeeSign className="text-neutral-400" />
          </div>
          <select
            name="priceRange"
            value={searchParams.priceRange}
            onChange={handleChange}
            className="input-field pl-10 bg-white"
          >
            <option value="">Price Range</option>
            <option value="0-2000000">Under ₹20 Lakhs</option>
            <option value="2000000-5000000">₹20 Lakhs - ₹50 Lakhs</option>
            <option value="5000000-10000000">₹50 Lakhs - ₹1 Crore</option>
            <option value="10000000-30000000">₹1 Crore - ₹3 Crores</option>
            <option value="30000000-999999999">Above ₹3 Crores</option>
          </select>
        </div>
        
        <button 
          type="submit" 
          className="btn-secondary flex items-center justify-center"
        >
          <FaSearch className="mr-2" /> Search
        </button>
      </div>
    </form>
  )
}

export default HeroSearchForm