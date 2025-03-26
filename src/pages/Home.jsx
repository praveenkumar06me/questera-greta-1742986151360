import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <div className="relative h-[80vh]">
        <img 
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085"
          alt="Cafe interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="font-playfair text-5xl text-white mb-4">Welcome to Café Delight</h1>
            <p className="font-lato text-xl text-cream">Experience the perfect blend of comfort and taste</p>
          </motion.div>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-playfair text-2xl text-coffee mb-4">Premium Coffee</h3>
            <p className="font-lato text-gray-600">Sourced from the finest beans around the world</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-playfair text-2xl text-coffee mb-4">Fresh Pastries</h3>
            <p className="font-lato text-gray-600">Baked daily in our artisanal kitchen</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-md">
            <h3 className="font-playfair text-2xl text-coffee mb-4">Cozy Atmosphere</h3>
            <p className="font-lato text-gray-600">The perfect space to relax and unwind</p>
          </div>
        </div>
      </section>
    </div>
  );
}