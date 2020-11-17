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
border: 1px solid	#505050;
border-radius: 15px 0 0 0;
padding: 20px;
font-size: 12px;
cursor: pointer;
align-self: center;
`;

const Checkout = styled.div`
grid-area: checkout;
border: 1px solid #505050;
border-radius: 0 15px 0 0;
padding: 20px;
font-size: 12px;
cursor: pointer;
align-self: center;
`;

// const Modal = styled.div`
// position: absolute;
// width: 661px;
// height: 464px;
// display: grid;
// grid-template-columns: repeat(1fr, 4);
// grid-template-rows: 86px, 303px, 35px;
// grid-template-areas:  "select select checkIn checkOut"
//                       "calendar calendar calendar calendar"
//                       "blank blank close close";
// padding: 24px;
// background: white;
// right: 0;
// border-radius: 15px;
// z-index: 12;
// box-shadow: 0 0 20px #DCDCDC;
// column-gap: 0px;
// `;

// const CheckinInput = styled.input`
// grid-area: 'checkIn';
// border: 1px solid	#717171;
// border-radius: 15px;
// padding: 20px;
// align-self: center;
// justify-self: end;
// font-size: 14px;
// width: 135px;
// height: 54px;
// `;

// const CheckoutInput = styled.div`
// grid-area: checkOut;
// border: 1px solid #717171;
// border-radius: 15px;
// padding: 20px;
// font-size: 12px;
// align-self: center;
// justify-self: start;
// background: rgb(0,0,0,0.4);
// width: 135px;
// height: 54px;
// `;

// const Header = styled.div`
// font-size: 22px;
// grid-area: 'select';
// `;

// const Notes = styled.div`
// font-size: 14px;
// `;

function Calendar(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCalendar = function() {
    setCalendar(!calendar);
  };

  return (
    <CalendarContainer>
      { !show && (<><Checkin onClick={handleShow}><b>CHECK-IN</b>
        <div style={{'color': '#717171', 'font-size': '14px'}}>Add date</div>
      </Checkin>
      <Checkout onClick={handleShow}><b>CHECK-OUT</b>
        <div style={{'color': '#717171', 'font-size': '14px'}}>Add date</div>
      </Checkout></>) }

      { show && (<Popup close={handleClose}/>)}
      <GuestSelect guests={props.guests}/>
    </CalendarContainer>
  );
}

export default Calendar;