import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

export default function Contact() {
  return (
    <div className="min-h-screen bg-cream py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-4xl text-coffee mb-4">Contact Us</h1>
          <p className="font-lato text-gray-600">We'd love to hear from you</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <FaMapMarkerAlt className="text-cafe-brown text-xl" />
                <div>
                  <h3 className="font-playfair text-lg text-coffee">Address</h3>
                  <p className="font-lato text-gray-600">123 Coffee Street, City, Country</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaPhone className="text-cafe-brown text-xl" />
                <div>
                  <h3 className="font-playfair text-lg text-coffee">Phone</h3>
                  <p className="font-lato text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaEnvelope className="text-cafe-brown text-xl" />
                <div>
                  <h3 className="font-playfair text-lg text-coffee">Email</h3>
                  <p className="font-lato text-gray-600">hello@cafedelight.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <FaClock className="text-cafe-brown text-xl" />
                <div>
                  <h3 className="font-playfair text-lg text-coffee">Hours</h3>
                  <p className="font-lato text-gray-600">Mon-Fri: 7am - 8pm</p>
                  <p className="font-lato text-gray-600">Sat-Sun: 8am - 9pm</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <form className="space-y-6">
              <div>
                <label className="block font-lato text-coffee mb-2">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-cafe-brown"
                />
              </div>
              <div>
                <label className="block font-lato text-coffee mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-cafe-brown"
                />
              </div>
              <div>
                <label className="block font-lato text-coffee mb-2">Message</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-cafe-brown h-32"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-cafe-brown text-white py-2 px-4 rounded hover:bg-coffee transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}