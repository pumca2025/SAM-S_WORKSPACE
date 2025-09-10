
import React from 'react';
import type { Show } from '../types';

interface SeatSelectorProps {
  show: Show;
  selectedSeats: number[];
  onSeatSelect: (seatNumber: number) => void;
}

const Seat: React.FC<{ seatNumber: number; status: 'available' | 'booked' | 'selected'; onSelect: (seat: number) => void; }> = ({ seatNumber, status, onSelect }) => {
    const getSeatColor = () => {
        switch (status) {
            case 'booked':
                return 'bg-gray-500 cursor-not-allowed';
            case 'selected':
                return 'bg-green-500';
            case 'available':
                return 'bg-gray-200 hover:bg-gray-300';
        }
    };

    return (
        <div
            onClick={() => status === 'available' && onSelect(seatNumber)}
            className={`w-6 h-6 md:w-8 md:h-8 m-1 rounded-t-lg flex items-center justify-center text-xs font-bold transition-colors ${getSeatColor()} ${status !== 'booked' ? 'cursor-pointer' : ''}`}
        >
            {seatNumber + 1}
        </div>
    );
};


const SeatSelector: React.FC<SeatSelectorProps> = ({ show, selectedSeats, onSeatSelect }) => {
  const seatsPerRow = 10;
  
  const getSeatStatus = (seatNumber: number) => {
    if (show.bookedSeats.includes(seatNumber)) return 'booked';
    if (selectedSeats.includes(seatNumber)) return 'selected';
    return 'available';
  };

  const seats = Array.from({ length: show.totalSeats }, (_, i) => i);

  return (
    <div className="p-4 bg-white rounded-lg shadow-lg">
      <h3 className="text-xl font-bold mb-4 text-center text-bms-secondary">Select Your Seats</h3>
      
      <div className="mb-4 bg-gray-700 h-2 rounded-md w-3/4 mx-auto" aria-hidden="true">
        <p className="text-center text-sm text-gray-400 mt-2">SCREEN</p>
      </div>

      <div className="flex flex-wrap justify-center items-center max-w-md mx-auto">
        {seats.map((seatNumber) => (
          <Seat
            key={seatNumber}
            seatNumber={seatNumber}
            status={getSeatStatus(seatNumber)}
            onSelect={onSeatSelect}
          />
        ))}
      </div>

      <div className="mt-6 flex justify-center items-center space-x-4">
        <div className="flex items-center">
            <div className="w-5 h-5 rounded bg-gray-200 mr-2"></div>
            <span className="text-sm">Available</span>
        </div>
        <div className="flex items-center">
            <div className="w-5 h-5 rounded bg-green-500 mr-2"></div>
            <span className="text-sm">Selected</span>
        </div>
        <div className="flex items-center">
            <div className="w-5 h-5 rounded bg-gray-500 mr-2"></div>
            <span className="text-sm">Booked</span>
        </div>
      </div>
    </div>
  );
};

export default SeatSelector;
