import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-cream py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-4xl text-coffee mb-4">Our Story</h1>
          <p className="font-lato text-gray-600">Serving the community since 2010</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.img
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31"
            alt="Cafe ambiance"
            className="rounded-lg shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <p className="font-lato text-gray-700">
              At Café Delight, we believe in creating more than just great coffee. We're passionate about crafting memorable experiences in a warm, welcoming environment.
            </p>
            <p className="font-lato text-gray-700">
              Our coffee beans are ethically sourced from sustainable farms around the world, and our pastries are baked fresh daily using traditional recipes.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}