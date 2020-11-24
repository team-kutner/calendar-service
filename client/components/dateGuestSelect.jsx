// import React, { useState, useEffect } from 'react';
// import styled, { css } from 'styled-components';
const {React} = window;
const {useState, useEffect} = React;
const {styled} = global;
import GuestSelect from './guestSelect.jsx';
import Popup from './popup.jsx';
import moment from 'moment';
import {CalendarContainer, Checkin, Checkout, Div} from './styles/dateGuestSelect.styles.js';

function DateGuestSelect({maxGuests, checkIn, checkOut, setChangeAppView, setCheckIn, setCheckOut, booked}) {
  const [adult, setAdult] = useState(1);
  const [child, setChild] = useState(0);
  const [infant, setInfant] = useState(0);
  const [invalid, setInvalid] = useState([]);
  const [show, setShow] = useState(false);

  let today = moment();
  let nextM = moment().add(1, 'months');
  const [month, setCurrMonth] = useState(today);
  const [next, setNextMonth] = useState(nextM);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // write a handleSubmit which submits a form upwards containing state info

  let enumerateDays = (start, end) => {
    let invalid = [];
    // this is a temporary solution to incorrect day rendering in the Month component
    start = start.startOf('month');
    end = moment(end, 'MM/DD/YYYY');
    while(start.format('MM/DD/YYYY') !== end.format('MM/DD/YYYY')) {
      invalid.push(start.format('MM/DD/YYYY'));
      start.add(1, 'days');
    }
    return invalid;
  }

  useEffect(() => {
    if (checkIn !== 'Add date') {
      let invalidDates = enumerateDays(today, checkIn);
      setInvalid(invalidDates);
      let currMonth = moment(checkIn);
      let nextMonth = moment(checkIn).add(1, 'months');
      console.log('currMonth: ', currMonth)
      console.log('nextMonth: ', nextMonth)
      setCurrMonth(currMonth);
      setNextMonth(nextMonth);
    }
  }, [checkIn])


  return (
    <CalendarContainer>
      { !show && (<><Checkin id='in' onClick={handleShow}><b>CHECK-IN</b>
        <Div>{checkIn}</Div>
      </Checkin>
      <Checkout id='out' onClick={handleShow}><b>CHECK-OUT</b>
        <Div>{checkOut}</Div>
      </Checkout></>) }

      { show && (<Popup month={month} setCurrMonth={setCurrMonth} next={next} setNextMonth={setNextMonth} invalid={invalid} setInvalid={setInvalid} setChangeAppView={setChangeAppView} close={handleClose} checkIn={checkIn} checkOut={checkOut} setCheckIn={setCheckIn} setCheckOut={setCheckOut} booked={booked}/>)}

      <GuestSelect maxGuests={maxGuests} adult={adult} setAdult={setAdult} child={child} setChild={setChild} infant={infant} setInfant={setInfant}/>
    </CalendarContainer>
  );
}

export default DateGuestSelect;