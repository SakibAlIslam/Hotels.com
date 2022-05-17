import { faBed, faCalendarDays, faCar, faCarCrash, faMagnet, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import './header.css'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { format } from 'date-fns';

const Header = () => {
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openDate, setOpenDate] = useState(false)
    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1,
    })
    const [openOptions, setOpenOptions] = useState(false)

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
                <div className="headerSearch">
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faCarCrash} className="headerIcon" />
                        <input type="text" name="" className="headerSearchInput" id="" placeholder="Where are you going?" />
                    </div>
                    <div
                        className="headerSearchItem"
                    >
                        <FontAwesomeIcon
                            icon={faCalendarDays}
                            className="headerIcon"
                            onClick={() => setOpenDate(!openDate)} />
                        <span
                            onClick={() => setOpenDate(!openDate)} className="headerSearchText"
                        >
                            {`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate, "MM/dd/yyyy")}`}
                        </span>
                        {openDate && <DateRange
                            editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            className="date"
                        />}
                    </div>
                    <div className="headerSearchItem">
                        <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                        <span className="headerSearchText">
                            {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                        </span>
                        <div className="options">
                            <div className="optionItem">
                                <span className="optionText">

                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="headerSearchItem">
                        <button className="headerBtn">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header