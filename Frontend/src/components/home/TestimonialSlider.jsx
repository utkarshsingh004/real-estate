import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Homeowner',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
    quote: 'Apna Ghar made my dream of owning a home a reality. Their team was supportive throughout the entire process, and I couldn\'t be happier with my new home!'
  },
  {
    id: 2,
    name: 'Rahul Patel',
    role: 'Property Investor',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
    quote: 'As someone who invests in properties regularly, I can confidently say that Apna Ghar offers the most professional service in the market. Their market insights have been invaluable.'
  },
  {
    id: 3,
    name: 'Ananya Desai',
    role: 'First-time Buyer',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150',
    quote: 'Being a first-time homebuyer, I was nervous about the process. The team at Apna Ghar guided me every step of the way, making it a stress-free experience.'
  }
]

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(null)
  
  const nextSlide = () => {
    setDirection('right')
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1)
  }
  
  const prevSlide = () => {
    setDirection('left')
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1)
  }
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)
    
    return () => clearInterval(interval)
  }, [current])
  
  const variants = {
    enter: (direction) => ({
      x: direction === 'left' ? -300 : 300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction === 'left' ? 300 : -300,
      opacity: 0
    })
  }
  
  return (
    <div className="relative max-w-4xl mx-auto px-4">
      <div className="relative min-h-[320px] overflow-hidden rounded-xl">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="absolute w-full"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <FaQuoteRight className="text-primary-200 text-4xl mb-6" />
              <p className="text-lg md:text-xl text-neutral-700 mb-8">
                {testimonials[current].quote}
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonials[current].image} 
                  alt={testimonials[current].name}
                  className="w-16 h-16 rounded-full object-cover mr-4" 
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonials[current].name}</h4>
                  <p className="text-neutral-500">{testimonials[current].role}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="flex justify-center mt-8 gap-3">
        <button 
          onClick={prevSlide}
          className="bg-white hover:bg-primary-50 text-primary-800 rounded-full p-3 shadow-md transition-all duration-300"
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </button>
        {testimonials.map((_, index) => (
          <button 
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? 'bg-primary-800 scale-125' : 'bg-neutral-300'}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
        <button 
          onClick={nextSlide}
          className="bg-white hover:bg-primary-50 text-primary-800 rounded-full p-3 shadow-md transition-all duration-300"
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  )
}

export default TestimonialSlider