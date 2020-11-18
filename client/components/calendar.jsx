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

const Body = styled.div`
width: 100%;
grid-area: body;
display: grid;
grid-template-columns: 1fr 1fr;
grid-template-areas: "cal1 cal2";
`;

const Day = styled.div`
width: 14%;
height: 40px;
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

function Calendar(props) {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYSWEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  // get first day of the current month, then have to start the calendar from that specific day

  // useEffect(() => {
  //   setDay(date.date());
  //   setMonth(date.month());
  //   setNextMonth(date.add(1, 'months'));
  //   setYear(date.year());

  // }, [date]);

  let formatMonth = props.month.format('YYYYMMDD');
  let formatNextMonth = props.nextMonth.format('YYYYMMDD');

  let year = parseInt(formatMonth.slice(0, 4));
  let month = parseInt(formatMonth.slice(4, 6));
  let day = parseInt(formatMonth.slice(6));

  let nextYear = parseInt(formatNextMonth.slice(0, 4));
  let nextMonth = parseInt(formatNextMonth.slice(4, 6));
  let nextDay = parseInt(formatNextMonth.slice(6));

  let start = props.month.startOf('month').day();
  let start2 = props.nextMonth.startOf('month').day();

  console.log('start: ', month)
  console.log('start2: ', nextMonth)

  return (
    <Frame>

      <Header>
        <Button onClick={(props.handlePrevClick)}
        style={{'grid-area': 'month1', 'align-self': 'end', 'justify-self': 'start'}}>{`\u003c`}
        </Button>
        <div style={{'grid-area': 'month1', 'align-self': 'end', 'justify-self': 'center'}}>
          {MONTHS[month - 1]} {year}
        </div>

        <div style={{'grid-area': 'month2', 'align-self': 'end', 'justify-self': 'center'}}>
          {MONTHS[nextMonth - 1]} {nextYear}
        </div>
        <Button onClick={props.handleNextClick} style={{'grid-area': 'month2', 'align-self': 'end', 'justify-self': 'end'}}>{`\u003e`}
        </Button>
      </Header>

      <Body>
        <span style={{'grid-area': 'cal1', 'align-self': 'start', 'display': 'flex', 'flex-wrap': 'wrap'}}>
          {DAYSWEEK.map(d => {return (<Day>{d}</Day>)})}
          {Array(DAYS[month - 1] + (start))
            .fill(null)
            .map((_, index) => {
              let d = index - (start - 1);
                return (
                  <DayNum
                  key={index}
                  isSelected={d === day}>{d > 0 ? d : ''}</DayNum>
                )
            })
          }

        </span>

        <span style={{'grid-area': 'cal2', 'align-self': 'start', 'display': 'flex', 'flex-wrap': 'wrap'}}>
          {DAYSWEEK.map(d => {return (<Day>{d}</Day>)})}
          {Array(DAYS[nextMonth - 1] + (start2))
            .fill(null)
            .map((_, index) => {
              let d = index - (start2 - 1);
                return (
                  <DayNum
                  key={index}
                  isSelected={d === day}
                  //add in an event listener somewhere
                  // onClick={() => setDate(new Date(year, month, d))}
                  >
                    {d > 0 ? d : ''}</DayNum>
                )
            })
          }
        </span>
      </Body>

    </Frame>
  );
}

export default Calendar;