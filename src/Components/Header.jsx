import React, { useState } from 'react'
import Calendar from '../Calendar/Calendar';
import BookingType from '../Calendar/BookingType';
import TimeSlot from '../Calendar/TimeSlot';

const Header = (props) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const calender2 = () =>{
    if(props.showCalender){
      props.setShowCalender(prevState => !prevState);
    }
  }
  const toggleDropdown = () => {
    if(isDropdownOpen)
    setDropdownOpen(!isDropdownOpen);
  };

  const calender = () =>{
    props.setShowCalender(prevState => !prevState);
  };
  return (
    <div onClick={toggleDropdown}>
    <header className="bg-black w-full text-white flex flex-row fixed top-0 z-50 h-24">
        <div onClick={calender2} className='flex-grow mt-3 mb-3 ml-6'>
            <h1 className='text-lg md:text-3xl lg:text-3xl xl:text-3xl mt-2.5'>Car Dealership</h1>
        </div>
        
        
        <div onClick={calender2}>
        <BookingType selectedService = {props.selectedService} setSelectedService = {props.setSelectedService}/>
        </div>


        {/* <div onClick={calender2}>
        <TimeSlot selectedTimeSlot= {props.selectedTimeSlot} setSelectedTimeSlot = {props.setSelectedTimeSlot}
        isDropdownOpen = {isDropdownOpen} setDropdownOpen = {setDropdownOpen}/>
        </div> */}
        
        
        <div className='mt-3 mb-3 mr-4 md:mr-32'>
            <button className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm md:text-1xl px-5 py-2.5 text-center
              mb-2 ml-3 mt-2 "
             onClick={calender}>{props.selectedDate}</button>
        </div>
    
    
    </header>
    {props.showCalender && (
        <div className="fixed right-10 mt-24 z-50 flex items-center justify-center align-middle bg-white border-2 border-black text-amber-950 p-4 rounded-3xl shadow-2xl">
         <Calendar selectedTimeSlot= {props.selectedTimeSlot} setSelectedTimeSlot = {props.setSelectedTimeSlot}
         selectedDate = {props.selectedDate} setSelectedDate = {props.setSelectedDate}/>
        </div>
      )}
    </div>
  )
}

export default Header;
