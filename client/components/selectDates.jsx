import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import GuestSelect from './guestSelect.jsx';
import Popup from './popup.jsx';

const CalendarContainer = styled.div`
display: grid;
grid-area: calendar;
grid-template-columns: 1fr 1fr;
grid-template-rows: 50% 50%;
grid-template-areas:  "checkin checkout"
                      "guest guest";
position: relative;
`;

const Checkin = styled.div`
grid-area: checkin;
border: 1px solid	#717171;
border-radius: 15px 0 0 0;
padding: 20px;
font-size: 12px;
cursor: pointer;
align-self: center;
`;

const Checkout = styled.div`
grid-area: checkout;
border: 1px solid #717171;
border-radius: 0 15px 0 0;
padding: 20px;
font-size: 12px;
cursor: pointer;
align-self: center;
`;

function SelectDates(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCalendar = function() {
    setCalendar(!calendar);
  };

  return (
    <CalendarContainer>
      { !show && (<><Checkin onClick={handleShow}><b>CHECK-IN</b>
        <div style={{'color': '#717171', 'font-size': '14px'}}>{props.checkIn}</div>
      </Checkin>
      <Checkout onClick={handleShow}><b>CHECK-OUT</b>
        <div style={{'color': '#717171', 'font-size': '14px'}}>{props.checkOut}</div>
      </Checkout></>) }

      { show && (<Popup change={props.change} setChange={props.setChange} close={handleClose} click={props.click} setClick={props.setClick} checkIn={props.checkIn} checkOut={props.checkOut} setCheckIn={props.setCheckIn} setCheckOut={props.setCheckOut} booked={props.booked}/>)}
      <GuestSelect guests={props.guests} adult={props.adult} setAdult={props.setAdult} child={props.child} setChild={props.setChild} infant={props.infant} setInfant={props.setInfant}/>
    </CalendarContainer>
  );
}

export default SelectDates;