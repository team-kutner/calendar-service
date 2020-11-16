import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import GuestSelect from './guestSelect.jsx';

function Calendar(props) {

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


    return (
      <CalendarContainer>
        <Checkin><b>CHECK-IN</b>
          <div style={{'color': 'grey', 'font-size': '14px'}}>Add date</div>
        </Checkin>
        <Checkout><b>CHECK-OUT</b>
          <div style={{'color': 'grey', 'font-size': '14px'}}>Add date</div>
        </Checkout>
        <GuestSelect guests={props.guests}/>
      </CalendarContainer>
    );
}

export default Calendar;