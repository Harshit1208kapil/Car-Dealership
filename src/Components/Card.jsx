import React from 'react';
import data from '../assets/Data';

const Card = (props) => {
  const filteredDealers = data.filter(dealer => 
    dealer.bookings && dealer.bookings.some(booking => booking.date === props.selectedDate)
  );

  return (
    <div className="my-3 mr-5 ml-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((dealer, index) => {
        const booking = dealer.bookings ? dealer.bookings.find(booking => booking.date === props.selectedDate) : null;
        
        return (
          <a  
            key={index} 
            href="#"
            className="block max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 transform hover:scale-110 transition duration-300 ease-in-out">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {dealer.name}
            </h5>
            <p className="text-gray-700 dark:text-gray-400">
              Location: {dealer.location}
            </p>
            <div className="text-gray-700 dark:text-gray-400">
              {booking ? (
                <>
                  {props.selectedService === 'Car Wash' && (
                    <p><strong>Car Wash:</strong> {booking.carWash.join(', ')}</p>
                  )}
                  {props.selectedService === 'Car Repairing' && (
                    <p><strong>Car Repair:</strong> {booking.carRepair ? booking.carRepair.join(', ') : 'N/A'}</p>
                  )}
                  {props.selectedService === 'Car Painting' && (
                    <p><strong>Car Paint:</strong> {booking.carPaint ? booking.carPaint.join(', ') : 'N/A'}</p>
                  )}
                  {props.selectedService === "Select Service" && (
                    <>
                      <p><strong>Car Wash:</strong> {booking.carWash.join(', ')}</p>
                      <p><strong>Car Repair:</strong> {booking.carRepair ? booking.carRepair.join(', ') : 'N/A'}</p>
                      <p><strong>Car Paint:</strong> {booking.carPaint ? booking.carPaint.join(', ') : 'N/A'}</p>
                    </>
                  )}
                </>
              ) : (
                // If no booking for the selected date, show only dealer name and location
                <p className="text-gray-700 dark:text-gray-400">No bookings available for the selected date.</p>
              )}
            </div>
          </a>
        );
      })}
    </div>
  );
};

export default Card;
