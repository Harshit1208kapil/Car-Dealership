import { useState } from 'react'
import Header from './Components/Header'
import Body from './Components/Body'
import Footer from './Components/Footer'


function App() {
  
  const [selectedTimeSlot, setSelectedTimeSlot] = useState('Select a time slot');
  const [selectedDate, setSelectedDate] = useState("Select Date");
  const [selectedService, setSelectedService] = useState("Select Service");
  const [showCalender, setShowCalender] = useState(false);
  return (
    <div>
    <Header selectedTimeSlot= {selectedTimeSlot} setSelectedTimeSlot = {setSelectedTimeSlot}
    selectedDate = {selectedDate} setSelectedDate = {setSelectedDate}
    showCalender = {showCalender} setShowCalender = {setShowCalender}
    selectedService = {selectedService} setSelectedService = {setSelectedService} />

    <Body selectedDate = {selectedDate} selectedTimeSlot = {selectedTimeSlot}
    showCalender = {showCalender} setShowCalender = {setShowCalender}
    selectedService = {selectedService} />
    
    <Footer selectedDate = {selectedDate} selectedTimeSlot = {selectedTimeSlot}
    showCalender = {showCalender} setShowCalender = {setShowCalender}
    selectedService = {selectedService} setSelectedService = {setSelectedService} />
    </div>

  )
}

export default App
