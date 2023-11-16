import { React,useState } from 'react'
import { LuCalendarDays } from "react-icons/lu";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Date = () =>
{
    const dateIcon = <LuCalendarDays />
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) =>
  {
    setSelectedDate(date);
  };
  const CustomInput = ({ value, onClick }) => (
    <div className="custom-input" onClick={onClick}>
      <LuCalendarDays className='date' />
      <span>{value}</span>
    </div>
  );
  return (
    <div>
       
        <div className='datePicker'>
       
        <DatePicker
          
          selected={selectedDate}
          onChange={handleDateChange}
            dateFormat="dd/MM/yyyy" // You can customize the date format
            customInput={<CustomInput className='date'/>}
            placeholderText="Select a date"
           
            
          />
        </div>
      </div>
  )
}

export default Date