import dayjs from 'dayjs';
import React, { useState } from 'react'

const TimeSlot = (props) => {
  const timeSlots = [
    "09 AM - 10AM",
    "10 AM - 11 AM",
    "11 AM - 12 PM",
    "12 PM - 1 PM",
    "01 PM - 2 PM",
    "02 PM - 3 PM",
    "03 PM - 4 PM",
    "04 PM - 5 PM",
    "05 PM - 6 PM",
    "06 PM - 7 PM",
    "07 PM - 8 PM",
    "08 PM - 9 PM",
    "09 PM - 10 PM",
    
  ];

  const toggleDropdown = () => {
    props.setDropdownOpen(!props.isDropdownOpen);
  };

  const selectTimeSlot = (slot) => {
    props.setSelectedTimeSlot(slot);
    props.setDropdownOpen(false);
  };

  return (
    <div className="flex flex-col items-center absolute right-1/3 z-50">
      <div className="relative inline-block text-left mt-4">

        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
        onClick={toggleDropdown}>
        
        <span className="flex flex-col items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          {props.selectedTimeSlot}
          <svg className=" w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg></span>
        </button>
        

        {props.isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                onClick={() => selectTimeSlot(slot)}
                className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
              >
                {slot}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default TimeSlot
