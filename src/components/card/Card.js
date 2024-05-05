import React, { useEffect, useState } from 'react'
import './Card.css'
import { getAllRooms } from '../../api/Api'
import axios from 'axios'

const Card = ({src, title , description , price , onClick}) => {

    

    const [rooms , setRooms] = useState([])

    // useEffect(() => {
    //     axios.get('http://localhost:8080/api/rooms')
    //     .then(response => {
    //         setRooms(response.data); 
    //       })
    //       .catch(error => {
    //         console.error('Error fetching hotel data:', error);
    //       });
    // },[])


  return (
    <div className='card'onClick={onClick}>
        <img src={src} alt='' />
        <div className='card_info'>
            <h2>{title}</h2>
            <h4>{description}</h4>
            <h3>{price}</h3>
        </div>
        {/* <div>
            {rooms.map(room => (
                <div key = {room.id}>
                    <h2>{room.title}</h2>
                    <h4>{room.description}</h4>
                    <h3>{room.price}</h3>
                    </div>
            ))}
        </div> */}
    </div>
  )
}

export default Card