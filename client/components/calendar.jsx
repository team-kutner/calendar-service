// import React, { useState, useEffect } from 'react';
// import styled, { css } from 'styled-components';
const {React} = window;
const {useState, useEffect} = React;
const {styled} = global;
import moment from 'moment';
import Month from './Month.jsx';
import {Frame, Header, Button, Button2, NoButton, Body, Day, Div, Div2, Span, Span2} from './styles/Calendar.styles.js';

function Calendar({
  click, setClick, setCheckIn, setCheckOut, close, booked, invalid, setInvalid, setChange, checkOut, checkIn
}) {
  let today = moment();
  let nextM = moment().add(1, 'months');
  const [month, setCurrMonth] = useState(today);
  const [next, setNextMonth] = useState(nextM);
  const [counter, setCounter] = useState(0); // counter for previous button?
  // const [day, setDay] = useState();
  // const [invalid, setInvalid] = useState([]);

  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const goBackOneMonth = () => {
    setCurrMonth(month.clone().subtract(1, 'months'));
    setNextMonth(next.clone().subtract(1, 'months'));
    setCounter(counter - 1);
  }

  const goForwardOneMonth = () => {
    setCurrMonth(month.clone().add(1, 'months'));
    setNextMonth(next.clone().add(1, 'months'));
    setCounter(counter + 1);
    console.log('moment: ', moment('12/11/2020', 'MM/DD/YYYY'));
  }

  // Return an array of all invalid days within the defined range.
  let enumerateDays = (start, end) => {
    let invalid = [];

    start = moment(start, 'MM/DD/YYYY');
    end = moment(end, 'MM/DD/YYYY');
    while(start.format('MM/DD/YYYY') !== end.format('MM/DD/YYYY')) {
      invalid.push(start.format('MM/DD/YYYY'));
      start.add(1, 'days');
    }
    return invalid;
  }

  const selectDate = (e) => {
    let selectedDate = e.target.id;

    if (selectedDate.length === 10) {
      setClick(click + 1); // ??????????

      if ((click % 2 === 1) || (checkOut !== 'Add date')) {
        setCheckIn(selectedDate);
        setCheckOut('Add date');
        setInvalid(enumerateDays(today, selectedDate));
      } else {
        setCheckOut(selectedDate);
        close();
        setChange(true);
      }
    }
    console.log('props invalid: ', invalid)
    console.log('invalid: ', invalid)
  }

  let formatMonth = month.format('YYYYMMDD');
  let formatNextMonth = next.format('YYYYMMDD');

  let year = parseInt(formatMonth.slice(0, 4));
  let currMonth = parseInt(formatMonth.slice(4, 6));

  let nextYear = parseInt(formatNextMonth.slice(0, 4));
  let nextMonth = parseInt(formatNextMonth.slice(4, 6));

  return (
    <Frame onClick={selectDate} id='frame'>
      <Header>
        {counter > 0 && (<Button id='prev' onClick={goBackOneMonth}>{`\u003c`}</Button>)}
        {counter === 0 && (<NoButton>{`\u003c`}</NoButton>)}
        <Div>{MONTHS[currMonth - 1]} {year}</Div>
        <Div2>{MONTHS[nextMonth - 1]} {nextYear}</Div2>
        <Button2 id='next' onClick={goForwardOneMonth}>{`\u003e`}</Button2>
      </Header>

      <Body>
        <Month month={month} checkIn={checkIn} checkOut={checkOut} booked={booked} invalid={invalid} Span={Span} />
        <Month month={next} checkIn={checkIn} checkOut={checkOut} booked={booked} invalid={invalid} Span={Span2} next />
      </Body>
    </Frame>
  );
}


export default Calendar;