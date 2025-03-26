import { motion } from 'framer-motion';
import ReservationForm from '../components/ReservationForm';
import { FaCalendarAlt, FaUsers, FaClock } from 'react-icons/fa';

export default function Reservations() {
  return (
    <div className="min-h-screen bg-cream py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-4xl text-coffee mb-4">Reserve a Table</h1>
          <p className="font-lato text-gray-600">Book your perfect dining experience</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-playfair text-2xl text-coffee mb-6">Reservation Guidelines</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaCalendarAlt className="text-cafe-brown text-xl mt-1" />
                  <div>
                    <h3 className="font-playfair text-lg text-coffee">Advance Booking</h3>
                    <p className="font-lato text-gray-600">Reservations can be made up to 30 days in advance</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FaUsers className="text-cafe-brown text-xl mt-1" />
                  <div>
                    <h3 className="font-playfair text-lg text-coffee">Party Size</h3>
                    <p className="font-lato text-gray-600">We accommodate parties of up to 8 people</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <FaClock className="text-cafe-brown text-xl mt-1" />
                  <div>
                    <h3 className="font-playfair text-lg text-coffee">Seating Duration</h3>
                    <p className="font-lato text-gray-600">Tables are reserved for 2 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="font-playfair text-2xl text-coffee mb-4">Need Help?</h2>
              <p className="font-lato text-gray-600 mb-4">
                For special arrangements or groups larger than 8, please contact us directly:
              </p>
              <p className="font-lato text-cafe-brown">(555) 123-4567</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <ReservationForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
}