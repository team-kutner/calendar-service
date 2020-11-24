// import React, { useState, useEffect } from 'react';
// import styled, { css } from 'styled-components';
const {React} = window;
const {styled} = global;
import {GuestExpand, GuestType, GuestNote, GuestNote12, Close, Button, ButtonContainer, Span} from './styles/GuestPopup.styles.js';
import GuestItem from './GuestItem.jsx'

function GuestPopup({adult, setAdult, child, setChild, infant, setInfant, maxGuests, toggleGuest}) {

  const adultMin = () => {if(adult > 1) {setAdult(adult - 1)}};
  const adultPlus = () => {if (adult < maxGuests) {setAdult(adult + 1)}};
  const childMin = () => {if(child > 0) {setChild(child - 1)}};
  const childPlus = () => {if((adult + child) < maxGuests) {setChild(child + 1)}};
  const infantMin = () => {if (infant > 0) {setInfant(infant - 1)}};
  const infantPlus = () => {setInfant(infant + 1)};

  const invalidAC = adult + child === maxGuests;

  return (

    <GuestExpand>
      <GuestItem guest={adult} typeStyle='adult' buttonStyle='adultbutton' button1={adultMin} button2={adultPlus} invalid1={adult === 1} invalid2={invalidAC} />
      <GuestItem guest={child} typeStyle='child' buttonStyle='childbutton' button1={childMin} button2={childPlus} invalid1={child === 0} invalid2={invalidAC} />
      <GuestItem guest={infant} typeStyle='infant' buttonStyle='infantbutton' button1={infantMin} button2={infantPlus} invalid1={infant === 0} />

      <GuestNote id='limit' style={{'grid-area': 'note'}}>{maxGuests} guests maximum. Infants don't count toward the number of guests.</GuestNote>

      <Close onClick={toggleGuest}>Close</Close>
    </GuestExpand>
  )
}

export default GuestPopup;
