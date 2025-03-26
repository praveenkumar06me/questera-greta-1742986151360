import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaLeaf, FaStar } from 'react-icons/fa';

export default function MenuCard({ item }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      onClick={() => setIsExpanded(!isExpanded)}
      className="bg-white p-6 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-playfair text-xl text-coffee flex items-center gap-2">
            {item.name}
            {item.isVegan && <FaLeaf className="text-green-500" />}
            {item.isPopular && <FaStar className="text-yellow-500" />}
          </h3>
          <p className="font-lato text-gray-600 mt-2">{item.description}</p>
        </div>
        <span className="font-lato text-cafe-brown font-semibold">{item.price}</span>
      </div>
      
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="mt-4 pt-4 border-t border-gray-200"
        >
          <p className="text-sm text-gray-600">{item.ingredients}</p>
          {item.allergens && (
            <p className="text-sm text-red-600 mt-2">
              Allergens: {item.allergens}
            </p>
          )}
          {item.calories && (
            <p className="text-sm text-gray-500 mt-1">
              {item.calories} calories
            </p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}