import React, { useState } from 'react'
import './Search.css'
import { DateRange, DateRangePicker } from 'react-date-range'
import { Button } from '@mui/base'
import PeopleIcon from '@mui/icons-material/People';
import {useNavigate} from 'react-router-dom'

export const Search = ({type}) => {
    const [openDate , setOpenDate] = useState(false)
    const navigate = useNavigate()
    
    const [date, setDate] = useState([
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]);
    const [openOptions , setOpenOptions] = useState(false)
    const [options , setOptions] = useState({
        adult: 1,
        children: 1,
        room: 1
      })

    const handleOption = (name , operation) => {
        setOptions(prev => {return{
            ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1 
        }})
      }
      
  return (

    <div className='search'>
        <DateRange
        ranges={date} 
        editableDateInputs={true}
        onChange={item => setDate([item.selection])} 
        onClick={() => setOpenDate(!openDate)}
        moveRangeOnFirstSelection={false}
        className='date'
        minDate={new Date()}
        />
            <h2>
                Number of guests <PeopleIcon />
            </h2>
            <input min={0} defaultValue={2} type="number" />
            <Button onClick={() => navigate('/search')}>Search Airbnb</Button>
    </div>
   
  )
}
