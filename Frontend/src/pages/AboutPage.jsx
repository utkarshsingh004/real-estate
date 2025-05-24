import { motion } from 'framer-motion'
import { FaUsers, FaHandshake, FaAward, FaHome, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return (
    <>
      <section 
        className="relative py-24 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'
        }}
      >
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Apna Ghar</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Your trusted partner in finding the perfect home for you and your family.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Apna Ghar Team"
                className="rounded-xl shadow-lg w-full h-auto" 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="w-20 h-1 bg-secondary-700 mb-6"></div>
              <p className="text-neutral-700 mb-4 leading-relaxed">
                Founded in 2005, Apna Ghar started with a simple mission: to help people find homes they love. What began as a small office with just three agents has now grown into one of India's most trusted real estate companies.
              </p>
              <p className="text-neutral-700 mb-6 leading-relaxed">
                Over the years, we've helped thousands of families find their perfect homes, guided investors toward profitable opportunities, and built lasting relationships with our clients. Our success comes from our commitment to understanding each client's unique needs and providing personalized solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <FaCheck className="text-primary-600 mr-2" />
                  <span className="font-medium">Quality Assurance</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-primary-600 mr-2" />
                  <span className="font-medium">Expert Agents</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-primary-600 mr-2" />
                  <span className="font-medium">Client Satisfaction</span>
                </div>
                <div className="flex items-center">
                  <FaCheck className="text-primary-600 mr-2" />
                  <span className="font-medium">Transparent Process</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              At Apna Ghar, our core values guide everything we do. They shape our culture and define how we interact with our clients and partners.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaUsers className="text-4xl text-primary-700 mb-4" />,
                title: "Client-Focused",
                description: "We put our clients' needs first and work tirelessly to exceed their expectations."
              },
              {
                icon: <FaHandshake className="text-4xl text-primary-700 mb-4" />,
                title: "Integrity",
                description: "We believe in honest communication and transparent business practices in all our dealings."
              },
              {
                icon: <FaAward className="text-4xl text-primary-700 mb-4" />,
                title: "Excellence",
                description: "We strive for excellence in every aspect of our service, from property selection to client support."
              },
              {
                icon: <FaHome className="text-4xl text-primary-700 mb-4" />,
                title: "Community",
                description: "We're committed to building stronger communities through responsible real estate practices."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="flex justify-center">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-neutral-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-neutral-600 max-w-2xl mx-auto">
              Our dedicated team of real estate professionals is committed to providing exceptional service and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                position: "Founder & CEO",
                image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              },
              {
                name: "Priya Sharma",
                position: "Senior Property Consultant",
                image: "https://images.pexels.com/photos/3746314/pexels-photo-3746314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              },
              {
                name: "Amit Patel",
                position: "Marketing Director",
                image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              },
              {
                name: "Neha Gupta",
                position: "Client Relations Manager",
                image: "https://images.pexels.com/photos/3760373/pexels-photo-3760373.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-sm overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 text-white w-full">
                      <div className="flex justify-center gap-4">
                        <a href="#" className="hover:text-primary-400 transition-colors">
                          <FaFacebook />
                        </a>
                        <a href="#" className="hover:text-primary-400 transition-colors">
                          <FaTwitter />
                        </a>
                        <a href="#" className="hover:text-primary-400 transition-colors">
                          <FaInstagram />
                        </a>
                        <a href="#" className="hover:text-primary-400 transition-colors">
                          <FaLinkedin />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-neutral-500">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section 
        className="py-16 bg-cover bg-center text-white"
        style={{ 
          backgroundImage: 'linear-gradient(rgba(30, 64, 175, 0.9), rgba(30, 64, 175, 0.9)), url(https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)'
        }}
      >
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Looking for Your Dream Property?
          </h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Let our team of experts guide you through the process of finding and purchasing your perfect home.
          </p>
          <Link to="/contact" className="btn-secondary text-xl px-8 py-4">
            Get in Touch Today
          </Link>
        </div>
      </section>
    </>
  )
}

export default AboutPage