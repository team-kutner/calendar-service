import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Guest from './guest.jsx';

function Calendar() {

  const CalendarContainer = styled.div`
    display: grid;
    grid-area: calendar;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 50% 50%;
    grid-template-areas:  "checkin checkout"
                          "guest guest";
    cursor: pointer;
  `;

    const Checkin = styled.div`
    grid-area: checkin;
    border: 1px solid	#505050;
    border-radius: 15px 0 0 0;
    padding: 20px;
    font-size: 16px;
    `;

    const Checkout = styled.div`
    grid-area: checkout;
    border: 1px solid #505050;
    border-radius: 0 15px 0 0;
    padding: 20px;
    font-size: 16px;
    `;


    return (
      <CalendarContainer>
        <Checkin><b>CHECK-IN</b>
          <div style={{'color': 'grey', 'font-size': '20px'}}>Add date</div>
        </Checkin>
        <Checkout><b>CHECK-OUT</b>
          <div style={{'color': 'grey', 'font-size': '20px'}}>Add date</div>
        </Checkout>
        <Guest />
      </CalendarContainer>
    );
}

export default Calendar;