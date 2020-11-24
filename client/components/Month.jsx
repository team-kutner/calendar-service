import React from 'react';
const {styled} = global;
import moment from 'moment';
import { Day, AvailableDay, BookedDay } from './styles/calendar.styles.js';

const Month = ({checkIn, checkOut, month, booked, invalid, Span, next }) => {
  const DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const DAYSWEEK = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  let formatMonth = month.format('YYYYMMDD');
  let formatToday = parseInt(month.format('DD'));

  let year = parseInt(formatMonth.slice(0, 4));
  let currMonth = parseInt(formatMonth.slice(4, 6));
  let start = month.startOf('month').day();

  return (
    <Span>
      {DAYSWEEK.map(day => {return (<Day>{day}</Day>)})}
      {Array(DAYS[currMonth - 1] + (start))
        .fill(null)
        .map((_, index) => {
          let day = index - (start - 1);
          let hidden = moment().set({'year': year, 'month': currMonth-1, 'date': day}).format('YYYY-MM-DD');
          let selected = moment().set({'year': year, 'month': currMonth-1, 'date': day}).format('MM/DD/YYYY');
          if (booked.includes(hidden) || // greys out booked dates from DB
             (day < formatToday && !next) || // greys out all days before today's date
             (invalid.includes(selected)) // greys out dates inbetween today's date and checkin date
           ) {
            return (<BookedDay key={hidden}>{day > 0 ? day : ''}</BookedDay>)
          } else {
            return (<AvailableDay key={hidden} id={selected} select={selected == checkIn || selected == checkOut} hover={day > 0}>{day > 0 ? day : ''}</AvailableDay>)
          }
        })
      }
    </Span>
  )
}

export default Month;