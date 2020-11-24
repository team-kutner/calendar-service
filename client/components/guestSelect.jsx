// import React, { useState, useEffect } from 'react';
// import styled, { css } from 'styled-components';
const {React} = window;
const {useState} = React;
const {styled} = global;
import GuestPopup from './GuestPopup.jsx'
import {Wrapper, Guest, Arrow1, Span} from './styles/GuestSelect.styles.js';

function GuestSelect({maxGuests, adult, setAdult, child, setChild, infant, setInfant}) {
  const [showGuest, setShowGuest] = useState(false);

  const toggleGuest = function() {
    setShowGuest(!showGuest);
  };

  const arrowDirection = showGuest ? `\u02c5` : `\u02c4`;
  const infantDisplay = infant === 1 ? 'infant' : 'infants';
  const guestDisplay = adult + child < 2 ? 'guest' : 'guests'

  return (
    <Wrapper>
      <Guest className='showGuestName' onClick={toggleGuest}>
        <b>GUESTS</b><br/>
        <Span>
          {adult + child} {guestDisplay}
          {(infant > 0) && <Span>, {infant} {infantDisplay} </Span>}
        </Span>
      </Guest>
      <Arrow1 className='showGuestArrow' onClick={toggleGuest}>{arrowDirection}</Arrow1>

      {
      showGuest &&
        (<GuestPopup maxGuests={maxGuests} toggleGuest={toggleGuest} adult={adult} setAdult={setAdult} child={child} setChild={setChild} infant={infant} setInfant={setInfant}/>)
      }
    </Wrapper>
  )
}

export default GuestSelect;
