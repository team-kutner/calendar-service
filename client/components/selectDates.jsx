// import React, { useState, useEffect } from 'react';
// import styled, { css } from 'styled-components';
const {React} = window;
const {useState} = React;
const {styled} = global;
import GuestSelect from './guestSelect.jsx';
import Popup from './popup.jsx';
import {CalendarContainer, Checkin, Checkout, Div} from './styles/selectDates.styles.js';

function SelectDates(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCalendar = function() {
    setCalendar(!calendar);
  };

  return (
    <CalendarContainer>
      { !show && (<><Checkin id='in' onClick={handleShow}><b>CHECK-IN</b>
        <Div>{props.checkIn}</Div>
      </Checkin>
      <Checkout id='out' onClick={handleShow}><b>CHECK-OUT</b>
        <Div>{props.checkOut}</Div>
      </Checkout></>) }

      { show && (<Popup change={props.change} setChange={props.setChange} close={handleClose} click={props.click} setClick={props.setClick} checkIn={props.checkIn} checkOut={props.checkOut} setCheckIn={props.setCheckIn} setCheckOut={props.setCheckOut} booked={props.booked}/>)}

      <GuestSelect guests={props.guests} adult={props.adult} setAdult={props.setAdult} child={props.child} setChild={props.setChild} infant={props.infant} setInfant={props.setInfant}/>
    </CalendarContainer>
  );
}

export default SelectDates;