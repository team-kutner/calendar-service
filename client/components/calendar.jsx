import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import moment from 'moment';

const Frame = styled.div`
width: 650px;
height: 350px;
grid-area: calendar;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 20% 80%;
grid-template-areas: "month"
                     "body";
`;

const Header = styled.div`
font-size: 16px;
grid-area: month;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-rows: 50% 50%;
grid-template-areas: "month1 month2";
`;

const Button = styled.button`
cursor: pointer;
background: none;
border: none;
`;

const NoButton = styled(Button)`
cursor: no-drop;
color: #B0B0B0;
`;

const Body = styled.div`
width: 100%;
grid-area: body;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-areas: "cal1 cal2";
`;

const Day = styled.div`
width: 14%;
height: 45px;
display: flex;
flex-wrap: wrap;
align-items: center;
justify-content: center;
`;

const DayNum = styled(Day)`
  cursor: pointer;
    &:hover {
      border: 1px solid black;
      border-radius: 50%;
    }
`;

const DayBook = styled(Day)`
text-decoration: line-through;
color: #B0B0B0;
`;

function Calendar(props) {
  let today = moment();
  let nextM = moment().add(1, 'months');
  const [month, setCurrMonth] = useState(today);
  const [next, setNextMonth] = useState(nextM);
  const [prev, setPrev] = useState(0);


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
  }

  const handleDateSelect = (e) => {
    // first click is checkin
    console.log('target: ', e.target.id);
    let selectedDate = e.target.id;
    if (selectedDate.length > 0) {
      props.setClick(props.click + 1)
      console.log('click: ', props.click);
      if (props.click % 2 === 1) {
        props.setCheckIn(e.target.id)
        props.setCheckOut('Add date');
      } else {
        props.setCheckOut(e.target.id);
        props.close();
        props.setChange(!props.change);
      }

    }
    // second click is checkout and re-renders the page
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
  let day = parseInt(formatMonth.slice(6));

  let nextYear = parseInt(formatNextMonth.slice(0, 4));
  let nextMonth = parseInt(formatNextMonth.slice(4, 6));
  let nextDay = parseInt(formatNextMonth.slice(6));

  let start = month.startOf('month').day();
  let start2 = next.startOf('month').day();

  return (
    <Frame onClick={handleDateSelect} id='frame'>
      <Header>
        {prev > 0 && (<Button onClick={handlePrevClick}
          style={{'grid-area': 'month1', 'align-self': 'end', 'justify-self': 'start'}}>{`\u003c`}</Button>)}
        {prev === 0 && (<NoButton style={{'grid-area': 'month1', 'align-self': 'end', 'justify-self': 'start'}}>{`\u003c`}</NoButton>)}

        <div style={{'grid-area': 'month1', 'align-self': 'end', 'justify-self': 'center'}}>
          {MONTHS[currMonth - 1]} {year}
        </div>

        <div style={{'grid-area': 'month2', 'align-self': 'end', 'justify-self': 'center'}}>
          {MONTHS[nextMonth - 1]} {nextYear}
        </div>
        <Button onClick={handleNextClick} style={{'grid-area': 'month2', 'align-self': 'end', 'justify-self': 'end'}}>{`\u003e`}
        </Button>
      </Header>

      <Body>
        <span style={{'grid-area': 'cal1', 'align-self': 'start', 'display': 'flex', 'flex-wrap': 'wrap'}}>
          {DAYSWEEK.map(d => {return (<Day>{d}</Day>)})}
          {Array(DAYS[currMonth - 1] + (start))
            .fill(null)
            .map((_, index) => {
              let d = index - (start - 1);
              let hidden = moment().set({'year': year, 'month': currMonth-1, 'date': d}).format('YYYY-MM-DD');
              let selected = moment().set({'year': year, 'month': currMonth-1, 'date': d}).format('MM/DD/YYYY');
              if (props.booked.includes(hidden) || (d < formatToday && currMonth === parseInt(today.format('MM')))) {
                return (
                  <DayBook key={index}>{d > 0 ? d : ''}</DayBook>
                )
              } else {
                return (<DayNum key={index} id={selected}>{d > 0 ? d : ''}</DayNum>)
              }
            })
          }
        </span>

        <span style={{'grid-area': 'cal2', 'align-self': 'start', 'display': 'flex', 'flex-wrap': 'wrap'}}>
          {DAYSWEEK.map(d => {return (<Day>{d}</Day>)})}
          {Array(DAYS[nextMonth - 1] + (start2))
            .fill(null)
            .map((_, index) => {
              let d = index - (start2 - 1);
              let hidden = moment().set({'year': nextYear, 'month': nextMonth-1, 'date': d}).format('YYYY-MM-DD');
              let selected = moment().set({'year': nextYear, 'month': nextMonth-1, 'date': d}).format('MM/DD/YYYY');
              if (props.booked.includes(hidden)) {
                return (<DayBook key={index}>{d > 0 ? d : ''}</DayBook>)
              } else {
                return (<DayNum key={index} id={selected}>{d > 0 ? d : ''}</DayNum>)
              }
            })
          }
        </span>
      </Body>
    </Frame>
  );
}

export default Calendar;