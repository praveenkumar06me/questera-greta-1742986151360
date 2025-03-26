import { motion } from 'framer-motion';
import { FaCrown, FaCoffee, FaStar } from 'react-icons/fa';

export default function LoyaltyCard({ tier, points, nextTierPoints }) {
  const tiers = {
    bronze: { color: 'from-amber-700 to-amber-500', icon: FaCoffee },
    silver: { color: 'from-gray-400 to-gray-300', icon: FaStar },
    gold: { color: 'from-yellow-500 to-yellow-300', icon: FaCrown }
  };

  const currentTier = tiers[tier.toLowerCase()];
  const TierIcon = currentTier.icon;

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className={`bg-gradient-to-r ${currentTier.color} p-6 rounded-xl shadow-lg text-white`}
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-playfair text-2xl">{tier} Member</h3>
          <p className="font-lato text-white/80">Card #: **** **** 1234</p>
        </div>
        <TierIcon className="text-3xl" />
      </div>

      <div className="space-y-4">
        <div>
          <p className="font-lato text-sm text-white/80">Current Points</p>
          <p className="font-playfair text-3xl">{points}</p>
        </div>

        {nextTierPoints && (
          <div>
            <div className="w-full bg-white/30 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${(points / nextTierPoints) * 100}%` }}
                className="bg-white rounded-full h-2"
              />
            </div>
            <p className="font-lato text-sm mt-2">
              {nextTierPoints - points} points until next tier
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
}