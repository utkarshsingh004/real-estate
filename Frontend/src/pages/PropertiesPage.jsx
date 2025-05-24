import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaFilter, FaSearch, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa'
import PropertyCard from '../components/properties/PropertyCard'
import { getProperties } from '../data/properties'

const PropertiesPage = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const queryParams = new URLSearchParams(location.search)
  
  // Initialize filters from URL params or defaults
  const [filters, setFilters] = useState({
    location: queryParams.get('location') || '',
    type: queryParams.get('type') || '',
    price: queryParams.get('price') || '',
    bedrooms: queryParams.get('bedrooms') || '',
    status: queryParams.get('status') || ''
  })
  
  const [sortBy, setSortBy] = useState('price-asc')
  const [properties, setProperties] = useState([])
  const [showFilters, setShowFilters] = useState(false)
  
  useEffect(() => {
    // Get filtered properties
    let filteredProperties = getProperties(filters)
    
    // Apply sorting
    if (sortBy === 'price-asc') {
      filteredProperties = [...filteredProperties].sort((a, b) => a.price - b.price)
    } else if (sortBy === 'price-desc') {
      filteredProperties = [...filteredProperties].sort((a, b) => b.price - a.price)
    } else if (sortBy === 'area-asc') {
      filteredProperties = [...filteredProperties].sort((a, b) => a.area - b.area)
    } else if (sortBy === 'area-desc') {
      filteredProperties = [...filteredProperties].sort((a, b) => b.area - a.area)
    }
    
    setProperties(filteredProperties)
  }, [filters, sortBy])
  
  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters({
      ...filters,
      [name]: value
    })
  }
  
  const handleSearchSubmit = (e) => {
    e.preventDefault()
    
    // Update URL with filters
    const queryParams = new URLSearchParams()
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        queryParams.append(key, value)
      }
    })
    
    navigate({
      pathname: '/properties',
      search: queryParams.toString()
    })
  }
  
  const handleResetFilters = () => {
    setFilters({
      location: '',
      type: '',
      price: '',
      bedrooms: '',
      status: ''
    })
    
    navigate('/properties')
  }
  
  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }
  
  return (
    <>
      <section className="bg-primary-800 py-20">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-white mb-4">
            Find Your Perfect Property
          </h1>
          <p className="text-primary-200 text-lg max-w-3xl">
            Browse our extensive collection of properties across India. Use the filters to narrow down your search and find exactly what you're looking for.
          </p>
        </div>
      </section>
      
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters for desktop */}
            <div className="hidden lg:block w-full lg:w-1/4">
              <div className="bg-white p-6 rounded-xl shadow-sm sticky top-24">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <FaFilter className="mr-2 text-primary-600" /> Filter Properties
                </h2>
                
                <form onSubmit={handleSearchSubmit}>
                  <div className="space-y-6">
                    {/* Location */}
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-neutral-700 mb-1">
                        Location
                      </label>
                      <select
                        id="location"
                        name="location"
                        value={filters.location}
                        onChange={handleFilterChange}
                        className="input-field"
                      >
                        <option value="">All Locations</option>
                        <option value="mumbai">Mumbai</option>
                        <option value="delhi">Delhi</option>
                        <option value="bangalore">Bangalore</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="pune">Pune</option>
                        <option value="lucknow">Lucknow</option>
                        <option value="gurgaon">Gurgaon</option>
                      </select>
                    </div>
                    
                    {/* Property Type */}
                    <div>
                      <label htmlFor="type" className="block text-sm font-medium text-neutral-700 mb-1">
                        Property Type
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={filters.type}
                        onChange={handleFilterChange}
                        className="input-field"
                      >
                        <option value="">All Types</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="villa">Villa</option>
                        <option value="penthouse">Penthouse</option>
                        <option value="duplex">Duplex</option>
                        <option value="commercial">Commercial</option>
                        <option value="farmhouse">Farmhouse</option>
                      </select>
                    </div>
                    
                    {/* Price Range */}
                    <div>
                      <label htmlFor="price" className="block text-sm font-medium text-neutral-700 mb-1">
                        Price Range
                      </label>
                      <select
                        id="price"
                        name="price"
                        value={filters.price}
                        onChange={handleFilterChange}
                        className="input-field"
                      >
                        <option value="">Any Price</option>
                        <option value="0-5000000">Under ₹50 Lakhs</option>
                        <option value="5000000-10000000">₹50 Lakhs - ₹1 Crore</option>
                        <option value="10000000-20000000">₹1 Crore - ₹2 Crores</option>
                        <option value="20000000-50000000">₹2 Crores - ₹5 Crores</option>
                        <option value="50000000-999999999">Above ₹5 Crores</option>
                      </select>
                    </div>
                    
                    {/* Bedrooms */}
                    <div>
                      <label htmlFor="bedrooms" className="block text-sm font-medium text-neutral-700 mb-1">
                        Bedrooms
                      </label>
                      <select
                        id="bedrooms"
                        name="bedrooms"
                        value={filters.bedrooms}
                        onChange={handleFilterChange}
                        className="input-field"
                      >
                        <option value="">Any</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                        <option value="5">5+</option>
                      </select>
                    </div>
                    
                    {/* Status */}
                    <div>
                      <label htmlFor="status" className="block text-sm font-medium text-neutral-700 mb-1">
                        Status
                      </label>
                      <select
                        id="status"
                        name="status"
                        value={filters.status}
                        onChange={handleFilterChange}
                        className="input-field"
                      >
                        <option value="">Any Status</option>
                        <option value="for-sale">For Sale</option>
                        <option value="for-rent">For Rent</option>
                      </select>
                    </div>
                    
                    <div className="flex gap-2 pt-4">
                      <button type="submit" className="btn-primary flex-1">
                        <FaSearch className="inline-block mr-2" /> Search
                      </button>
                      <button 
                        type="button" 
                        onClick={handleResetFilters}
                        className="btn-outline flex-1"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            {/* Properties List */}
            <div className="w-full lg:w-3/4">
              <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
                <div className="flex flex-wrap justify-between items-center gap-4">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {properties.length} Properties Found
                    </h2>
                  </div>
                  
                  <div className="flex gap-4">
                    {/* Mobile filter toggle */}
                    <button 
                      className="lg:hidden btn-outline"
                      onClick={() => setShowFilters(!showFilters)}
                    >
                      <FaFilter className="inline-block mr-2" /> Filters
                    </button>
                    
                    <div className="flex items-center">
                      <label htmlFor="sort" className="hidden md:inline-block mr-2 text-neutral-600">
                        Sort By:
                      </label>
                      <select
                        id="sort"
                        value={sortBy}
                        onChange={handleSortChange}
                        className="input-field py-2"
                      >
                        <option value="price-asc">Price (Low to High)</option>
                        <option value="price-desc">Price (High to Low)</option>
                        <option value="area-asc">Area (Small to Large)</option>
                        <option value="area-desc">Area (Large to Small)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Mobile Filters */}
              {showFilters && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white p-6 rounded-xl shadow-sm mb-6 lg:hidden"
                >
                  <form onSubmit={handleSearchSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* Location */}
                      <div>
                        <label htmlFor="mobile-location" className="block text-sm font-medium text-neutral-700 mb-1">
                          Location
                        </label>
                        <select
                          id="mobile-location"
                          name="location"
                          value={filters.location}
                          onChange={handleFilterChange}
                          className="input-field"
                        >
                          <option value="">All Locations</option>
                          <option value="mumbai">Mumbai</option>
                          <option value="delhi">Delhi</option>
                          <option value="bangalore">Bangalore</option>
                          <option value="hyderabad">Hyderabad</option>
                          <option value="pune">Pune</option>
                          <option value="lucknow">Lucknow</option>
                          <option value="gurgaon">Gurgaon</option>
                        </select>
                      </div>
                      
                      {/* Property Type */}
                      <div>
                        <label htmlFor="mobile-type" className="block text-sm font-medium text-neutral-700 mb-1">
                          Property Type
                        </label>
                        <select
                          id="mobile-type"
                          name="type"
                          value={filters.type}
                          onChange={handleFilterChange}
                          className="input-field"
                        >
                          <option value="">All Types</option>
                          <option value="apartment">Apartment</option>
                          <option value="house">House</option>
                          <option value="villa">Villa</option>
                          <option value="penthouse">Penthouse</option>
                          <option value="duplex">Duplex</option>
                          <option value="commercial">Commercial</option>
                          <option value="farmhouse">Farmhouse</option>
                        </select>
                      </div>
                      
                      {/* Price Range */}
                      <div>
                        <label htmlFor="mobile-price" className="block text-sm font-medium text-neutral-700 mb-1">
                          Price Range
                        </label>
                        <select
                          id="mobile-price"
                          name="price"
                          value={filters.price}
                          onChange={handleFilterChange}
                          className="input-field"
                        >
                          <option value="">Any Price</option>
                          <option value="0-5000000">Under ₹50 Lakhs</option>
                          <option value="5000000-10000000">₹50 Lakhs - ₹1 Crore</option>
                          <option value="10000000-20000000">₹1 Crore - ₹2 Crores</option>
                          <option value="20000000-50000000">₹2 Crores - ₹5 Crores</option>
                          <option value="50000000-999999999">Above ₹5 Crores</option>
                        </select>
                      </div>
                      
                      {/* Bedrooms */}
                      <div>
                        <label htmlFor="mobile-bedrooms" className="block text-sm font-medium text-neutral-700 mb-1">
                          Bedrooms
                        </label>
                        <select
                          id="mobile-bedrooms"
                          name="bedrooms"
                          value={filters.bedrooms}
                          onChange={handleFilterChange}
                          className="input-field"
                        >
                          <option value="">Any</option>
                          <option value="1">1+</option>
                          <option value="2">2+</option>
                          <option value="3">3+</option>
                          <option value="4">4+</option>
                          <option value="5">5+</option>
                        </select>
                      </div>
                      
                      <div className="md:col-span-2 flex gap-2 mt-2">
                        <button type="submit" className="btn-primary flex-1">
                          <FaSearch className="inline-block mr-2" /> Apply Filters
                        </button>
                        <button 
                          type="button" 
                          onClick={handleResetFilters}
                          className="btn-outline flex-1"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  </form>
                </motion.div>
              )}
              
              {/* Property Grid */}
              {properties.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  {properties.map(property => (
                    <PropertyCard key={property.id} property={property} />
                  ))}
                </div>
              ) : (
                <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                  <h3 className="text-xl font-semibold mb-4">No properties found</h3>
                  <p className="text-neutral-600 mb-6">
                    No properties match your current filters. Please try adjusting your search criteria.
                  </p>
                  <button 
                    onClick={handleResetFilters}
                    className="btn-primary"
                  >
                    Reset Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default PropertiesPage