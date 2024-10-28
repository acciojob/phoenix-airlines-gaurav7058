import React from 'react'
import "../styles/FlightSearch.css"
export default function Flight_Search() {
  return (
    <div className='flight-search-container'>
      <form action="">
        <div className="radio-option flight-search-item">
        <input type="radio" name='option'/>
        <label htmlFor="">One Way</label>
        <input type="radio" name='option'/>
        <label htmlFor="">Round Trip</label>
        </div>
        <div className="flight-search-item">
            <select name="" id="">
                <option value="">Source City</option>
            </select>
        </div>
        <div className="flight-search-item">
            <select name="" id="">
                <option value="">Destination City</option>
            </select>
        </div>
        <div className="flight-search-item">
            <input type="date" />
        </div>
        <div className="flight-search-item">
            <button>SERACH FIGHT</button>
        </div>
      </form>
    </div>
  )
}
