import {faBed, faCar, faMagnet, faPlane, faTaxi} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className="header">
        <div className="headerContainer">
            <div className="headerList">
                <div className="headerListItem active">
                    <FontAwesomeIcon icon={faBed} />
                    <span>Stays</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faPlane} />
                    <span>Flights</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faCar} />
                    <span>Car Rentals</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faMagnet} />
                    <span>Attractions</span>
                </div>
                <div className="headerListItem">
                    <FontAwesomeIcon icon={faTaxi} />
                    <span>Airport Taxi</span>
                </div>
            </div>
            <h1 className="headerTitle">A Lifetime of Discounts? It's Genius.</h1>
            <p className="headerDescription">
                Get Rewarded for your travels - unlock instant savings of 10% or more with a free Hotels.com account.
            </p>
            <button className="headerBtn">
                Sign In / Register
            </button>
        </div>
    </div>
  )
}

export default Header