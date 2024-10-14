import { useState } from "react"
import React from 'react'

const BookingType = (props) => {
    const [isBookingOpen, setBookingOpen] = useState(false);
    const services = [
      "Car Wash",
      "Car Repairing",
      "Car Painting"
    ];
  
    const toggleDropdown = () => {
        setBookingOpen(!isBookingOpen);
    };
  
    const selectTimeSlot = (slot) => {
      props.setSelectedService(slot);
      setBookingOpen(false);
    };
  
    return (
      <div className="flex flex-col items-center z-50">
        <div className="relative inline-block text-left">
  
          {/* <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400"
          onClick={toggleDropdown}>
          
          <span className="flex flex-col text-sm items-center relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            {props.selectedService}
            <svg className=" w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg></span>
          </button> */}
          <div className='mt-3 mb-3 mr-4 md:mr-32'>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm md:text-1xl px-5 py-2.5 text-center
              mb-2 ml-3 mt-2 "
              onClick={toggleDropdown}>{props.selectedService}</button>
        </div>
          
  
          {isBookingOpen && (
            <div className="absolute right-0 md:right-24 mt-2 w-48 bg-white border rounded shadow-lg">
              {services.map((slot, index) => (
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

export default BookingType;
