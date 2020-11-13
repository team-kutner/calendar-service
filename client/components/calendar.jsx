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
  `;

    const Checkin = styled.div`
    grid-area: checkin;
    border: 1px solid black;
    border-radius: 15px 0 0 0;
    padding: 10px;
    `;

    const Checkout = styled.div`
    grid-area: checkout;
    border: 1px solid black;
    border-radius: 0 15px 0 0;
    padding: 10px;
    `;


    return (
      <CalendarContainer>
        <Checkin>Checkin</Checkin>
        <Checkout>Checkout</Checkout>
        <Guest />
      </CalendarContainer>
    );
}

export default Calendar;