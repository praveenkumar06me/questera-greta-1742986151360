import { motion } from 'framer-motion';

export default function RewardItem({ reward, onRedeem, userPoints }) {
  const isAffordable = userPoints >= reward.points;

  return (
    <motion.div
      whileHover={{ scale: isAffordable ? 1.02 : 1 }}
      className={`bg-white rounded-lg shadow-md overflow-hidden ${
        !isAffordable ? 'opacity-70' : ''
      }`}
    >
      <img
        src={reward.image}
        alt={reward.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-playfair text-xl text-coffee mb-2">{reward.name}</h3>
        <p className="font-lato text-gray-600 mb-4">{reward.description}</p>
        <div className="flex justify-between items-center">
          <span className="font-lato text-cafe-brown font-bold">
            {reward.points} points
          </span>
          <button
            onClick={() => onRedeem(reward)}
            disabled={!isAffordable}
            className={`px-4 py-2 rounded ${
              isAffordable
                ? 'bg-cafe-brown text-white hover:bg-coffee'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            } transition-colors`}
          >
            Redeem
          </button>
        </div>
      </div>
    </motion.div>
  );
}