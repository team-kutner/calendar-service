// import React, { useState, useEffect } from 'react';
// import styled, { css } from 'styled-components';
const {React} = window;
const {styled} = global;
import moment from 'moment';
import Month from './month.jsx';
import {Frame, Header, Button, Button2, NoButton, Body, Day, Div, Div2, Span, Span2} from './styles/calendar.styles.js';

function Calendar({
  prevButtonValid, setPrevButtonValid, setCheckIn, setCheckOut, close, booked, invalid, setInvalid, setChangeAppView, checkOut, checkIn, month, setCurrMonth, next, setNextMonth
}) {

  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const goBackOneMonth = () => {
    // if the actual month is equal to the current month, then set the prevbuttonvalid to false
    if (month.format('MM') === moment().format('MM')) {
      setPrevButtonValid(false);
    } else {
      setCurrMonth(month.clone().subtract(1, 'months'));
      setNextMonth(next.clone().subtract(1, 'months'));
    }
  }

  const goForwardOneMonth = () => {
    setCurrMonth(month.clone().add(1, 'months'));
    setNextMonth(next.clone().add(1, 'months'));
    setPrevButtonValid(true);
  }

  const selectDate = (e) => {
    let selectedDate = e.target.id;

    if (selectedDate.length === 10) {
      if (checkIn === 'Add date' || checkOut !== 'Add date') {
        setCheckIn(selectedDate);
        setCheckOut('Add date');
      } else {
        setCheckOut(selectedDate);
        close();
        setChangeAppView(true);
      }
    }
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
        {prevButtonValid && (<Button id='prev' onClick={goBackOneMonth}>{`\u003c`}</Button>)}
        {prevButtonValid === false && (<NoButton>{`\u003c`}</NoButton>)}
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
