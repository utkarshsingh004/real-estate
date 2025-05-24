import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  
  const [formStatus, setFormStatus] = useState(null)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulating form submission
    setFormStatus('sending')
    
    setTimeout(() => {
      setFormStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
    }, 1500)
  }
  
  return (
    <>
      <section className="bg-primary-800 py-20">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-primary-200 text-lg max-w-3xl">
            Have questions about our properties or services? Get in touch with our team and we'll be happy to assist you.
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 text-primary-800 p-3 rounded-lg mr-4">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Our Location</h3>
                      <p className="text-neutral-600">123 Real Estate Avenue, Mumbai, Maharashtra, 400001</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 text-primary-800 p-3 rounded-lg mr-4">
                      <FaPhoneAlt className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Phone Number</h3>
                      <p className="text-neutral-600">
                        <a href="tel:+919876543210" className="hover:text-primary-700 transition-colors">
                          +91 987 654 3210
                        </a>
                      </p>
                      <p className="text-neutral-600">
                        <a href="tel:+919876543211" className="hover:text-primary-700 transition-colors">
                          +91 987 654 3211
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 text-primary-800 p-3 rounded-lg mr-4">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Email Address</h3>
                      <p className="text-neutral-600">
                        <a href="mailto:info@apnaghar.com" className="hover:text-primary-700 transition-colors">
                          info@apnaghar.com
                        </a>
                      </p>
                      <p className="text-neutral-600">
                        <a href="mailto:support@apnaghar.com" className="hover:text-primary-700 transition-colors">
                          support@apnaghar.com
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 text-primary-800 p-3 rounded-lg mr-4">
                      <FaClock className="text-xl" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">Working Hours</h3>
                      <p className="text-neutral-600">
                        Monday - Friday: 9:00 AM - 7:00 PM
                      </p>
                      <p className="text-neutral-600">
                        Saturday: 9:00 AM - 5:00 PM
                      </p>
                      <p className="text-neutral-600">
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-medium text-lg mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="#" 
                      className="bg-neutral-100 hover:bg-primary-100 hover:text-primary-800 text-neutral-600 p-3 rounded-full transition-all duration-300"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="text-lg" />
                    </a>
                    <a 
                      href="#" 
                      className="bg-neutral-100 hover:bg-primary-100 hover:text-primary-800 text-neutral-600 p-3 rounded-full transition-all duration-300"
                      aria-label="Twitter"
                    >
                      <FaTwitter className="text-lg" />
                    </a>
                    <a 
                      href="#" 
                      className="bg-neutral-100 hover:bg-primary-100 hover:text-primary-800 text-neutral-600 p-3 rounded-full transition-all duration-300"
                      aria-label="Instagram"
                    >
                      <FaInstagram className="text-lg" />
                    </a>
                    <a 
                      href="#" 
                      className="bg-neutral-100 hover:bg-primary-100 hover:text-primary-800 text-neutral-600 p-3 rounded-full transition-all duration-300"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="text-lg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="input-field"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="input-field"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        className="input-field"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 mb-1">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Property Inquiry"
                        className="input-field"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Type your message here..."
                      className="input-field"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={formStatus === 'sending'}
                    className={`btn-primary w-full flex items-center justify-center ${formStatus === 'sending' ? 'opacity-75 cursor-not-allowed' : ''}`}
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-3"></div>
                        Sending...
                      </>
                    ) : 'Send Message'}
                  </button>
                  
                  {formStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-green-100 text-green-800 rounded-lg mt-4"
                    >
                      Thank you for your message! We'll get back to you soon.
                    </motion.div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Find Us Here</h2>
          
          <div className="rounded-xl overflow-hidden shadow-md h-[400px] bg-neutral-200 flex justify-center items-center">
            {/* Map would be integrated here, using placeholder for now */}
            <div className="text-neutral-600 text-center p-8">
              <p className="mb-4">Interactive map would be displayed here</p>
              <p>123 Real Estate Avenue, Mumbai, Maharashtra, 400001</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage