import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import MenuCard from '../components/MenuCard';

const menuCategories = {
  all: 'All Items',
  coffee: 'Coffee',
  tea: 'Tea',
  pastries: 'Pastries',
  breakfast: 'Breakfast'
};

const menuItems = {
  coffee: [
    {
      name: 'Espresso',
      price: '$3.50',
      description: 'Rich and bold',
      ingredients: 'Freshly ground premium coffee beans',
      calories: '1',
      isPopular: true
    },
    {
      name: 'Cappuccino',
      price: '$4.50',
      description: 'Perfectly balanced',
      ingredients: 'Espresso, steamed milk, milk foam',
      calories: '120'
    },
    {
      name: 'Latte',
      price: '$4.75',
      description: 'Smooth and creamy',
      ingredients: 'Espresso, steamed milk',
      calories: '150'
    }
  ],
  tea: [
    {
      name: 'Green Tea',
      price: '$3.25',
      description: 'Light and refreshing',
      ingredients: 'Organic Japanese green tea leaves',
      calories: '0',
      isVegan: true
    },
    {
      name: 'Chai Latte',
      price: '$4.50',
      description: 'Spiced and warming',
      ingredients: 'Black tea, spices, steamed milk',
      calories: '180'
    }
  ],
  pastries: [
    {
      name: 'Croissant',
      price: '$3.25',
      description: 'Buttery and flaky',
      ingredients: 'Butter, flour, yeast',
      calories: '250',
      allergens: 'Wheat, Dairy',
      isPopular: true
    },
    {
      name: 'Chocolate Muffin',
      price: '$3.75',
      description: 'Decadent treat',
      ingredients: 'Flour, cocoa, chocolate chips',
      calories: '300',
      allergens: 'Wheat, Dairy, Eggs'
    }
  ],
  breakfast: [
    {
      name: 'Avocado Toast',
      price: '$8.50',
      description: 'Fresh and healthy',
      ingredients: 'Sourdough bread, avocado, cherry tomatoes, microgreens',
      calories: '320',
      isVegan: true
    },
    {
      name: 'Breakfast Sandwich',
      price: '$7.75',
      description: 'Classic morning starter',
      ingredients: 'Brioche bun, eggs, cheese, bacon',
      calories: '450',
      allergens: 'Wheat, Dairy, Eggs',
      isPopular: true
    }
  ]
};

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const getFilteredItems = () => {
    let items = [];
    if (selectedCategory === 'all') {
      Object.values(menuItems).forEach(categoryItems => {
        items = [...items, ...categoryItems];
      });
    } else {
      items = menuItems[selectedCategory] || [];
    }

    return items.filter(item =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <div className="min-h-screen bg-cream py-16 px-4">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-playfair text-4xl text-coffee text-center mb-8">Our Menu</h1>
        
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search menu items..."
            className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:border-cafe-brown"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {Object.entries(menuCategories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-4 py-2 rounded-full font-lato transition-colors ${
                selectedCategory === key
                  ? 'bg-cafe-brown text-white'
                  : 'bg-white text-coffee hover:bg-gray-100'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchQuery}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="grid gap-6"
          >
            {getFilteredItems().map((item, index) => (
              <MenuCard key={item.name + index} item={item} />
            ))}
          </motion.div>
        </AnimatePresence>

        {getFilteredItems().length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 mt-8"
          >
            No items found. Try adjusting your search.
          </motion.p>
        )}
      </motion.div>
    </div>
  );
}