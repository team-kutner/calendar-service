// import React, { useState, useEffect } from 'react';
// import styled, { css } from 'styled-components';
const {React} = window;
const {useState} = React;
const {styled} = global;
import GuestSelect from './GuestSelect.jsx';
import Popup from './Popup.jsx';
import {CalendarContainer, Checkin, Checkout, Div} from './styles/DateGuestSelect.styles.js';

function DateGuestSelect({maxGuests, checkIn, checkOut, setChange, setCheckIn, setCheckOut, booked}) {
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);
  const [invalid, setInvalid] = useState([]);
  const [click, setClick] = useState(1);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCalendar = function() {
    setCalendar(!calendar);
  };

  // write a handleSubmit which submits a form upwards containing state info

  return (
    <CalendarContainer>
      { !show && (<><Checkin id='in' onClick={handleShow}><b>CHECK-IN</b>
        <Div>{checkIn}</Div>
      </Checkin>
      <Checkout id='out' onClick={handleShow}><b>CHECK-OUT</b>
        <Div>{checkOut}</Div>
      </Checkout></>) }

      {/* This is where the calendar is rendered */}
      { show && (<Popup invalid={invalid} setInvalid={setInvalid} setChange={setChange} close={handleClose} click={click} setClick={setClick} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} booked={booked}/>)}

      <GuestSelect maxGuests={maxGuests} adult={adult} setAdult={setAdult} child={child} setChild={setChild} infant={infant} setInfant={setInfant}/>
    </CalendarContainer>
  );
}

export default DateGuestSelect;