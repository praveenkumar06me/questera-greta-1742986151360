import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

const coffeeOrigins = {
  Brazil: {
    coords: [-51.9253, -14.2350],
    name: 'Brazilian Santos',
    description: 'Sweet, medium-bodied with notes of chocolate and caramel',
    altitude: '800-1,200m',
    process: 'Natural/Washed',
    harvest: 'May to September',
    position: { left: '30%', top: '70%' }
  },
  Ethiopia: {
    coords: [40.4897, 9.1450],
    name: 'Ethiopian Yirgacheffe',
    description: 'Floral and bright with bergamot and jasmine notes',
    altitude: '1,700-2,200m',
    process: 'Washed',
    harvest: 'October to December',
    position: { left: '55%', top: '55%' }
  },
  Colombia: {
    coords: [-74.2973, 4.5709],
    name: 'Colombian Supremo',
    description: 'Balanced with caramel sweetness and citrus brightness',
    altitude: '1,200-1,800m',
    process: 'Washed',
    harvest: 'April to June',
    position: { left: '25%', top: '55%' }
  },
  Guatemala: {
    coords: [-90.2308, 15.7835],
    name: 'Guatemalan Antigua',
    description: 'Complex with hints of cocoa and subtle spices',
    altitude: '1,500-1,700m',
    process: 'Washed',
    harvest: 'December to March',
    position: { left: '20%', top: '50%' }
  }
};

export default function CoffeeOriginMap({ onSelectOrigin }) {
  return (
    <div className="relative w-full h-[500px] bg-cream rounded-lg overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1524661135-423995f22d0b"
        alt="World Map"
        className="w-full h-full object-cover opacity-50"
      />
      
      {Object.entries(coffeeOrigins).map(([country, data]) => (
        <motion.button
          key={country}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          className="absolute"
          style={{
            left: data.position.left,
            top: data.position.top,
          }}
          onClick={() => onSelectOrigin(data)}
        >
          <div className="relative group">
            <FaMapMarkerAlt className="text-cafe-brown text-2xl" />
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-white p-2 rounded shadow-lg whitespace-nowrap">
              <p className="text-sm font-lato text-coffee">{data.name}</p>
            </div>
          </div>
        </motion.button>
      ))}
      
      <div className="absolute bottom-4 left-4 bg-white/90 p-4 rounded-lg">
        <h3 className="font-playfair text-coffee text-lg mb-2">Our Coffee Origins</h3>
        <p className="font-lato text-sm text-gray-600">Click on markers to learn more</p>
      </div>
    </div>
  );
}