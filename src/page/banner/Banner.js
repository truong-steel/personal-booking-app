import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@mui/material'
import { Search } from '../search/Search'
import { useNavigate } from 'react-router-dom'
import VillaIcon from '@mui/icons-material/Villa';

const Banner = () => {
    const [showSearch , setShowSearch] = useState(false)
    const navigate = useNavigate()

  return (
    <div className='banner'>
        {/* <div className='banner_search'>
        { showSearch && <Search/>}

            <Button onClick={()=> setShowSearch(!showSearch)}
             variant='outlined' className='banner_searchBtn'>
                {showSearch ? 'Hide' : 'Search Dates'}
                </Button>
        </div> */}
        {/* <div className='banner_options'>
            <VillaIcon/>
        </div> */}
        <div className='banner_info'>
            <h1>Get out and stretch your imagination</h1>
            <h5>Plan a different kind of getaway to uncover the hidden
                gems near you.
            </h5>
            <Button variant='outlined'
            onClick={() => navigate('/search') }
            >
                Explore Nearby
            </Button>
        </div>
    </div>
  )
}

export default Banner