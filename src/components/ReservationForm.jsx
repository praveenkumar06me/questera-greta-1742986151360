import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DateTimePicker from './DateTimePicker';

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    partySize: '2',
    specialRequests: '',
    datetime: { date: '', time: '' }
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send the data to a server
    setSubmitted(true);
  };

  const handleDateTimeSelect = (datetime) => {
    setFormData(prev => ({
      ...prev,
      datetime
    }));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center p-8 bg-white rounded-lg shadow-md"
      >
        <h3 className="font-playfair text-2xl text-coffee mb-4">Reservation Confirmed!</h3>
        <p className="font-lato text-gray-600 mb-6">
          Thank you for your reservation, {formData.name}! We've sent a confirmation email to {formData.email}.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="bg-cafe-brown text-white px-6 py-2 rounded hover:bg-coffee transition-colors"
        >
          Make Another Reservation
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-lg shadow-md"
    >
      <div>
        <label className="block font-lato text-coffee mb-2">Name</label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-cafe-brown"
        />
      </div>

      <div>
        <label className="block font-lato text-coffee mb-2">Email</label>
        <input
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-cafe-brown"
        />
      </div>

      <div>
        <label className="block font-lato text-coffee mb-2">Phone</label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-cafe-brown"
        />
      </div>

      <div>
        <label className="block font-lato text-coffee mb-2">Party Size</label>
        <select
          value={formData.partySize}
          onChange={(e) => setFormData({ ...formData, partySize: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-cafe-brown"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8].map(size => (
            <option key={size} value={size}>{size} {size === 1 ? 'person' : 'people'}</option>
          ))}
        </select>
      </div>

      <DateTimePicker
        selectedDateTime={formData.datetime}
        onDateTimeSelect={handleDateTimeSelect}
      />

      <div>
        <label className="block font-lato text-coffee mb-2">Special Requests</label>
        <textarea
          value={formData.specialRequests}
          onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-cafe-brown h-32"
          placeholder="Any dietary requirements or special occasions?"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={!formData.datetime.date || !formData.datetime.time}
        className="w-full bg-cafe-brown text-white py-3 px-4 rounded hover:bg-coffee transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Reserve Table
      </button>
    </motion.form>
  );
}