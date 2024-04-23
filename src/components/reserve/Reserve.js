import React, { useState } from 'react'
import Header from '../../page/header/Header'
import {faBed, faCalendar, faCalendarDays, faCar, faHouse, faMotorcycle, faPerson, faPlane, faSearch, faTaxi} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Reserve = () => {
  const [openDate , setOpenDate] = useState(false)
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
        children: 1
      })
      const handleOption = (name , operation) => {
        setOptions(prev => {return{
            ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1 
        }})
      }

  return (
    <div>
      <Header/>
      <p>Confirm and Pay</p>
      <h3>Your trip</h3>
      <p> Dates 
      <button onClick={() => setOpenDate(!openDate)} className='btnSearchDate'>
                    {`${date.startDate}`} </button>
                {openDate && <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='date'
            minDate={new Date()}
                />}
      </p>
      <p> Guest
      <button onClick={() => setOpenOptions(!openOptions)} className='btnSearchOption'>{`${options.adult} adult(s) 
                - ${options.children} children(s)`}</button>

                { openOptions && <div className='options'>
                    <div className='optionItem'>
                        <span className='optionText'>Adult</span>
                        <div className='optionCounter'>
                        <button className='optionCounterButton'onClick={() => handleOption('adult','i')}>+</button>
                        <span className='optionCounterNumber'>{options.adult}</span>
                        <button disabled = {options.adult <= 1} className='optionCounterButton'onClick={() => handleOption('adult','d')}>-</button>
                        </div>
                    </div>
                    <div className='optionItem'>
                        <span className='optionText'>Children</span>
                        <div className='optionCounter'>
                        <button className='optionCounterButton'onClick={() => handleOption('children','i')}>+</button>
                        <span className='optionCounterNumber'>{options.children}</span>
                        <button
                         disabled = {options.children <= 0} 
                         className='optionCounterButton'
                         onClick={() => handleOption('children','d')}>-</button>
                        </div>
                    </div>
                    
                </div> }
      </p>
      
    </div>
  )
}

export default Reserve