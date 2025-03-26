import { motion } from 'framer-motion';
import { FaMountain, FaSeedling, FaCalendarAlt } from 'react-icons/fa';

export default function OriginStory({ origin }) {
  if (!origin) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <h3 className="font-playfair text-2xl text-coffee mb-4">{origin.name}</h3>
      <p className="font-lato text-gray-600 mb-6">{origin.description}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex items-center space-x-3">
          <FaMountain className="text-cafe-brown text-xl" />
          <div>
            <p className="font-lato text-sm text-gray-500">Altitude</p>
            <p className="font-lato text-coffee">{origin.altitude}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <FaSeedling className="text-cafe-brown text-xl" />
          <div>
            <p className="font-lato text-sm text-gray-500">Process</p>
            <p className="font-lato text-coffee">{origin.process}</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <FaCalendarAlt className="text-cafe-brown text-xl" />
          <div>
            <p className="font-lato text-sm text-gray-500">Harvest</p>
            <p className="font-lato text-coffee">{origin.harvest}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}