import { useState } from 'react';
import { format, addDays, isAfter, isBefore, parseISO, setHours, setMinutes } from 'date-fns';

export default function DateTimePicker({ onDateTimeSelect, selectedDateTime, className }) {
  const [selectedDate, setSelectedDate] = useState(selectedDateTime || '');
  const [selectedTime, setSelectedTime] = useState('');

  const minDate = format(new Date(), 'yyyy-MM-dd');
  const maxDate = format(addDays(new Date(), 30), 'yyyy-MM-dd');

  const availableTimeSlots = [
    '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30', '18:00', '18:30',
    '19:00', '19:30', '20:00'
  ];

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime('');
    if (onDateTimeSelect) {
      onDateTimeSelect({ date, time: selectedTime });
    }
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
    if (onDateTimeSelect) {
      onDateTimeSelect({ date: selectedDate, time });
    }
  };

  const isTimeSlotAvailable = (timeSlot) => {
    if (!selectedDate) return false;
    
    const dateTime = parseISO(`${selectedDate}T${timeSlot}`);
    const now = new Date();
    
    if (format(parseISO(selectedDate), 'yyyy-MM-dd') === format(now, 'yyyy-MM-dd')) {
      return isAfter(dateTime, now);
    }
    return true;
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div>
        <label className="block text-coffee font-lato mb-2">Select Date</label>
        <input
          type="date"
          min={minDate}
          max={maxDate}
          value={selectedDate}
          onChange={(e) => handleDateChange(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-cafe-brown"
        />
      </div>
      
      {selectedDate && (
        <div>
          <label className="block text-coffee font-lato mb-2">Select Time</label>
          <div className="grid grid-cols-4 gap-2">
            {availableTimeSlots.map((time) => (
              <button
                key={time}
                onClick={() => handleTimeChange(time)}
                disabled={!isTimeSlotAvailable(time)}
                className={`p-2 rounded text-sm ${
                  selectedTime === time
                    ? 'bg-cafe-brown text-white'
                    : isTimeSlotAvailable(time)
                    ? 'bg-white text-coffee hover:bg-gray-100'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}