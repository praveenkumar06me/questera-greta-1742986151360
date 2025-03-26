import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoffeeOriginMap from '../components/CoffeeOriginMap';
import OriginStory from '../components/OriginStory';

export default function Origins() {
  const [selectedOrigin, setSelectedOrigin] = useState(null);

  return (
    <div className="min-h-screen bg-cream py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-4xl text-coffee mb-4">Our Coffee Origins</h1>
          <p className="font-lato text-gray-600">
            Discover the unique stories behind our carefully selected coffee beans
          </p>
        </motion.div>

        <div className="grid gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <CoffeeOriginMap onSelectOrigin={setSelectedOrigin} />
          </motion.div>

          <AnimatePresence mode="wait">
            {selectedOrigin && (
              <OriginStory key="origin-story" origin={selectedOrigin} />
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-lg shadow-lg p-6"
          >
            <h2 className="font-playfair text-2xl text-coffee mb-6">Our Commitment to Quality</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-playfair text-xl text-coffee mb-3">Direct Trade Relationships</h3>
                <p className="font-lato text-gray-600">
                  We work directly with farmers to ensure fair prices and sustainable practices,
                  building lasting relationships that benefit both our customers and coffee-growing communities.
                </p>
              </div>
              <div>
                <h3 className="font-playfair text-xl text-coffee mb-3">Artisanal Roasting</h3>
                <p className="font-lato text-gray-600">
                  Each batch of beans is carefully roasted to bring out its unique characteristics,
                  ensuring you experience the full spectrum of flavors from these exceptional origins.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}