import dayjs from 'dayjs';
import React, { useState } from 'react'
import TimeSlot from './TimeSlot';
import BookingType from './BookingType';

const Calendar = (props) => {
  const monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const today = dayjs();

  const [month, setMonth] = useState(today.month());
  const [year, setYear] = useState(today.year());
  const [selectedDay, setSelectedDay] = useState(today.date());
  
  const MonthBack = () =>{
    if(month===0){
      setMonth(11)
      setYear(year-1)
    }
    else{
      setMonth(month-1);
    }

  }
  const MonthAhead = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const daysInMonth = dayjs(`${year}-${month + 1}`).daysInMonth();
  
  let firstDayOfMonth = dayjs(`${year}-${month + 1}-01`).day();

  firstDayOfMonth = (firstDayOfMonth === 0) ? 6 : firstDayOfMonth - 1;
  const calendarDays = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
  calendarDays.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
  calendarDays.push(i);
  }
  
  const remainingDays = 7 - (calendarDays.length % 7);
  if (remainingDays < 7) {
    for (let i = 0; i < remainingDays; i++) {
      calendarDays.push(null);
    }
  }

  const dayClicked = (day) => {
    setSelectedDay(day);
    props.setSelectedDate(day + "-" + (month + 1) + "-" + year);
    }
    

  return (
    <div>
      <header className="flex flex-col items-center">

        <div className="flex items-center">
        <button className="text-3xl font-bold absolute left-3" onClick={MonthBack}>&lt;</button>
        <h1 className="text-2xl font-bold mt-1">{monthName[month]}- {year}</h1>  
        <button className="text-3xl font-bold absolute right-3" onClick={MonthAhead}>&gt;</button>
        </div>
        
      </header>
      
      <div className="mt-5">
      <h1 className="items-center grid grid-cols-7 text-center text-base font-medium">
      {weekDays.map((day, index) => (
        <span key={index}>{day}</span>
      ))}</h1>
      </div>

      <div className="grid grid-row-5 grid-cols-7 grid-flow-row">
        {calendarDays.map((day, index) => (
      
      <div key={index} className={`border p-2 h-10 w-10 rounded-sm text-center
      ${day === selectedDay ? 'bg-blue-500 text-white' : 'bg-white text-black hover:bg-gray-200'}`}
      onClick={ () => dayClicked(day)}>
        {day ? day : ' '}
      </div>
    ))}
      
      </div>

      
            
    </div>
  )
}

export default Calendar;
