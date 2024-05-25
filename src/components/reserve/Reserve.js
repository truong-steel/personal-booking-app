import React, { useState } from 'react'
import Header from '../../page/header/Header'
import {faBed, faCalendar, faCalendarDays, faCar, faHouse, faMotorcycle, faPerson, faPlane, faSearch, faTaxi} from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../../page/footer/Footer'
import './Reserve.css'
import axios from 'axios'
import { Form, Input, Button, DatePicker, message } from 'antd';

const { Item } = Form;

const Reserve = () => {
  const [hotelId, setHotelId] = useState('');
  const [roomId, setRoomId] = useState('');
  const [totalGuest, setGuestName] = useState('');
  const [startDate, setCheckInDate] = useState(null);
  const [endDate, setCheckOutDate] = useState(null);

  const handleBooking = async (values) => {
    const { hotelId, roomId, totalGuest, startDate, endDate } = values;
    const url = `http://localhost:8080/api/booking/${hotelId}/${roomId}`;
    const bookingDetails = {
      totalGuest,
      startDate ,
      endDate ,
    };

    try {
      const response = await axios.post(url, bookingDetails);
      if (response.status === 201) {
        message.success('Booking successful!');
      } else {
        message.error('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('There was an error booking the hotel room!', error);
      message.error('Booking failed. Please try again.');
    }
  };

  return (
    <div>
      <Header/>
    <div style={{ maxWidth: 600, margin: '0 auto', padding: 20 }}>
      <h1 style={{ textAlign: 'center', color: '#FF5A5F' }}>Book a Hotel Room</h1>
      <Form
        layout="vertical"
        onFinish={handleBooking}
      >
        <Item
          label="Hotel ID"
          name="hotelId"
          rules={[{ required: true, message: 'Please input the Hotel ID!' }]}
        >
          <Input />
        </Item>
        <Item
          label="Room ID"
          name="roomId"
          rules={[{ required: true, message: 'Please input the Room ID!' }]}
        >
          <Input />
        </Item>
        <Item
          label="Total Guest"
          name="totalGuest"
          rules={[{ required: true, message: 'Please input the Guest Name!' }]}
        >
          <Input />
        </Item>
        <Item
          label="Check-In Date"
          name="startDate"
          rules={[{ required: true, message: 'Please select the Check-In Date!' }]}
        >
          <DatePicker />
        </Item>
        <Item
          label="Check-Out Date"
          name="endDate"
          rules={[{ required: true, message: 'Please select the Check-Out Date!' }]}
        >
          <DatePicker />
        </Item>
        <Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Book Now
          </Button>
        </Item>
      </Form>
      {/* {bookingStatus && <p>{bookingStatus}</p>} */}
      <Footer/>
      </div>
    </div>
  )
}

export default Reserve