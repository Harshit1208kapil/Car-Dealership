import React from 'react'

const Footer = (props) => {
  const calender = () =>{
    if(props.showCalender){
      props.setShowCalender(prevState => !prevState);
    }
    
  };
  return (
    <div onClick={calender}>
      <footer className="bg-black w-full h-10 text-white flex flex-row fixed bottom-0">
        <h1 className='w-full text-center'>{props.selectedTimeSlot}</h1>
      </footer>
      
    </div>
  )
}

export default Footer
