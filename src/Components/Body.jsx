import React from 'react'
import Card from './Card';
import data from '../assets/Data';

const Body = (props) => {
  
  const calender = () =>{
    if(props.showCalender){
      props.setShowCalender(prevState => !prevState);
    }
  }

  return (
    <div onClick={calender} className=" flex flex-col pb-10 pt-24">
      <Card selectedDate = {props.selectedDate}
      selectedService = {props.selectedService}/> 
      
    </div>
  )
}

export default Body;