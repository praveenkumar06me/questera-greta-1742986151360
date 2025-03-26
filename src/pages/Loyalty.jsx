import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoyaltyCard from '../components/LoyaltyCard';
import RewardItem from '../components/RewardItem';
import { FaCoffee, FaBirthdayCake, FaUserFriends, FaPercent } from 'react-icons/fa';

const rewards = [
  {
    id: 1,
    name: 'Free Coffee',
    description: 'Any coffee drink of your choice',
    points: 100,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085'
  },
  {
    id: 2,
    name: 'Dessert Special',
    description: 'One complimentary dessert',
    points: 150,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307'
  },
  {
    id: 3,
    name: 'Brunch for Two',
    description: '25% off brunch for two people',
    points: 300,
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349'
  },
  {
    id: 4,
    name: 'Private Tasting',
    description: 'Exclusive coffee tasting experience',
    points: 500,
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31'
  }
];

const benefits = [
  {
    icon: FaCoffee,
    title: 'Points on Purchases',
    description: 'Earn 1 point for every $1 spent'
  },
  {
    icon: FaBirthdayCake,
    title: 'Birthday Reward',
    description: 'Double points during your birthday month'
  },
  {
    icon: FaUserFriends,
    title: 'Referral Bonus',
    description: 'Get 50 points for each friend referral'
  },
  {
    icon: FaPercent,
    title: 'Special Discounts',
    description: 'Exclusive member-only promotions'
  }
];

export default function Loyalty() {
  const [userPoints, setUserPoints] = useState(280);
  const [showRedeemModal, setShowRedeemModal] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);

  const handleRedeem = (reward) => {
    if (userPoints >= reward.points) {
      setSelectedReward(reward);
      setShowRedeemModal(true);
    }
  };

  const confirmRedeem = () => {
    setUserPoints(prevPoints => prevPoints - selectedReward.points);
    setShowRedeemModal(false);
  };

  const getTierInfo = (points) => {
    if (points >= 1000) return { tier: 'Gold', nextTierPoints: null };
    if (points >= 500) return { tier: 'Silver', nextTierPoints: 1000 };
    return { tier: 'Bronze', nextTierPoints: 500 };
  };

  const { tier, nextTierPoints } = getTierInfo(userPoints);

  return (
    <div className="min-h-screen bg-cream py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-4xl text-coffee mb-4">Loyalty Rewards</h1>
          <p className="font-lato text-gray-600">Earn points and enjoy exclusive benefits</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <LoyaltyCard
              tier={tier}
              points={userPoints}
              nextTierPoints={nextTierPoints}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-lg shadow-md p-6"
          >
            <h2 className="font-playfair text-2xl text-coffee mb-6">Member Benefits</h2>
            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <benefit.icon className="text-cafe-brown text-2xl mt-1" />
                  <div>
                    <h3 className="font-playfair text-lg text-coffee">{benefit.title}</h3>
                    <p className="font-lato text-gray-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <section className="mb-12">
          <h2 className="font-playfair text-3xl text-coffee mb-8 text-center">Available Rewards</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {rewards.map((reward) => (
              <RewardItem
                key={reward.id}
                reward={reward}
                onRedeem={handleRedeem}
                userPoints={userPoints}
              />
            ))}
          </div>
        </section>

        <AnimatePresence>
          {showRedeemModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-lg p-6 max-w-md w-full"
              >
                <h3 className="font-playfair text-2xl text-coffee mb-4">Confirm Redemption</h3>
                <p className="font-lato text-gray-600 mb-6">
                  Are you sure you want to redeem {selectedReward?.name} for {selectedReward?.points} points?
                </p>
                <div className="flex justify-end space-x-4">
                  <button
                    onClick={() => setShowRedeemModal(false)}
                    className="px-4 py-2 text-coffee hover:text-cafe-brown"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={confirmRedeem}
                    className="px-4 py-2 bg-cafe-brown text-white rounded hover:bg-coffee"
                  >
                    Confirm
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}