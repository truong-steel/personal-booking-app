import React, { useState } from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LanguageIcon from '@mui/icons-material/Language';
import { Link, useNavigate } from 'react-router-dom';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBed, faCalendar, faCalendarDays, faCar, faHouse, faMotorcycle, faPerson, faPlane, faSearch, faTaxi} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import { Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons'
import Login from '../../components/login/Login';


function Header() {
    const [destination , setDestination] = useState('')
    const [openDate , setOpenDate] = useState(false)
    const [openRegister , setOpenRegister] = useState(false)
    const showRegister = () => {setOpenRegister(true)}
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

      const navigate = useNavigate()
    
      const handleOption = (name , operation) => {
        setOptions(prev => {return{
            ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1 
        }})
      }
      const handleSearch = () => {
        navigate('/search', {state:{destination,date,options}})
      }
      const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" onClick={() => navigate('/login')} >
              Login
            </a>
          ),
        },
      ];
  return (
    <div className='header'>
      <Link to='/'>
      <img 
            className='header_icon'
            src= {process.env.PUBLIC_URL + '/2.png'}
            alt=''    
        />
      </Link>
      <div className='header_center'>
      
            <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faBed} className='headerIcon'/>
                <input type='text' placeholder='Where are you going ?' 
                className='headerSearchInput'
                onChange={e => setDestination(e.target.value)}
                />
            </div>

            <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faCalendarDays} className='headerIcon'/>
                <button onClick={() => setOpenDate(!openDate)} className='btnSearchDate'>
                    Check In-Out </button>
                {openDate && <DateRange
            editableDateInputs={true}
            onChange={item => setDate([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={date}
            className='date'
            minDate={new Date()}
                />}
            </div>
           
            <div className='headerSearchItem'>
                <FontAwesomeIcon icon={faPerson} className='headerIcon'/>
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
            </div>
          
        <SearchIcon
        className='btnSearch'
        onClick={handleSearch}
        />
       
      </div>
      
      
        <div className='header_right'>
          
            <p className='header_text' 
            onClick={() => navigate('/manager-register')}
            >Become a host</p>
           
            <LanguageIcon/>
            <Dropdown 
             menu={{
              items,
            }}>
            <a onClick={(e) => e.preventDefault()}>
      <Space>
        <DownOutlined />
      </Space>
    </a>
            </Dropdown>
            
            <Avatar
            className='avatar_profile'
            onClick={() => navigate('/profile')}
            />
        </div>
    </div>
  )
}

export default Header