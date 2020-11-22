// import React, { useState, useEffect } from 'react';
// import styled, { css } from 'styled-components';
const {React} = window;
const {useState, useEffect} = React;
const {styled} = global;
import moment from 'moment';
import {Frame, Header, Button, Button2, NoButton, Body, Day, DayNum, DayBook, Div, Div2, Span, Span2} from './styles/calendar.styles.js';

function Calendar(props) {
  let today = moment();
  let nextM = moment().add(1, 'months');
  const [month, setCurrMonth] = useState(today);
  const [next, setNextMonth] = useState(nextM);
  const [prev, setPrev] = useState(0);
  const [day, setDay] = useState();
  const [invalid, setInvalid] = useState([]);

  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYSWEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const handlePrevClick = () => {
    setCurrMonth(month.clone().subtract(1, 'months'));
    setNextMonth(next.clone().subtract(1, 'months'));
    setPrev(prev - 1);
  }

  const handleNextClick = () => {
    setCurrMonth(month.clone().add(1, 'months'));
    setNextMonth(next.clone().add(1, 'months'));
    setPrev(prev + 1);
    console.log('moment: ', moment('12/11/2020', 'MM/DD/YYYY'));
  }

  const handleDateSelect = (e) => {
    let selectedDate = e.target.id;

    if (selectedDate.length === 10) {
      props.setClick(props.click + 1);
      if ((props.click % 2 === 1) || (props.checkOut !== 'Add date')) {
        props.setCheckIn(e.target.id);
        props.setCheckOut('Add date');
        setDay(selectedDate);
        setInvalid(enumerateDays(today, selectedDate));
      } else {
        props.setCheckOut(e.target.id);
        props.close();
        props.setChange(true);
      }
    }
  }

  let enumerateDays = (start, end) => {
    let invalid = [];
    start = moment(start, 'MM/DD/YYYY');
    end = moment(end, 'MM/DD/YYYY');
    start = start.add(1, 'days')
    while(start.format('MM/DD/YYYY') !== end.format('MM/DD/YYYY')) {
      invalid.push(start.format('MM/DD/YYYY'));
      start.add(1, 'days')
    }
    return invalid;
  }

  useEffect(() => {
    formatMonth = month.format('YYYYMMDD');
    formatNextMonth = next.format('YYYYMMDD');
  }, [month, next]);

  let formatMonth = month.format('YYYYMMDD');
  let formatNextMonth = next.format('YYYYMMDD');
  let formatToday = parseInt(today.format('DD'));

  let year = parseInt(formatMonth.slice(0, 4));
  let currMonth = parseInt(formatMonth.slice(4, 6));

  let nextYear = parseInt(formatNextMonth.slice(0, 4));
  let nextMonth = parseInt(formatNextMonth.slice(4, 6));

  let start = month.startOf('month').day();
  let start2 = next.startOf('month').day();

  return (
    <Frame onClick={handleDateSelect} id='frame'>
      <Header>
        {prev > 0 && (<Button id='prev' onClick={handlePrevClick}>{`\u003c`}</Button>)}
        {prev === 0 && (<NoButton>{`\u003c`}</NoButton>)}
        <Div>{MONTHS[currMonth - 1]} {year}</Div>
        <Div2>{MONTHS[nextMonth - 1]} {nextYear}</Div2>
        <Button2 id='next' onClick={handleNextClick}>{`\u003e`}</Button2>
      </Header>

      <Body>
        <Span>
          {DAYSWEEK.map(d => {return (<Day>{d}</Day>)})}
          {Array(DAYS[currMonth - 1] + (start))
            .fill(null)
            .map((_, index) => {
              let d = index - (start - 1);
              let hidden = moment().set({'year': year, 'month': currMonth-1, 'date': d}).format('YYYY-MM-DD');
              let selected = moment().set({'year': year, 'month': currMonth-1, 'date': d}).format('MM/DD/YYYY');
              if (props.booked.includes(hidden) || (d < formatToday && currMonth === parseInt(today.format('MM'))) || invalid.includes(selected)) {
                return (<DayBook key={index}>{d > 0 ? d : ''}</DayBook>)
              } else {
                return (<DayNum key={index} id={selected} select={selected == day}>{d > 0 ? d : ''}</DayNum>)
              }
            })
          }
        </Span>

        <Span2>
          {DAYSWEEK.map(d => {return (<Day>{d}</Day>)})}
          {Array(DAYS[nextMonth - 1] + (start2))
            .fill(null)
            .map((_, index) => {
              let d = index - (start2 - 1);
              let hidden = moment().set({'year': nextYear, 'month': nextMonth-1, 'date': d}).format('YYYY-MM-DD');
              let selected = moment().set({'year': nextYear, 'month': nextMonth-1, 'date': d}).format('MM/DD/YYYY');
              if (props.booked.includes(hidden) || invalid.includes(selected)) {
                return (<DayBook key={index}>{d > 0 ? d : ''}</DayBook>)
              } else {
                return (<DayNum key={index} id={selected} select={selected == day}>{d > 0 ? d : ''}</DayNum>)
              }
            })
          }
        </Span2>
      </Body>
    </Frame>
  );
}

export default Calendar;