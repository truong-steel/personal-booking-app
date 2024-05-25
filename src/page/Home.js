import React, { useEffect, useState } from 'react'
import './Home.css'
import Banner from './banner/Banner'
import Card from '../components/card/Card'
import Header from './header/Header'
import Footer from './footer/Footer'
import { useNavigate } from 'react-router-dom'
import { api, getHomestay } from '../api/Api'


const Home = () => {
  const navigate = useNavigate()
  const [data, setData] = useState(null);

  useEffect(() => {
    api.get("/api/homestays").then((data) => setData(data.data.content))
  }, []);
  console.log('_data_', data)
  return (
    <div className='home'>
      <Header />
      <Banner />
      <div className='home_section'>
        <Card
          src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
          title="Unique stays"
          description="Spaces that are more than just a place to sleep."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className='home_section' >
        {data && data.length > 0 && data.map((i) => <Card 
          onClick={() => navigate(`/room/id`)}
          src={i.homestayImage || ''}
          title={i.homestayName || ''}
          description={i.description || ''}
          price="£130/night"
        />) }

      </div>
      <Footer />
    </div>
  )
}

export default Home