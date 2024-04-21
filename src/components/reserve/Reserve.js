import React, { useState } from 'react'
import './Reserve.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import axios from 'axios';


const Reserve = ({setOpen , roomId }) => {
    const [selectedRooms, setSelectedRooms] = useState([]);
    // const { data, loading, error } = useFetch(`/hotels/room/${hotelId}`);
//     const { dates } = useContext(SearchContext);

//   const getDatesInRange = (startDate, endDate) => {
//     const start = new Date(startDate);
//     const end = new Date(endDate);

//     const date = new Date(start.getTime());

//     const dates = [];

//     while (date <= end) {
//       dates.push(new Date(date).getTime());
//       date.setDate(date.getDate() + 1);
//     }

//     return dates;
//   };

//   const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

//   const isAvailable = (roomNumber) => {
//     const isFound = roomNumber.unavailableDates.some((date) =>
//       alldates.includes(new Date(date).getTime())
//     );

//     return !isFound;
//   };

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]
        : selectedRooms.filter((item) => item !== value)
    );
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    // try {
    //   await Promise.all(
    //     selectedRooms.map((roomId) => {
    //       const res = axios.put(`/rooms/availability/${roomId}`, {
    //         dates: alldates,
    //       });
    //       return res.data;
    //     })
    //   );
    //   setOpen(false);
    //   navigate("/");
    // } catch (err) {}
  };
  return (
    <div>
        <div className="reserve">
      <div className="rContainer">
        <FontAwesomeIcon
          icon={faCircleXmark}
          className="rClose"
        //   onClick={() => setOpen(false)}
        />
        <span>Select your rooms:</span>
        {/* {data.map((item) => ( */}
          <div className="rItem" >
            <div className="rItemInfo">
              <div className="rTitle"><p>item.title</p></div>
              <div className="rDesc"><p>item.desc</p></div>
              <div className="rMax">
                Max people: <b>item.maxPeople</b>
              </div>
              <div className="rPrice"><p>item.price</p></div>
            </div>
            <div className="rSelectRooms">
              {/* {item.roomNumbers.map((roomNumber) => ( */}
                <div className="room">
                  <label><p>roomNumber.number</p></label>
                  <input
                    type="checkbox"
                    // value
                    // onChange
                    // disabled
                  />
                </div>
              {/* ))} */}
            </div>
          </div>
        {/* ))} */}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
    </div>
  )
}

export default Reserve