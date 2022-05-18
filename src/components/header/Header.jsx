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
    const [openOptions, setOpenOptions] = useState(false);

    const handleCounting = (name, operation) => {
        setOptions((prev) => ({
            ...prev,
            [name] : operation === 'i' ?  options[name] + 1 : options[name] - 1,
        }))
    }

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
                            onClick={() => {setOpenDate(!openDate); setOpenOptions(false); }} className="headerSearchText"
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
                        <span className="headerSearchText" onClick={() => {
                            setOpenOptions(!openOptions);
                            setOpenDate(false)
                        }}>
                            {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                        </span>
                        {openOptions && <div className="options">
                            <div className="optionItem">
                                <span className="optionText">
                                    Adult
                                </span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={()=> {
                                        if(options?.adult > 0){
                                            handleCounting("adult", "d")
                                        }
                                    }}>-</button>
                                    <span className="optionCounterNumber">{options?.adult}</span>
                                    <button className="optionCounterButton" onClick={()=> {handleCounting("adult", "i")}}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">
                                    Children
                                </span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={()=> {
                                        if(options?.children > 0){
                                            handleCounting("children", "d")
                                        }
                                    }}>-</button>
                                    <span className="optionCounterNumber">{options?.children}</span>
                                    <button className="optionCounterButton" onClick={()=> {handleCounting("children", "i")}}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">
                                    Room
                                </span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={()=> {
                                        if(options?.room > 0){
                                            handleCounting("room", "d")
                                        }
                                    }}>-</button>
                                    <span className="optionCounterNumber">{options?.room}</span>
                                    <button className="optionCounterButton" onClick={()=> {handleCounting("room", "i")}}>+</button>
                                </div>
                            </div>
                        </div>}
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